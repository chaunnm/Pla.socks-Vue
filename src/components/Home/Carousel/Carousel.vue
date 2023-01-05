<template>
  <div class="carousel-container">
    <!-- <v-carousel
      cycle
      height="400"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="text-h2">{{ slide }} Slide</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel> -->
  </div>
</template>

<script>
export default {
  name: "CarouselSection",
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

<style lang="scss" src="./Carousel.scss" scoped></style>
