<template>
  <div class="main-container">
    <v-overlay :value="fullscreen" style="z-index: 999999999"></v-overlay>
    <div style="display: none" :class="{ overlayContent: fullscreen }">
      <img
        :src="getClickedProduct.image"
        :alt="getClickedProduct.variance"
        @click="fullscreen = !fullscreen"
      />
    </div>
    <div class="breadcrumb">
      <p>
        <router-link to="/">Home</router-link> /
        <router-link to="/">{{ getClickedProduct.category }}</router-link>
      </p>
    </div>
    <div class="content-container">
      <div class="img-container">
        <div>
          <figure
            class="product-img"
            @mousemove="zoom"
            @click="fullscreen = !fullscreen"
            :style="{ backgroundImage: 'url(' + getClickedProduct.image + ')' }"
          >
            <img :src="getClickedProduct.image" />
          </figure>
          <div class="img-variances">
            <figure
              v-for="(item, index) in getProductsSameName"
              :key="index"
              @click="handleClickItem(index)"
              :class="classActive(index)"
            >
              <img :src="item.image" :alt="item.variance" />
            </figure>
          </div>
        </div>
      </div>

      <div class="description-container">
        <h2>{{ getClickedProduct.itemTitle }}</h2>
        <hr />
        <p class="product-price">{{ formatOriginalPrice }}</p>
        <p>{{ description }}</p>
        <p>One size: 35-40</p>
        <p>Height: 15cm</p>
        <p>Thickness: {{ getClickedProduct.thickness }}</p>
        <p>Variance: Type {{ getClickedProduct.variance }}</p>
        <p class="stock">
          <span>{{ getClickedProduct.stock }} </span> in stock
        </p>
        <p class="quantity">
          <label for="quantity">Quantity:</label>
          <button class="qtyminus" aria-hidden="true" @click="decreaseQuantity">
            &minus;
          </button>
          <input
            type="number"
            name="quantity"
            id="quantity"
            min="1"
            :max="getClickedProduct.stock"
            step="1"
            value="1"
          />
          <button class="qtyplus" aria-hidden="true" @click="increaseQuantity">
            &plus;
          </button>

          <button class="add-cart" @click="handleAddToCart">ADD TO CART</button>
        </p>
        <div class="product-meta">
          <span class="sku-wrapper"
            >SKU: <span class="sku">HHS07-1300</span></span
          >

          <span class="posted-in"
            >Category: <a href="" rel="tag">Socks For Summer</a></span
          >
        </div>
        <div class="social-icons">
          <div
            class="round-circle facebook-share"
            data-hover="Share on Facebook"
          >
            <i class="fab fa-facebook-f"></i>
          </div>
          <div class="round-circle twitter-share" data-hover="Share on Twitter">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="round-circle email-share" data-hover="Email to a friend">
            <i class="far fa-envelope"></i>
          </div>
          <div
            class="round-circle pinterest-share"
            data-hover="Pin on Pinterest"
          >
            <i class="fab fa-pinterest"></i>
          </div>
          <div
            class="round-circle linkedin-share"
            data-hover="Share on LinkedIn"
          >
            <i class="fab fa-linkedin"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  title: "Pla.Socks",
  props: ["name", "variance"],
  data() {
    return {
      fullscreen: false,
      originalPrice: 51000,
      description:
        "The Socks only have one size, and are stretchy, suitable for shoes in the size range above according to EU size standards.",
      sale: 0.1,
      selectedItem: 0,
      productListDetail: [
        {
          itemTitle: "Happy High",
          variance: "Type 1",
          image:
            "https://plasocks.com/wp-content/uploads/2022/07/z3571975991764_6c5aac385ee991d1f32ba5405d596470-768x768.jpg",
          stock: "0",
          price: 100000,
        },
        {
          itemTitle: "Happy High",
          variance: "Type 2",
          image:
            "https://plasocks.com/wp-content/uploads/2022/07/z3571975989496_320be5d4342a3a90a48516b143ba6885.jpg",
          stock: "2",
          price: 78500,
        },
        {
          itemTitle: "Happy High",
          variance: "Type 3",
          image:
            "https://plasocks.com/wp-content/uploads/2022/07/z3571976000984_b32c5ed8c85e787edb59281f6d7da799-768x768.jpg",
          stock: "5",
          price: 85000,
        },
        {
          itemTitle: "Happy High",
          variance: "Type 4",
          image:
            "https://plasocks.com/wp-content/uploads/2022/07/z3571975985247_917b2be7dbea1cee4ce04094a34668ab-768x768.jpg",
          stock: "10",
          price: 105500,
        },
      ],
    };
  },
  name: "ProductItem",
  methods: {
    zoom(event) {
      let zoomer = event.currentTarget;
      let offsetX, offsetY, x, y;

      event.offsetX
        ? (offsetX = event.offsetX)
        : (offsetX = event.touches[0].pageX);
      event.offsetY
        ? (offsetY = event.offsetY)
        : (offsetX = event.touches[0].pageX);
      x = (offsetX / zoomer.offsetWidth) * 120;
      y = (offsetY / zoomer.offsetHeight) * 120;
      zoomer.style.backgroundPosition = x + "% " + y + "%";
    },
    handleZoom() {
      this.fullscreen = !this.fullscreen;
    },
    decreaseQuantity() {
      var value = parseInt(document.getElementById("quantity").value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? (value = 1) : "";
      value--;
      document.getElementById("quantity").value = value;
    },
    increaseQuantity() {
      var value = parseInt(document.getElementById("quantity").value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      document.getElementById("quantity").value = value;
    },
    handleClickItem(index) {
      this.selectedItem = index;
    },
    handleAddToCart() {
      var item = this.manipulateItemSelect;
      var value = parseInt(document.getElementById("quantity").value, 10);
      if (
        this.getClickedProduct.stock == 0 ||
        this.getClickedProduct.stock < value
      ) {
        this.$toast.open({
          message: "Not enough product items to add to cart! 😿",
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      } else {
        for (let index = 1; index <= value; index++) {
          this.$store.commit("ADD_CART_ITEM", item);
        }
        // this.ADD_CART_ITEM(item);
        this.getClickedProduct.stock -= value;
        this.$toast.open({
          message: "Product items added to cart successfully ^.< 🐧",
          type: "success",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      }
    },
    classActive(index) {
      return {
        active: this.selectedItem === index,
      };
    },
  },
  created() {
    const temp = this.getProductsSameName.length - this.variance;
    if (this.variance != 0 && this.variance && temp >= 0) {
      this.selectedItem = this.variance - 1;
    } else if (temp < 0) {
      this.$router.push(`/404`);
    } else {
      this.selectedItem = 0;
    }
  },
  computed: {
    formatOriginalPrice() {
      let number = this.originalPrice;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    getClickedProduct() {
      let index = this.selectedItem;
      return this.getProductsSameName[index];
    },
    manipulateItemSelect() {
      var id = this.cartQuantity + 1;
      var itemSelect = {
        cartId: id,
        quantity: 1,
      };
      var { stock, height, thickness, ...newObj } = this.getClickedProduct;
      var b = { ...itemSelect, ...newObj };
      console.log(b);
      console.log("Here is " + stock + " " + height + " " + thickness);
      return b;
    },
    getProductsSameName() {
      return this.productItemsName(this.name);
    },
    ...mapGetters({
      cartQuantity: "GET_CART_QUANTITY",
      productItems: "GET_PRODUCT_ITEMS",
      productItemsId: "GET_PRODUCT_ITEM_BY_ID",
      productItemsName: "GET_PRODUCT_ITEM_BY_NAME",
    }),
    ...mapMutations(["ADD_CART_ITEM,"]),
  },
  watch: {
    overlay(val) {
      val &&
        setTimeout(() => {
          this.fullscreen = false;
        }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped src="./ProductItem.scss"></style>
