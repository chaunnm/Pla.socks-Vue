<template>
  <div class="feature-container mb-10">
    <v-divider
      class="divider"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
    ></v-divider>
    <div class="list-feature d-flex justify-center align-start">
      <div
        class="first-feature d-flex flex-column"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-easing="linear"
        data-aos-once="true"
      >
        <img
          class="icon-priority-shipping"
          src="https://drive.google.com/uc?export=view&id=1VXYO0Xp9y8AF4SOj-XGrAvugCtYx9njY"
          alt="Priority Shipping"
        />
        Priority Shipping
      </div>
      <div
        class="second-feature d-flex flex-column"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1000"
        data-aos-easing="linear"
        data-aos-once="true"
      >
        <img
          class="icon-free-return"
          src="https://drive.google.com/uc?export=view&id=1357lBqz3CFE_t9lL1ZdCmBakpwj-5x7W"
          alt="Free return"
        />
        Free Return
      </div>
      <div
        class="third-feature d-flex flex-column"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-delay="1500"
        data-aos-easing="linear"
        data-aos-once="true"
      >
        <img
          class="icon-plastic"
          src="https://drive.google.com/uc?export=view&id=18wXvqOpCllYDWgLxDItNoUv64911sgIQ"
          alt="Knit With Plastic Material"
        />
        Knit With Plastic Material
      </div>
    </div>
    <v-divider
      class="divider"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-delay="2000"
      data-aos-once="true"
    ></v-divider>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "FeatureSection",
  //   data: () => ({}),
  //   computed: {},
  //   methods: {},
  mounted() {
    AOS.init();
  },
  //   watch: {},
};
</script>

<style lang="scss" src="./Feature.scss" scoped></style>
