<template>
  <div class="ourProduct-container">
    <div
      class="title d-flex align-center"
      data-aos="zoom-in"
    >
      <v-divider class="divider mr-4"></v-divider>
      <h3 class="text-center">Our Product</h3>
      <v-divider class="divider ml-4"></v-divider>
    </div>
    <div class="categories-container my-5">
      <CategoryItem
        class="category-item"
        v-for="item in visibleCategories"
        :key="item.categoryId"
        :category="item"
        data-aos="fade-right"
      />
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";
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
    }),
    visibleCategories() {
      var [...temp] = this.categoryList;
      return temp;
    },
  },
  created() {
    this.categoryList = this.categories;
  },
    mounted() {
    AOS.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 200, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-sine", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  },
};
</script>

<style lang="scss" src="./OurProducts.scss" scoped></style>
