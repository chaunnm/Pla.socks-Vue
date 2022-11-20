<template>
  <div id="container">
    <CarouselSection/>
    <!-- <OurProducts/> -->
    <BestSellers/>
    <ShopCustom/>
    <PlasocksStory/>
    <FeatureSection/>
    <CustomerReview/>
    <OurStore/>
  </div>
</template>

<script>
import CarouselSection from '@/components/Home/Carousel/Carousel.vue';
// import OurProducts from '@/components/Home/OurProducts/OurProducts.vue';
import BestSellers from '@/components/Home/BestSellers/BestSellers.vue';
import ShopCustom from '@/components/Home/ShopCustom/ShopCustom.vue';
import PlasocksStory from '@/components/Home/PlasocksStory/PlasocksStory.vue';
import FeatureSection from '@/components/Home/Feature/Feature.vue';
import CustomerReview from '@/components/Home/CustomerReview/CustomerReview.vue';
import OurStore from '@/components/Home/OurStore/OurStore.vue';

export default {
  title: "Pla.Socks",
  name: "HomeView",
  components: {
    CarouselSection,
    // OurProducts,
    BestSellers,
    ShopCustom,
    PlasocksStory,
    FeatureSection,
    CustomerReview,
    OurStore
},
};
</script>

<style lang="scss" scoped>
.cart-item {
  td {
    padding: 10px 0;
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: 15px;
  }
  .item-remove {
    width: 2%;
    padding-right: 0;
    .delete {
      cursor: pointer;
      svg {
        color: #9a9a9a;
        font-size: 8px !important;
        padding: 5px 7px;
        border-radius: 50%;
        border: 2px solid #9a9a9a;
        transition: 0.3s ease;

        &:hover {
          color: black;
          border-color: black;
        }
      }
    }
  }
  .item-thumbnail {
    margin: auto 0;
    width: 18%;
    img {
      width: 90px;
    }
  }
  .item-name {
    margin: auto;
    text-align: left;

    a {
      text-decoration: none;
      color: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
    }

    p {
      font-size: 14px;
    }
    .subtotal {
      display: none;
      font-weight: 700;
    }
  }
  .item-price {
    margin: auto;
    font-weight: 500;
  }
  .item-quantity {
    position: relative;
    .item-quantity-container {
      display: inline-flex;
      margin-top: auto;
      margin-bottom: auto;
      label {
        flex: 1 0 100%;
        margin-bottom: 7px;
      }

      input {
        width: 34px;
        height: 40px;
        text-align: center;
        border: 1px solid #ddd;
        font-family: "Montserrat", sans-serif;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          appearance: none;
          margin: 0;
        }

        &:focus {
          box-shadow: 0 0 5px #ccc;
        }

        &:focus-visible {
          outline: none;
        }
      }

      button {
        font-family: "Montserrat", sans-serif;
        width: 1.8rem;
        height: 40px;
        color: #666;
        background: #f9f9f9;
        border: 1px solid #ddd;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          background-color: #c1c1c1;
        }

        &.qtyminus,
        &.qtyplus {
          z-index: 9;
        }

        &.add-cart {
          margin-left: 20px;
          width: fit-content;
          padding: 5px 22px;
          font-weight: 600;
          font-size: 16px;
          background-color: #f299c2;
          color: white;

          &:hover {
            background-color: #c27a9b;
            transition: 0.3s;
          }
        }
      }
    }
  }
  .item-subtotal {
    margin: auto;
    text-align: right;
    font-weight: 600;
  }
}
</style>
