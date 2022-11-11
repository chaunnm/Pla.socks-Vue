<template>
  <div id="home">
    <ProductItem />
  </div>
</template>

<script>
// @ is an alias to /src
import ProductItem from "@/components/ProductItem.vue";

export default {
  name: "HomeView",
  components: {
    ProductItem,
  },
};
</script>

<style scoped>
#home {
  margin: 0;
}
</style>
