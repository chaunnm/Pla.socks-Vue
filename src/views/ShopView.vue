<template>
  <div class="shop">
    <FilterSection />
    <div class="shop-container">
      <CategorySection id="categorySection" />
      <div class="really-main-content">
        <div class="main-content">
          <ShopItem
            class="item"
            v-for="item in visibleProducts"
            :key="item.productId"
            :product="item"
          />
        </div>
        <div class="pagination">
          <v-pagination
            v-model="page"
            :length="Math.ceil(products.length / perPage)"
            :total-visible="6"
            color="#4DB7B3"
            circle
          ></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import FilterSection from "@/components/Shop/FilterSection.vue";
import CategorySection from "@/components/Shop/CategorySection.vue";
import ShopItem from "@/components/Shop/ShopItem.vue";
export default {
  title: "Pla.Socks - Shop",
  name: "ShopView",
  data: () => ({
    page: 1,
    perPage: 4,
  }),
  watch: {},
  components: {
    FilterSection,
    CategorySection,
    ShopItem,
  },
  computed: {
    ...mapGetters({
      products: "GET_PRODUCT_ITEMS",
    }),
    visibleProducts() {
      return this.products.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.shop {
  .shop-container {
    max-width: 1080px;
    height: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin: auto;
    margin-top: 25px;
    display: grid;
    grid-template-columns: 27% 73%;
    .really-main-content {
      display: flex;
      flex-direction: column;
      .main-content {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        transition: all 0.5s ease-in-out;
        column-gap: 7px;
        row-gap: 10px;
      }
      .pagination {
        padding: 10px 0;
      }
    }
  }
}

@media screen and (max-width: 1080px) {
  .shop {
    .shop-container {
      display: flex;
      .really-main-content {
        .main-content {
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }
}

@media screen and (max-width: 900px) {
  .shop {
    .shop-container {
      display: flex;
      margin-top: 0;
      #categorySection {
        display: none;
      }
      .really-main-content {
        .main-content {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          .item {
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
