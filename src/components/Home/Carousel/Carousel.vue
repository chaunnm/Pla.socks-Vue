<template>
  <div class="carousel-container">
    <v-carousel
      hide-delimiter-background
      show-arrows-on-hover
      cycle
      class="carousel"
      width="100%"
    >
      <v-carousel-item class="carousel-item">
        <v-sheet class="carousel-sheet-1" height="100%">
          <v-row class="carousel-row fill-height">
            <div class="main-content">
              <h1 class="title my-5">Pla.Socks</h1>
              <h4 class="introduction my-4">
                Using a pair of Pla.Socks socks, you have successfully rescued
                10 discarded plastic bottles, together with Pla.socks careate a
                sustainable green future from green footsteps!
              </h4>
              <v-divider class="divider my-4"></v-divider>
            </div>

            <div class="buttons-container">
              <router-link to="/shop" class="btn-container">
                <v-btn class="button" elevation="2" outlined x-large>
                  <div class="btn-text">Shop men</div>
                  <i class="btn-icon fa-solid fa-bag-shopping"></i>
                </v-btn>
              </router-link>
              <router-link to="/shop" class="btn-container mx-5">
                <v-btn class="button" elevation="2" outlined x-large>
                  <div class="btn-text">Shop custom</div>
                  <i class="btn-icon fa-solid fa-bag-shopping"></i>
                </v-btn>
              </router-link>
              <router-link to="/shop" class="btn-container">
                <v-btn class="button" elevation="2" outlined x-large>
                  <div class="btn-text">Shop women</div>
                  <i class="btn-icon fa-solid fa-bag-shopping"></i>
                </v-btn>
              </router-link>
            </div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item class="carousel-item">
        <v-sheet class="carousel-sheet-2" height="100%">
          <v-row class="carousel-row">
            <div class="main-content mt-5">
              FREE CUSTOM! <br />
              DESIGN YOUR OWN SOCKS
            </div>
            <router-link to="/shop" class="btn-container mt-5">
              <v-btn
                class="button uppercase white--text font-weight-bold"
                elevation="4"
                color="#4db7b3"
                x-large
              >
                <div class="btn-text">Shop custom</div>
                <i class="btn-icon fa-solid fa-bag-shopping"></i>
              </v-btn>
            </router-link>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item class="carousel-item">
        <v-sheet class="carousel-sheet-3" height="100%">
          <v-row class="carousel-row ms-5">
            <div class="main-content mt-5">
              <h3 class="text-uppercase white--text">Spring 2023</h3>
              <h1 class="white--text">MADE BY FAMILY SOCK MAKER</h1>
            </div>
            <router-link to="/shop" class="btn-container mt-5">
              <v-btn
                class="button uppercase white--text font-weight-bold"
                elevation="2"
                outlined
                large
              >
                <div class="btn-text">Shop now</div>
                <i class="btn-icon fa-solid fa-bag-shopping"></i>
              </v-btn>
            </router-link>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item class="carousel-item">
        <v-sheet class="carousel-sheet-4" height="100%">
          <v-row class="carousel-row">
            <div class="main-content">
              <h1 class="text-uppercase white--text">
                NEW KIDS’ SOCKS ARE HERE!
              </h1>
              <p class="white--text">
                Discover our kids socks collection and bring joy to little feet
                all over the world. We’ve got long warm, colorful, crazy socks -
                and baby socks for the smallest ones
              </p>
            </div>
            <router-link to="/shop" class="btn-container mt-5">
              <v-btn
                class="button uppercase white--text font-weight-bold"
                elevation="4"
                color="#F299C2"
                x-large
              >
                <div class="btn-text">Shop custom</div>
                <i class="btn-icon fa-solid fa-bag-shopping"></i>
              </v-btn>
            </router-link>
          </v-row>
        </v-sheet>
      </v-carousel-item>
      <v-carousel-item class="carousel-item">
        <v-sheet class="carousel-sheet-5" height="100%">
          <v-row class="carousel-row">
            <div class="main-content mt-5">
              <h1 class="white--text text-uppercase">Great rewards</h1>
              <h3 class="black--text">
                Looking for the perfect gift, Pla.socks rewards?
              </h3>
              <p class="mt-4">
                Here you’ll find all kinds of gifts at a reduced price. Check
                out our limited edition gifts, men’s gift boxes, kids’ gifts and
                many more.
              </p>
            </div>
            <router-link to="/rewards" class="btn-container mt-5">
              <v-btn
                class="button uppercase white--text font-weight-bold"
                elevation="2"
                outlined
                large
              >
                <div class="btn-text">rewards</div>
                <i class="btn-icon fa-solid fa-gift"></i>
              </v-btn>
            </router-link>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselSection",
  // data() {},
  //   computed: {},
  //   methods: {},
  //   mounted: {},
  //   watch: {},
};
</script>

<style lang="scss" src="./Carousel.scss" scoped></style>
