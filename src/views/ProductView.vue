<template>
  <div id="container">
    <ProductItem />
    <CommentRate/>
  </div>
</template>

<script>
// @ is an alias to /src
import CommentRate from "@/components/CommentRate.vue";
import ProductItem from "@/components/Product/ProductItem.vue";

export default {
  name: "ProductView",
  components: {
    ProductItem,
    CommentRate
},
};
</script>

<style scoped>
#container {
  margin: 0;
}
</style>
