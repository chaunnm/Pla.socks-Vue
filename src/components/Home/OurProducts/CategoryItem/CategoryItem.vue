<template>
  <div class="categoryItem-container">
    <figure
      class="category-img"
      :style="{ backgroundImage: 'url(' + category.image + ')' }"
    >
      <img :src="category.image" alt="" />
    </figure>
    <h3 class="category-title text-uppercase">{{ category.itemTitle }}</h3>
    <p class="category-des">{{ category.description }}</p>
    <router-link to="/shop">
      <v-btn elevation="2" outlined rounded>See more</v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  data: () => ({}),
  props: ["category"],
};
</script>

<style lang="scss" src="./CategoryItem.scss" scoped></style>
