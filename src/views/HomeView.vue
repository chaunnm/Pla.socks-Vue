<template>
  <div>
    <ProductItem />
    <CommentRate />
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem.vue";
import CommentRate from "@/components/CommentRate.vue";

export default {
  name: "HomeView",
  components: {
    ProductItem,
    CommentRate,
},
};
</script>
