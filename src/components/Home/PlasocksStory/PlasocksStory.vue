<template>
  <div
    class="plasocks-story-container d-flex align-center justify-space-around mb-10"
  >
    <div class="video-container d-flex justify-center">
      <video autoplay loop data-aos="fade-up">
        <source
          src="https://drive.google.com/uc?id=1stW5V2EYn5tSIpKGFfzSruptENntYfJM"
          type="video/mp4"
        />
      </video>
    </div>
    <div
      class="story-content d-flex flex-column align-start"
      data-aos="fade-left"
    >
      <h1 class="title-story text-uppercase">Pla.socks story</h1>
      <p class="content">
        We are passionate about making our socks and we also care deeply about
        where our raw materials come from, our plastic recycled is developed,
        spun and dyed in Vietnam and we know who we’re working with every step
        of the way. Our members are kind, hard-working people — which means our
        socks are born and bred in love.
      </p>
      <router-link class="btn-container" to="/our-story">
        <v-btn
          class="btn-learn-more uppercase white--text font-weight-bold"
          color="#4db7b3"
          elevation="4"
        >
          <div class="btn-text">Learn more</div>
          <i class="icon-more fas fa-plus"></i>
        </v-btn>
      </router-link>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "PlasocksStory",
  //   data: () => ({}),
  //   computed: {},
  //   methods: {},
  mounted() {
    AOS.init({
      // Global settings:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "linear", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  },
  //   watch: {},
};
</script>

<style lang="scss" src="./PlasocksStory.scss" scoped></style>
