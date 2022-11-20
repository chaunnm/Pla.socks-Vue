<template>
  <div class="ourstore-container">
    <div
      class="title d-flex align-center"
      data-aos="zoom-in"
      data-aos-duration="1000"
      data-aos-once="true"
    >
      <v-divider class="divider mr-4"></v-divider>
      <h3 class="text-center">Our Store - Pla.socks</h3>
      <v-divider class="divider ml-4"></v-divider>
    </div>
    <div class="container d-flex justify-space-around align-start mt-10">
      <p class="map-container">
        <iframe
          style="border: 0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.898253528862!2d106.6906769139761!3d10.819097961365031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529a475566011%3A0x8f5b852463203cdf!2zNjQgTmd1ecOqbiBI4buTbmcsIFBoxrDhu51uZyAxLCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCA3MTAwMDQsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1668428690095!5m2!1sen!2s"
          class="map"
          allowfullscreen="allowfullscreen"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
          data-aos-easing="linear"
        ></iframe>
      </p>
      <div
        class="content text-right ms-5"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="500"
        data-aos-once="true"
        data-aos-easing="linear"
      >
        <h3 class="mb-5">Our Store</h3>
        <p>
          Pla.socks – 64, Nguyen Hong Street, Ward 1, Go Vap District, Ho Chi
          Minh City
        </p>
        <p>Phone: 0834577251</p>
        <p>Email: plasocks@gmail.com</p>
        <p>Fanpage: https://www.facebook.com/100086238443312</p>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  name: "OurStore",
  //   data: () => ({}),
  //   computed: {},
  //   methods: {},
  mounted() {
    AOS.init();
  },
  //   watch: {},
};
</script>

<style lang="scss" src="./OurStore.scss" scoped></style>
