<template>
  <div class="bestsellers-container mt-5">
    <v-sheet class="mx-auto" elevation="8">
      <div class="title d-flex align-center" data-aos="zoom-in">
        <v-divider class="divider mr-4"></v-divider>
        <h3 class="text-center">Best Sellers</h3>
        <v-divider class="divider ml-4"></v-divider>
      </div>
      <v-slide-group
        v-model="visibleProducts"
        class="main-container pa-4 pa-sm-2"
        show-arrows
      >
        <v-slide-item v-for="item in visibleProducts" :key="item.productId">
          <v-card class="ma-4" data-aos="flip-left">
            <ProductItem
              class="item mx-auto"
              :product="item"
              data-aos="flip-left"
            />
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductItem from "@/components/Home/BestSellers/ProductItem/ProductItem.vue";

export default {
  name: "BestSellers",
  data: () => ({
    productList: [],
  }),
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters({
      products: "GET_PRODUCT_ITEMS",
      productItemsId: "GET_PRODUCT_ITEM_BY_ID",
      productItemsName: "GET_PRODUCT_ITEM_BY_NAME",
      productItemsCategory: "GET_PRODUCT_ITEM_BY_CATEGORY",
    }),
    visibleProducts() {
      var [...temp] = this.productList;
      return temp.slice(0, 15);
    },
  },
  created() {
    this.productList = this.products;
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

<style lang="scss" src="./BestSellers.scss" scoped></style>
