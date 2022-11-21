<template>
  <div id="container">
    <ProductItem :name="name" :variance="variance" />
    <CommentRate />
    <Slides />
  </div>
</template>

<script>
// @ is an alias to /src

import ProductItem from "@/components/Product/ProductItem/ProductItem.vue";
import CommentRate from "@/components/Product/CommentRate/CommentRate.vue";
import Slides from "@/components/Slider/SlidesRelatedProduct.vue";

export default {
  name: "ProductView",
  props: ["name", "variance"],
  components: {
    ProductItem,
    CommentRate,
    Slides
  },
};
</script>

<style scoped>
#container {
  margin: 0;
}
</style>
