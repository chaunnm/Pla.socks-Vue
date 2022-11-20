<template>
  <router-link
    :to="'/product/' + product.itemTitle + '/' + product.variance"
    id="shopItem"
  >
    <div class="sale-badge">-{{ product.sale }}%</div>
    <div class="shopItem-container">
      <figure
        class="image-container"
        :style="{ backgroundImage: 'url(' + product.image + ')' }"
      >
        <img :src="product.image" alt="" />
      </figure>
      <div class="quick-view">View Details</div>
      <div class="item-information">
        <p class="item-category">{{ product.category }}</p>
        <p class="item-title">
          {{ product.itemTitle }}
        </p>

        <div class="item-rating">
          <v-icon small color="#f299c2">fa-star</v-icon>
          <v-icon small color="#f299c2">fa-star</v-icon>
          <v-icon small color="#f299c2">fa-star</v-icon>
          <v-icon small color="#f299c2">fa-star</v-icon>
          <v-icon small color="#f299c2">fa-star</v-icon>
          <p>(100)</p>
        </div>
        <div class="item-price">
          <p class="original-price">
            {{ formatOriginalPrice(product.price) }}
          </p>
          <p class="sale-price">
            {{ calculateSalePrice(product.price, product.sale) }}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ShopItem",
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

<style lang="scss" scoped src="./ShopItem.scss"></style>
