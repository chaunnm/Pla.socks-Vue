<template>
  <div id="container">
    <ProductItem />
    <ProductItem />
    <ProductItem />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductItem from "@/components/Product/ProductItem.vue";

export default {
  name: "ProductView",
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
#container {
  margin: 0;
}
</style>
