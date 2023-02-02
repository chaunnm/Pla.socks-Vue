<template>
  <div id="container">
    <CarouselSection />
    <OurProducts />
    <BestSellers />
    <ShopCustom />
    <PlasocksStory />
    <FeatureSection />
    <CustomerReview />
    <OurStore />
  </div>
</template>

<script>
import CarouselSection from "@/components/Home/Carousel/Carousel.vue";
import OurProducts from "@/components/Home/OurProducts/OurProducts.vue";
import BestSellers from "@/components/Home/BestSellers/BestSellers.vue";
import ShopCustom from "@/components/Home/ShopCustom/ShopCustom.vue";
import PlasocksStory from "@/components/Home/PlasocksStory/PlasocksStory.vue";
import FeatureSection from "@/components/Home/Feature/Feature.vue";
import CustomerReview from "@/components/Home/CustomerReview/CustomerReview.vue";
import OurStore from "@/components/Home/OurStore/OurStore.vue";

export default {
  title: "Pla.Socks",
  name: "HomeView",
  components: {
    CarouselSection,
    OurProducts,
    BestSellers,
    ShopCustom,
    PlasocksStory,
    FeatureSection,
    CustomerReview,
    OurStore,
  },
};
</script>

<style lang="scss" scoped></style>
