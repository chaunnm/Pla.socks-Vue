<template>
  <div id="container">
    <ProductItem :name="name" :variance="variance" />
    <CommentRate />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductItem from "@/components/Product/ProductItem.vue";
import CommentRate from "@/components/Product/CommentRate.vue";

export default {
  name: "ProductView",
  props: ["name", "variance"],
  components: {
    ProductItem,
    CommentRate,
  },
};
</script>

<style scoped>
#container {
  margin: 0;
}
</style>
