<template>
  <div class="main-container">
    <div class="intro-container">
      <div class="video-container">
        <video autoplay loop>
          <source
            src="https://drive.google.com/uc?id=1stW5V2EYn5tSIpKGFfzSruptENntYfJM"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="video-text">
        <h1>OUR STORY</h1>
        <h2>Made in <span>VietNam</span> since 2022</h2>
      </div>
    </div>
    <div class="plasoc-intro">
      <div class="intro-top">
        <div class="top-img" data-aos="fade-right">
          <img src="https://i.imgur.com/D2IJZFI.png" alt="" />
        </div>
        <div class="top-box" data-aos="fade-left">
          <h3>Be good! Feel good!</h3>
          <p>
            We are passionate about making our socks here and we also care
            deeply about where our raw materials come from. We know who we're
            working with every step of the way. Our employees and factories are
            kind, hard-working people in the south of Vietnam.
          </p>
          <p>
            Partnering with manufacturing companies here at home allows us to
            ensure our socks are some of the most comfortable, durable, and
            environmentally friendly socks around.
          </p>
        </div>
      </div>
      <div class="intro-bottom">
        <div class="bottom-box" data-aos="zoom-in-right">
          <h3>Born and bred in the South</h3>
          <p>
            At Pla.Socks, we are honored to learn the extensive plastic-to-woven
            sock manufacturing processes in our family-owned factory. Pla.Sock
            creates products made from plastic with two important missions. For
            society, we want to raise environmental awareness for everyone. More
            than that, Pla.Stocks wants to create new trends, create recycling
            habits for customers and create sustainable products in the fashion
            market. For customers using Pla.Socks products, we want to promote a
            minimalist lifestyle. Not only that, we also provide high quality,
            safe, synchronous, long-lasting socks at reasonable prices.
          </p>
        </div>
        <div class="bottom-img" data-aos="zoom-in-left">
          <img src="https://i.imgur.com/clkGVbq.png" alt="" />
        </div>
      </div>
    </div>
    <div class="commitments-container">
      <h2>Sustainable & eco-conscious</h2>
      <div class="commitments-icons">
        <div data-aos="flip-left">
          <img
            src="https://drive.google.com/uc?id=1UeQ32vZCkCYJ1Zl2AqREjF1SjaR2wvkc"
            alt=""
          />
          <h3>Made in Vietnam</h3>
        </div>
        <div data-aos="flip-up">
          <img
            src="https://drive.google.com/uc?id=1sIr563NDWeJEflZzXX9hahvvCgWUb8hP"
            alt=""
          />
          <h3>Knit with plastic material</h3>
        </div>
        <div data-aos="flip-right">
          <img
            src="https://drive.google.com/uc?id=1HekQRVYU6U9HAT7ugvsNq5ecYtMFZi1K"
            alt=""
          />
          <h3>Low impact dyes</h3>
        </div>
      </div>
      <button>LEARN MORE</button>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "OurStory",
  data: () => ({}),
  computed: {},
  methods: {},
  watch: {},
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

<style lang="scss" scoped src="./OurStory.scss"></style>
