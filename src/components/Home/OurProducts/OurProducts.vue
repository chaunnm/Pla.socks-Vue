<template>
  <div class="ourProduct-container">
    <div
      class="title d-flex align-center"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <v-divider class="divider mr-4"></v-divider>
      <h3 class="text-center">Our Product</h3>
      <v-divider class="divider ml-4"></v-divider>
    </div>
    <div class="categories-container">
      <CategoryItem
        class="category-item"
        v-for="item in visibleCategories"
        :key="item.categoryId"
        :category="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CategoryItem from "@/components/Home/OurProducts/CategoryItem/CategoryItem.vue";

export default {
  name: "OurProducts",
  data: () => ({
    categoryList: [],
  }),
  components: {
    CategoryItem,
  },
  computed: {
    ...mapGetters({
      categories: "GET_CATEGORY_LIST",
      categoryListId: "GET_CATEGORY_LIST_BY_ID",
      productItemsCategory: "GET_PRODUCT_ITEM_BY_CATEGORY",
    }),
    visibleCategories() {
      var [...temp] = this.categoryList;
      return temp;
    },
  },
  created() {
    this.categoryList = this.categories;
  },
};
</script>

<style lang="scss" src="./OurProducts.scss" scoped></style>
