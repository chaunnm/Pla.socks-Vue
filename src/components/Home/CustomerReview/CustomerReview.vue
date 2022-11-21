<template>
  <div class="review-container">
    <h2>What our customers say...</h2>
    <div class="carousel-container">
      <!-- <v-carousel
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
        cycle
        class="carousel-main"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-hight" align="center" justify="center">
              <div class="text-h2">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomerReview",
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
  //   computed: {},
  //   methods: {},
  //   mounted: {},
  //   watch: {},
};
</script>

<style lang="scss" src="./CustomerReview.scss" scoped></style>
