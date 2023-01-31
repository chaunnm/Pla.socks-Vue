<template>
  <div class="main-container">
    <div class="banner-container">
      <div class="banner-img"></div>
    </div>
    <div class="sustain-content">
      <div class="left-box" data-aos="flip-up">
        <p>
          Sustainability has been a buzz word used by many brands over the last
          few years. Our core philosophies was to protect and nurture the
          environment, we decided to investigate the how ‘sustainable’ we were
          really behaving. And also figure out – what does sustainability really
          mean? After some research we realised that the impact the fashion
          industry was having on our planet is shocking – from producing over
          25% of waste water globally to contributing to the 30ft toxic landfill
          mountains (that we don’t see) in developing countries. And the most
          shocking truth was – we were blissfully unaware of this and should
          have been doing more.
        </p>
      </div>
      <div class="right-img" data-aos="flip-down">
        <img src="https://i.imgur.com/t7EDVrK.png" alt="" />
      </div>
    </div>
    <div class="first-para para">
      Our first step to contribute to a better planet and the world’s first 100%
      recycled sock. Why recycled? We wanted to combat the two issues that
      struck us most (i) to reduce our water consumption in production (ii) to
      reduce waste accumulation.
    </div>
    <div class="second-para para">
      We have pushed ourselves to make a sock that was even better in quality
      than our current production lines. The challenge we faced was sourcing
      recycled materials that possessed the same quality and features as the
      original but we think we cracked it.
    </div>
    <div class="third-para para">
      Our first goal is to be as transparent with you as much as possible and so
      we want you to be part of our process from our sourcing, to our
      production, <b>impact</b> and <b>ethics</b>.
    </div>
    <div class="last-para para">
      Join our movement and take a step forward to better our planet.
    </div>
  </div>
</template>

<script>
import "./Sustainability.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "SustainablilitySection",
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
