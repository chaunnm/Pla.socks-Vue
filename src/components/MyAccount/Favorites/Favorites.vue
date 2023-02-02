<template>
  <div class="main-container">
    <div class="header-title">
      <v-icon class="icon-title">mdi-thumb-up</v-icon>
      Favorites
    </div>
    <v-divider class="mb-6 mt-2"></v-divider>
    <div class="favorite-list">
      <div
        class="favorite-item"
        v-for="item in productData"
        :key="item.productId"
      >
        <ShopItem :product="item" />
      </div>
      <!-- <div class="favorite-item">
        <ShopItem :product="item" />
      </div>
      <div class="favorite-item">
        <ShopItem :product="item" />
      </div>
      <div class="favorite-item">
        <ShopItem :product="item" />
      </div> -->
    </div>
  </div>
</template>

<script>
import ShopItem from "@/components/Shop/ShopItem.vue";
export default {
  name: "favoritesComponent",
  components: {
    ShopItem,
  },
  data: () => ({
    item: {
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
        productId: 7,
        itemTitle: "Race Performance Socks",
        variance: 3,
        image:
          "https://www.dynafit.com/media/image/fc/24/f5/120b4f2e-45d1-4704-94e8-59e0c6a46984_dynafit_600x600.jpg",
        stock: "10",
        sold: "0",
        price: 120000,
        height: 110,
        category: "Customized Sock",
        thickness: "Medium",
        sale: 12,
        review: [],
        createdAt: "2022-06-16T18:40:48.113Z",
      },
      {
        productId: 9,
        itemTitle: "Stripes Short Socks",
        variance: 1,
        image:
          "https://cdn.shopify.com/s/files/1/0249/5699/3587/products/5_1_1aef2493-3f2e-4e72-b151-dc2657c8c1b6_600x.jpg?v=1638253739",
        stock: "10",
        sold: "0",
        price: 63000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 5,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 10,
        itemTitle: "Stripes Short Socks",
        variance: 2,
        image:
          "https://cdn.shopify.com/s/files/1/0249/5699/3587/products/5_f5d5a2ce-f2a0-442a-b76e-773309f3d864_600x.jpg?v=1671531447",
        stock: "10",
        sold: "0",
        price: 63000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 5,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
      {
        productId: 11,
        itemTitle: "Stripes Short Socks",
        variance: 3,
        image:
          "https://cdn.shopify.com/s/files/1/0249/5699/3587/products/27_d15e25c4-64cc-4f89-b999-1c3daceae589_600x.jpg?v=1671531535",
        stock: "10",
        sold: "0",
        price: 63000,
        height: 110,
        category: "Socks For Men",
        thickness: "Medium",
        sale: 5,
        review: [],
        createdAt: "2022-07-16T18:40:48.113Z",
      },
    ],
  }),
};
</script>

<style lang="scss" scoped src="./Favorites.scss"></style>
