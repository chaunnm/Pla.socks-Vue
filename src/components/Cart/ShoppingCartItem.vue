<template>
  <tr class="cart-item">
    <td class="item-remove">
      <div class="delete" @click="handleClickDelete()">
        <v-icon x-small class="icons-item">fa-x</v-icon>
      </div>
    </td>
    <td class="item-thumbnail">
      <img :src="cartItem.image" :alt="cartItem.variance" />
    </td>
    <td class="item-name">
      <router-link
        :to="`/product/${cartItem.itemTitle}/${cartItem.variance}`"
        >{{ cartItem.itemTitle }}</router-link
      >
      <p class="variance">Variance: {{ cartItem.variance }}</p>
      <p class="subtotal">
        {{ formatOriginalPrice(cartItem.quantity * cartItem.price) }}
      </p>
    </td>
    <td class="item-price">
      {{ formatOriginalPrice(cartItem.price) }}
      <!-- {{ temp2 }} -->
    </td>
    <td class="item-quantity">
      <div class="item-quantity-container">
        <button class="qtyminus" aria-hidden="true" @click="decreaseQuantity()">
          &minus;
        </button>
        <input
          type="number"
          name="quantity"
          id="quantity"
          min="1"
          max="30"
          step="1"
          disabled
          :value="cartItem.quantity"
        />
        <button class="qtyplus" aria-hidden="true" @click="increaseQuantity()">
          &plus;
        </button>
      </div>
    </td>
    <td class="item-subtotal">
      {{ formatOriginalPrice(cartItem.quantity * cartItem.price) }}
    </td>
  </tr>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "ShoppingCartItem",
  data: () => ({
    temp2: 0,
  }),
  props: ["cartItem"],
  watch: {},
  methods: {
    formatOriginalPrice(value) {
      let number = value;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    handleClickDelete() {
      this.$store.commit("DELETE_CART_ITEM", this.cartItem.cartId);
      this.$toast.open({
        message: "🙈 Delete item from cart successfully! 🙉",
        type: "success",
        duration: 2000,
        dismissible: true,
        position: "bottom",
      });
    },
    decreaseQuantity() {
      const temp = this.cartItem.quantity - 1;
      if (temp > 0) {
        this.$store.commit("CHANGE_CART_QUANTITY", {
          cartId: this.cartItem.cartId,
          quantity: -1,
        });
        this.$store.commit("CHANGE_PRODUCT_STOCK", {
          productId: this.cartItem.productId,
          quantity: 1,
        });
      } else {
        this.$store.commit("DELETE_CART_ITEM", this.cartItem.cartId);
        this.$toast.open({
          message: "🙈 Delete item from cart successfully! 🙉",
          type: "success",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      }
    },
    increaseQuantity() {
      var temp = this.product(this.cartItem.productId).stock - 1;
      if (temp >= 0) {
        this.$store.commit("CHANGE_CART_QUANTITY", {
          cartId: this.cartItem.cartId,
          quantity: 1,
        });
        this.$store.commit("CHANGE_PRODUCT_STOCK", {
          productId: this.cartItem.productId,
          quantity: -1,
        });
      } else {
        this.$toast.open({
          message: "😢 There is not enough item in stock to add! 😭",
          type: "error",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      }
    },
  },
  computed: {
    ...mapGetters({
      quantity: "GET_CART_QUANTITY",
      cartItems: "GET_CART_ITEMS",
      totalPrice: "GET_CART_PRICE",
      product: "GET_PRODUCT_ITEM_BY_ID",
    }),
    ...mapMutations([
      "ADD_CART_ITEM",
      "DELETE_CART_ITEM",
      "CHANGE_CART_QUANTITY",
      "CHANGE_PRODUCT_STOCK",
    ]),
  },
};
</script>

<style lang="scss" scoped src="./ShoppingCartItem.scss"></style>
