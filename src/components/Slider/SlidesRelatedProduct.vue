<template>
  <div class="container">
    <!-- <ProductBlockVue /> -->
    <v-sheet class="mx-auto" elevation="8" max-width="1080">
      <v-slide-group
        v-model="getProductItem"
        class="pa-4"
        active-class="success"
        show-arrows
      >
        <v-slide-item v-for="item in productData" :key="item.productId">
          <v-card
            class="ma-4"
            height="320"
            align="center"
            justify="center"
            width="100%"
          >
            <ProductBlockVue :product="item" />
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductBlockVue from "./ProductBlock.vue";
export default {
  name: "slider-related",
  components: {
    ProductBlockVue,
  },
  comments: {
    ...mapGetters(["GET_PRODUCT_ITEMS"]),
  },
  data() {
    return {
      productData: [
        {
          productId: 1,
          itemTitle: "Happy High",
          variance: 1,
          image:
            "https://cdn.shopify.com/s/files/1/1781/5821/products/Hands_across_calves_1.jpg?v=1633433719&width=1445",
          stock: "0",
          sold: "0",
          price: 100000,
          height: 100,
          category: "Boxes Of Love",
          thickness: "Medium",
          sale: 51,
          review: [],
          createdAt: "2022-11-16T18:40:48.113Z",
        },
        {
          productId: 2,
          itemTitle: "Happy High",
          variance: 2,
          image:
            "https://cdn.shopify.com/s/files/1/1781/5821/products/Sasquatch_Valentine_1.jpg?v=1633433719&width=1445",
          stock: "2",
          sold: "0",
          price: 100000,
          height: 80,
          category: "Boxes Of Love",
          thickness: "High",
          sale: 51,
          review: [],
          createdAt: "2022-11-16T18:40:48.113Z",
        },
        {
          productId: 3,
          itemTitle: "Happy High",
          variance: 3,
          image:
            "https://cdn.shopify.com/s/files/1/1781/5821/products/Fox_Love_1.jpg?v=1633433719&width=1445",
          stock: "5",
          sold: "0",
          price: 100000,
          height: 90,
          category: "Customized Socks",
          thickness: "High",
          sale: 51,
          review: [],
          createdAt: "2022-11-16T18:40:48.113Z",
        },
        {
          productId: 4,
          itemTitle: "Happy High",
          variance: 4,
          image:
            "https://i0.wp.com/yaya21.co.uk/wp-content/uploads/2019/10/Happy-Socks-I-Love-You-Gift-Box_XLOV08-4300_5.jpg?resize=800%2C800&ssl=1",
          stock: "10",
          sold: "0",
          price: 100000,
          height: 110,
          category: "Socks For Men",
          thickness: "Medium",
          sale: 51,
          review: [],
          createdAt: "2022-11-16T18:40:48.113Z",
        },
        {
          productId: 5,
          itemTitle: "Race Performance Socks",
          variance: 1,
          image:
            "https://www.dynafit.com/media/image/7c/1e/de/03385e4a-b625-48d7-b6af-9d9739f5a05c_dynafit_600x600.jpg",
          stock: "10",
          sold: "0",
          price: 120000,
          height: 110,
          category: "Customized Socks",
          thickness: "Medium",
          sale: 12,
          review: [],
          createdAt: "2022-06-16T18:40:48.113Z",
        },
      ],
    };
  },
  computed: {
    getProductItem() {
      return this.$store.state.productData;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
</style>
