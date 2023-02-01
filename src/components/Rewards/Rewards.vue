<template>
  <div class="rewards-container">
    <div class="title white--text">
      <h1 data-aos="zoom-in">SUSTAINABLE FASHION!</h1>
    </div>
    <div class="benefit-container">
      <div class="img-container">
        <img
          src="https://drive.google.com/uc?id=1L-GT8C7CpR_GkwXUQfia-St4CclbDrM8"
          alt="Pick up plastic bottles"
          data-aos="flip-left"
        />
      </div>
      <div class="main-content" data-aos="flip-left">
        <h2>Socks made from plastic bottles</h2>
        <p class="content">
          Socks made from recycled yarn from discarded plastic bottles meet GHS
          standards. Encourage collection activities, return green to the earth
        </p>
        <p class="change">10 plastic bottles = 1 voucher discount 10%</p>
        <router-link to="/shop" class="btn-container mt-5">
          <v-btn
            class="button uppercase white--text font-weight-bold"
            elevation="4"
            color="#4db7b3"
            rounded
          >
            <div class="btn-text text-uppercase">Benefits of recycle socks</div>
            <i class="btn-icon fa-solid fa-magnifying-glass ms-2"></i>
          </v-btn>
        </router-link>
      </div>
    </div>
    <v-item-group class="material-container-group">
      <v-container fluid class="material-container px-sm-0 px-xs-0">
        <v-row dense class="material-row">
          <v-col
            v-for="material in materials"
            :key="material.title"
            cols="12"
            md="4"
          >
            <v-item class="material-item mx-sm-0 px-xs-0">
              <v-card
                class="material-card d-flex flex-column justify-sm-center mx-4 my-3 px-sm-0 px-xs-0"
                data-aos="zoom-in"
              >
                <v-img
                  height="200"
                  width="100%"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  :src="material.src"
                  class="material-img"
                ></v-img>
                <v-card-text
                  v-text="material.title"
                  class="material-title font-weight-bold text-center pa-3"
                ></v-card-text>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-divider inset width="40%" class="ma-auto"></v-divider>
    <v-item-group class="collect-container-group">
      <v-container fluid class="collect-container px-sm-0 px-xs-0 align-center">
        <v-row dense class="collect-row">
          <v-col cols="12" md="4" class="align-center">
            <v-item class="collect-item mx-sm-0 px-xs-0">
              <v-card
                class="collect-card d-flex flex-column justify-sm-center text-center mx-4 my-3 px-sm-0 px-xs-0"
                data-aos="zoom-in"
              >
                <v-card-text
                  class="collect-title text-h6 font-weight-bold text-center pa-2"
                  >Collecting old socks</v-card-text
                >
                <v-card-text
                  class="collect-title font-weight-medium text-center pa-1"
                  >Collecting Old Socks is a regular activity at all Plasocks
                  stores with the aim of helping customers form a green
                  lifestyle and reduce waste into the environment</v-card-text
                >
                <v-card-text
                  class="collect-title font-weight-bold text-center pa-2"
                  >3 pair of old socks = 1 pair of new sock</v-card-text
                >
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="4" class="align-center">
            <v-item class="collect-item mx-sm-0 px-xs-0">
              <v-card
                class="collect-card d-flex flex-column justify-sm-center mx-4 my-3 px-sm-0 px-xs-0"
                data-aos="zoom-in"
              >
                <v-img
                  height="200"
                  width="100%"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  src="https://drive.google.com/uc?id=1JhnQVLLS_UJWVuiyQiZVWl5N7aHVrPtb"
                  class="collect-img"
                ></v-img>
              </v-card>
            </v-item>
          </v-col>
          <v-col cols="12" md="4">
            <v-item class="collect-item mx-sm-0 px-xs-0">
              <v-card
                class="collect-card d-flex flex-column justify-sm-center mx-4 my-3 px-sm-0 px-xs-0"
                data-aos="zoom-in"
              >
                <v-img
                  height="200"
                  width="100%"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  src="https://drive.google.com/uc?id=1tH-oJc-n-BvFhNi6l325-gDzVaYLMDtT"
                  class="collect-img"
                ></v-img>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-divider inset width="40%" class="ma-auto"></v-divider>
    <div class="gift-container d-flex text-center my-5">
      <div class="sales-container white--text">
        <div class="main-content align-center">
          <p class="font-weight-light font-italic my-2">
            It has Finally started…
          </p>
          <hr width="30%" class="ma-auto" />
          <h1 class="text-uppercase font-weight-bold">Spring sale</h1>
          <h2 class="text-uppercase font-weight-medium">UP TO 40% OFF</h2>
          <hr width="30%" class="ma-auto" />
          <div class="buttons-container my-5">
            <router-link to="/shop" class="btn-container">
              <v-btn class="button my-2" elevation="1" outlined small>
                <div class="btn-text">Shop men</div>
                <i class="btn-icon fa-solid fa-bag-shopping"></i>
              </v-btn>
            </router-link>
            <router-link to="/shop" class="btn-container mx-5">
              <v-btn class="button my-2" elevation="1" outlined small>
                <div class="btn-text">Shop custom</div>
                <i class="btn-icon fa-solid fa-bag-shopping"></i>
              </v-btn>
            </router-link>
            <router-link to="/shop" class="btn-container">
              <v-btn class="button my-2" elevation="1" outlined small>
                <div class="btn-text">Shop women</div>
                <i class="btn-icon fa-solid fa-bag-shopping"></i>
              </v-btn>
            </router-link>
          </div>
        </div>
      </div>
      <div class="categories-container ml-2">
        <v-card class="mx-auto">
          <v-container class="pa-1">
            <v-item-group v-model="selected" multiple>
              <v-row>
                <v-col
                  v-for="(category, i) in categories"
                  :key="i"
                  cols="12"
                  md="6"
                >
                  <v-item class="align-center">
                    <v-img
                      :src="`https://drive.google.com/uc?id=${category.src}`"
                      height="250"
                      class="text-center pa-2"
                    >
                      <div
                        class="font-weight-medium text-uppercase text-center white--text mx-auto pa-3 mb-2"
                        style="background-color: #4db7b3; width: 40%; font-size: smaller;"
                      >
                        {{category.title}}
                      </div>
                      <router-link
                        to="/shop"
                        class="btn-container text-decoration-none"
                      >
                        <v-btn
                          class="button white--text"
                          elevation="1"
                          color="#51B8B4"
                          small
                          rounded
                        >
                          Show all
                        </v-btn>
                      </router-link>
                    </v-img>
                  </v-item>
                </v-col>
              </v-row>
            </v-item-group>
          </v-container>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  title: "Pla.Socks - Rewards",
  name: "RewardsView",
  data: () => ({
    materials: [
      {
        title: "Plastic bottles",
        src: "https://drive.google.com/uc?id=1okbrs6ROkgSiA645kpd0zkmtuzRjfRn3",
      },
      {
        title: "Repreve chips in",
        src: "https://drive.google.com/uc?id=1VFTX6COe2hi1eCVFcPHhRzC5SSh92jvx",
      },
      {
        title: "Chips to yarn",
        src: "https://drive.google.com/uc?id=11_J9B-4O7n2ONr3B2wbjVwuPTa5T7DXp",
      },
    ],
    categories: [
      {
        title: "Gift for men",
        src: "17bBT76VURMiwLVa9PCPONg3dfCdjhC99",
      },
      {
        title: "Gift for women",
        src: "116TmTRqOo-78T5rGJXJvPc0cCVY0n5iu",
      },
      {
        title: "Gift for kids",
        src: "1KnWYNAi4Dt5s2-yxdLt3XtAKisBG7Y3a",
      },
      {
        title: "Best gifts",
        src: "1uBZt-HOA0EF8U2q1hoRIL7s5HsR-1xxC",
      },
    ],
    selected: [],
  }),
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

<style lang="scss" src="./Rewards.scss" scoped></style>
