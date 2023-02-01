<template>
  <router-link
    :to="'/product/' + product.itemTitle + '/' + product.variance"
    id="productItem"
  >
    <div class="sale-badge">-{{ product.sale }}%</div>
    <div class="productItem-container">
      <figure
        class="image-container"
        :style="{ backgroundImage: 'url(' + product.image + ')' }"
      >
        <img :src="product.image" alt="" />
        <div class="item-information">
          <p class="item-box"></p>
          <p class="item-category text-uppercase black--text font-weight-bold">{{ product.category }}</p>
          <p class="item-title black--text font-weight-bold">
            {{ product.itemTitle }}
          </p>
          <div class="item-price">
            <p class="original-price">
              {{ formatOriginalPrice(product.price) }}
            </p>
            <p class="sale-price">
              {{ calculateSalePrice(product.price, product.sale) }}
            </p>
          </div>
          <router-link to="/shop" class="btn-container">
        <v-btn class="btn-quick-view" elevation="2" rounded x-small color="rgba(0,0,0,0.2)"
          >View detail</v-btn
        >
      </router-link>
        </div>
      </figure>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ProductItem",
  data: () => ({}),
  props: ["product"],
  methods: {
    formatOriginalPrice(value) {
      let number = value;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    calculateSalePrice(value, sale) {
      let number = value - (value * sale) / 100;
      return this.formatOriginalPrice(number);
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped src="./ProductItem.scss"></style>
