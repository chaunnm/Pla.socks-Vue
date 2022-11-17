<template>
  <router-link :to="'/product/' + product.itemTitle" id="shopItem">
    <!-- <v-badge
      left
      overlap
      :content="'-' + product.sale + '%'"
      :value="'-' + product.sale + '%'"
      color="#F299C2"
      offset-x="45"
      offset-y="60"
    > -->
    <div class="sale-badge">-{{ product.sale }}%</div>
    <div class="shopItem-container">
      <figure
        class="image-container"
        :style="{ backgroundImage: 'url(' + product.image + ')' }"
      >
        <img :src="product.image" alt="" />
      </figure>
      <div class="quick-view">Quick View</div>
      <div class="item-information">
        <p class="item-category">{{ product.category }}</p>
        <p class="item-title">
          {{ product.itemTitle }}
        </p>

        <div class="item-rating">
          <v-icon small color="#f299c2">fa-star</v-icon>
          <v-icon small color="#f299c2">fa-star</v-icon>
          <v-icon small color="#f299c2">fa-star</v-icon>
          <v-icon small color="#f299c2">fa-star</v-icon>
          <v-icon small color="#f299c2">fa-star</v-icon>
          <p>(100)</p>
        </div>
        <div class="item-price">
          <p class="original-price">
            {{ formatOriginalPrice(product.price) }}
          </p>
          <p class="sale-price">
            {{ calculateSalePrice(product.price, product.sale) }}
          </p>
        </div>
      </div>
    </div>
    <!-- </v-badge> -->
  </router-link>
</template>

<script>

export default {
  name: "ShopItem",
  data: () => ({}),
  props: ["product"],
  methods: {
    formatOriginalPrice(value) {
      let number = value;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    calculateSalePrice(value, sale) {
      let number = value - (value * sale) / 100;
      return this.formatOriginalPrice(number);
    },
  },
  watch: {},
};
</script>

<style lang="scss" scoped>
// :global(.v-badge) {
//   line-height: normal !important;
// }

// :global(.v-badge__badge) {
//   // font-size: 16px !important;
//   // font-weight: 600;
//   // height: 51px;
//   // text-align: center;
//   // padding-top: 17px;
//   // border-radius: 50px;
//   // cursor: default;
//   z-index: 8;
// }

#shopItem {
  text-decoration: none;
  color: #919191;
  height: fit-content;
  position: relative;
  .sale-badge {
    width: 50px;
    height: 50px;
    background-color: #f299c2;
    position: absolute;
    top: 10px;
    left: -10px;
    color: white;
    font-size: 17px;
    text-align: center;
    font-weight: 600;
    line-height: 50px;
    border-radius: 50px;
    z-index: 8;
  }
  .shopItem-container {
    height: 100%;
    max-width: 180px;
    overflow: hidden;
    // background-color: red;
    position: relative;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 16%), 0 3px 6px rgb(0 0 0 / 23%);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s,
      color 0.3s, opacity 0.3s;

    &:hover {
      box-shadow: 0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 22%);
      transform: scale(1.005);
      .quick-view {
        display: block;
        opacity: 1;
        animation: moveInUp 0.5s ease-out;
        animation-fill-mode: backwards;
        transform: translateY(0px);
      }
      .image-container {
        animation: fadeIn 0.3s ease-out;
        animation-fill-mode: backwards;
        img {
          opacity: 0;
        }
      }
    }
    @keyframes moveInUp {
      0% {
        opacity: 0;
        transform: translateY(40%);
      }

      100% {
        opacity: 1;
        transform: translateY(0px);
      }
    }
    @keyframes moveInDown {
      0% {
        opacity: 0.5;
        transform: translateY(0px);
      }

      100% {
        opacity: 0;
        transform: translateY(40%);
      }
    }
    @keyframes fadeIn {
      0% {
        opacity: 0.5;
      }

      100% {
        opacity: 1;
      }
    }
    .image-container {
      background-size: contain;
      width: fit-content;
      height: fit-content;
      z-index: 5;
      position: relative;
      img {
        width: 180px;
        transform: scale(1.1);
        transition: 0.5s ease-out;
      }
    }
    .quick-view {
      display: block;
      opacity: 0;
      animation: moveInDown 0.3s ease-out;
      width: 100%;
      text-align: center;
      color: white;
      padding: 7px;
      box-sizing: border-box;
      font-weight: 600;
      background-color: #4db7b3;
      position: absolute;
      top: 43%;
      z-index: 10;
      transition: 0.5s ease;
    }
    .item-information {
      z-index: 20;
      position: relative;
      background-color: white;
      padding: 7px;
      box-sizing: border-box;
      .item-category {
        color: #777777;
        font-size: 12px;
        margin-bottom: 0;
        padding: 7px 0;
      }

      .item-title {
        font-size: 15px;
        color: #919191;
        margin-bottom: 25px;
        transition: 0.3s ease;
        overflow: hidden;
        display: -webkit-box;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        &:hover {
          color: black;
        }
      }
      .item-rating {
        display: flex;
        svg {
          margin: auto 0;
        }
        p {
          margin: 0;
          margin-left: 5px;
          font-size: 14px;
        }
      }
      .item-price {
        display: flex;
        margin-top: 10px;
        font-size: 15.5px;
        justify-content: space-between;
        .original-price {
          text-decoration: line-through;
          float: left;
        }
        .sale-price {
          float: right;
          font-weight: 600;
          color: black;
        }
      }
    }
  }
}
@media screen and (max-width: 1080px) {
  #shopItem {
    .shopItem-container {
      max-width: 220px;
      .image-container {
        img {
          width: 100%;
        }
      }
      .quick-view {
        top: 48%;
      }
    }
  }
}
</style>
