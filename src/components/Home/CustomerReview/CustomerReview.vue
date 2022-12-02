<template>
  <div class="review-container">
    <h2 class="review-title mb-5">What our customers say...</h2>
    <div class="main-container">
      <v-carousel
        hide-delimiter-background
        show-arrows-on-hover
        cycle
        class="carousel-container"
      >
        <v-carousel-item class="carousel-item">
          <v-sheet
            class="carousel-sheet"
            color="rgb(234, 221, 210)"
            height="100%"
            
          >
            <v-row class="carousel-row fill-height">
              <ReviewItem
                class="review-item"
                v-for="item in firstReviews"
                :key="item.reviewId"
                :review="item"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
        <v-carousel-item class="carousel-item">
          <v-sheet
            class="carousel-sheet"
            color="rgb(234, 221, 210)"
            height="100%"
            width="90vw"
          >
            <v-row class="carousel-row fill-height">
              <ReviewItem
                class="review-item"
                v-for="item in secondReviews"
                :key="item.reviewId"
                :review="item"
              />
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script>
import ReviewItem from "../CustomerReview/ReviewItem/ReviewItem.vue";
import { mapGetters } from "vuex";

export default {
  name: "CustomerReview",
  data: () => ({
    reviewList: [],
  }),
  components: {
    ReviewItem,
  },
  computed: {
    ...mapGetters({
      reviews: "GET_REVIEW_LIST",
      reviewsId: "GET_REVIEW_BY_ID",
    }),
    firstReviews() {
      var [...temp] = this.reviewList;
      return temp.slice(0, 3);
    },
    secondReviews() {
      var [...temp] = this.reviewList;
      return temp.slice(3, 6);
    },
  },
  created() {
    this.reviewList = this.reviews;
  },
  //   methods: {},
  //   mounted: {},
  //   watch: {},
};
</script>

<style lang="scss" src="./CustomerReview.scss" scoped></style>
