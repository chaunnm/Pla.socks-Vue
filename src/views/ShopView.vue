<template>
  <div class="shop">
    <FilterSection
      @changeFilter="updateFilter($event)"
      @changeCategory="updateCategory($event)"
    />
    <div class="shop-container">
      <CategorySection
        id="categorySection"
        @changeCategory="updateCategory($event)"
      />
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
            :length="Math.ceil(productList.length / perPage)"
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
  // props: ["temp"],
  data: () => ({
    selectedCategory: "",
    selectedFilter: 4,
    productList: [],
    page: 1,
    perPage: 12,
  }),
  components: {
    FilterSection,
    CategorySection,
    ShopItem,
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
      switch (this.selectedFilter) {
        case 1:
          temp.sort(this.popularSort);
          break;
        case 3:
          temp.sort(this.dateSort);
          break;
        case 4:
          temp.sort(this.ascendingSort);
          break;
        case 5:
          temp.sort(this.descendingSort);
          break;
        default:
          break;
      }
      return temp.slice(
        (this.page - 1) * this.perPage,
        this.page * this.perPage
      );
    },
  },
  created() {
    this.productList = this.products;
  },
  methods: {
    updateCategory(value) {
      this.selectedCategory = value;
    },
    updateFilter(value) {
      this.selectedFilter = value;
    },
    calculateSalePrice(value, sale) {
      let number = value - (value * sale) / 100;
      return number;
    },
    ascendingSort(a, b) {
      let left = this.calculateSalePrice(a.price, a.sale);
      let right = this.calculateSalePrice(b.price, b.sale);
      return parseInt(left, 10) - parseInt(right, 10);
    },
    descendingSort(a, b) {
      let left = this.calculateSalePrice(b.price, b.sale);
      let right = this.calculateSalePrice(a.price, a.sale);
      return parseInt(left, 10) - parseInt(right, 10);
    },
    popularSort(a, b) {
      return parseInt(b.sold, 10) - parseInt(a.sold, 10);
    },
    dateSort(a, b) {
      var dateA = new Date(a.createdAt);
      var dateB = new Date(b.createdAt);
      return dateB - dateA;
    },
  },
  watch: {
    $route() {
      this.selectedFilter = 4;
    },
    selectedCategory(value) {
      this.productList = this.productItemsCategory(value);
    },
  },
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
        row-gap: 2rem;
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
