<template>
  <div class="nav-container">
    <v-overlay
      v-model="overlay"
      :opacity="0.8"
      :value="overlay"
      style="z-index: 999999; position: fixed"
    >
      <div class="search-container">
        <div @click="overlay = false" class="exit">
          <v-icon dense class="icons-item">fa-x</v-icon>
        </div>

        <div class="search-frame" v-click-outside="onClickOutside">
          <div class="column-search input-effect">
            <input class="effect-20" type="text" placeholder="" />
            <label>Search</label>
          </div>
          <v-icon dense class="icons-item search">fa-magnifying-glass</v-icon>
        </div>
      </div>
    </v-overlay>

    <v-navigation-drawer v-model="drawer" absolute right temporary clipped>
      <div class="exit" @click="handleClickCart()">
        <v-icon dense class="icons-item">fa-x</v-icon>
      </div>
      <h3>CART</h3>
      <hr />
      <div style="max-width: 90%; margin: 0 auto">
        <v-list nav dense>
          <v-list-item-group active-class="deep-purple--text text--accent-4">
            <v-list-item v-for="(item, index) in cartItems" :key="index">
              <div class="cart-item-container">
                <div class="item-img">
                  <img :src="item.image" :alt="item.variance" />
                </div>
                <div class="cart-item-content">
                  <router-link
                    :to="`/product/${item.itemTitle}/${item.variance}`"
                    >{{ item.itemTitle }}</router-link
                  >
                  <div class="quanty-price">
                    <p>{{ item.quantity }}</p>
                    <p>x</p>
                    <p>{{ formatOriginalPrice(item.price) }}</p>
                  </div>
                  <p class="variance">Variance: {{ item.variance }}</p>
                </div>
                <div class="delete" @click="handleClickDelete(item.cartId)">
                  <v-icon x-small class="icons-item">fa-x</v-icon>
                </div>
              </div>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="subtotal">
          <p>SUBTOTAL:</p>
          <p class="total-price">{{ formatOriginalPrice(totalPrice) }}</p>
        </div>
        <router-link to="/cart">
          <v-btn
            color="#4db7b3"
            tile
            style="
              text-decoration: none;
              color: white;
              width: 100%;
              font-weight: 600;
              font-size: 16px;
              padding: 5px 0;
            "
            >VIEW CART</v-btn
          >
        </router-link>
        <v-btn
          color="#F299C2"
          tile
          style="
            color: white;
            width: 100%;
            font-weight: 600;
            font-size: 16px;
            padding: 5px 0;
          "
          >CHECKOUT</v-btn
        >
      </div>
    </v-navigation-drawer>

    <div class="topBar-container">
      <div class="topBar">
        <div class="leftSection">
          Made from recycled plastic bottles in Vietnam
        </div>
        <div class="rightSection">
          <div class="time">
            <i class="fa-regular fa-clock"></i>
            <a>10:00 - 22:00</a>
          </div>
          <div class="divider"></div>
          <div class="phone">
            <i class="fa-solid fa-phone"></i>
            <a href="tel:0834577251">0834577251</a>
          </div>
        </div>
      </div>
    </div>

    <div class="mainContainer">
      <div class="content">
        <div class="hamburger-menu">
          <v-dialog
            v-model="dialog"
            style="height: none"
            transition="dialog-top-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <div class="hello" v-bind="attrs" v-on="on">
                <v-icon dense color="#4db7b3" class="icons-item hamburger"
                  >fa-bars</v-icon
                >
                <span>MENU</span>
              </div>
            </template>

            <v-card>
              <v-card-text
                style="
                  height: 100;
                  display: flex;
                  background-color: transparent;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
                  margin: auto;
                "
              >
                <div
                  class="responsive-container"
                  v-click-outside="onClickOutside"
                >
                  <div @click="dialog = false" class="exit-container">
                    <v-icon dense class="icons-item exit">fa-x</v-icon>
                  </div>

                  <div class="search-frame">
                    <div class="column-search input-effect">
                      <input class="effect-20" type="text" placeholder="" />
                      <label>Search</label>
                    </div>
                    <v-icon dense color="white" class="icons-item search"
                      >fa-magnifying-glass</v-icon
                    >
                  </div>
                  <ul class="links">
                    <div @click="dialog = false" v-if="!isAuth">
                      <router-link to="/sign-in"><li>SIGN IN</li></router-link>
                    </div>
                    <div @click="dialog = false" v-else>
                      <router-link to="/"><li>ACCOUNT</li></router-link>
                    </div>
                    <li @click="dropdown = !dropdown">
                      <router-link to="/shop">
                        SHOP
                        <i class="fa-solid fa-angle-down"></i>
                      </router-link>
                    </li>
                    <v-list v-show="dropdown">
                      <v-list-item
                        style="cursor: pointer"
                        v-for="(item, index) in items"
                        :key="index"
                      >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>
                    <div @click="dialog = false">
                      <router-link to="/about"><li>CUSTOM</li></router-link>
                    </div>
                    <div @click="dialog = false">
                      <router-link to="/our-story" @click="dialog = false"
                        ><li>OUR STORY</li></router-link
                      >
                    </div>
                    <div @click="dialog = false">
                      <router-link to="/about" @click="dialog = false"
                        ><li>REWARDS</li></router-link
                      >
                    </div>
                    <div @click="dialog = false">
                      <router-link to="/blog" @click="dialog = false"
                        ><li>BLOG</li></router-link
                      >
                    </div>
                    <div @click="dialog = false">
                      <router-link to="/about" @click="dialog = false"
                        ><li>CONTACT US</li></router-link
                      >
                    </div>
                  </ul>
                </div>
              </v-card-text>
            </v-card>
          </v-dialog>
        </div>
        <div class="logo">
          <img src="https://i.imgur.com/mnt90vV.png" alt="PlaSock Logo" />
        </div>
        <ul class="links">
          <li>
            <router-link
              to="/"
              :class="selectedLink === '' ? 'Active' : 'inActive'"
              >PLA.SOCKS</router-link
            >
          </li>
          <v-menu offset-y bottom transition="slide-y-transition" open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <li v-bind="attrs" v-on="on">
                <router-link
                  to="/shop"
                  :class="
                    ['shop', 'product'].includes(selectedLink)
                      ? 'Active'
                      : 'inActive'
                  "
                >
                  SHOP
                  <i class="fa-solid fa-angle-down"></i>
                </router-link>
              </li>
            </template>
            <v-list>
              <v-list-item
                style="cursor: pointer"
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <li>
            <router-link
              to="/custom"
              :class="selectedLink === 'custom' ? 'Active' : 'inActive'"
              >CUSTOM</router-link
            >
          </li>
          <li>
            <router-link
              to="/our-story"
              :class="selectedLink === 'our-story' ? 'Active' : 'inActive'"
              >OUR STORY</router-link
            >
          </li>
          <li>
            <router-link
              to="/rewards"
              :class="selectedLink === 'rewards' ? 'Active' : 'inActive'"
              >REWARDS</router-link
            >
          </li>
          <li>
            <router-link
              to="/blog"
              :class="selectedLink === 'blog' ? 'Active' : 'inActive'"
              >BLOG</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact-us"
              :class="selectedLink === 'contact-us' ? 'Active' : 'inActive'"
              >CONTACT US</router-link
            >
          </li>
        </ul>
        <div class="icons">
          <router-link v-if="!isAuth" to="/sign-in">
            <v-icon small class="icons-item user">fa-user-tie</v-icon>
          </router-link>
          <v-menu v-else offset-y bottom transition="slide-y-transition">
            <!-- <template v-slot:activator="{ on, attrs }">
              <i v-bind="attrs" v-on="on" class="fa-solid fa-circle-user"></i>
            </template> -->
            <template v-slot:activator="{ on, attrs }">
              <!-- <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Dropdown
              </v-btn> -->
              <div v-bind="attrs" v-on="on">
                <img
                  class="current-ava"
                  :src="currentUser.img"
                  alt=""
                  v-if="currentUser.img"
                />
                <i class="fa-solid fa-circle-user" v-else></i>
              </div>
            </template>

            <v-list>
              <v-list-item
                v-if="currentUser.admin"
                @click="handleChangeLayout()"
              >
                <router-link class="toDashboard" to="/admin/user">
                  <v-list-item-title> Admin Dashboard</v-list-item-title>
                </router-link>
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><router-link class="account-links" to="/shop"
                    >My Account</router-link
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><router-link class="account-links" to="/"
                    >My Favorite</router-link
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item>
                <v-list-item-title
                  ><router-link class="account-links" to="/"
                    >My Orders</router-link
                  ></v-list-item-title
                >
              </v-list-item>
              <v-list-item @click="handleSignOut()">
                <v-list-item-title>Log Out</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- <v-icon  small class="icons-item user">fa-user-tie</v-icon> -->

          <div @click="overlay = !overlay">
            <v-icon small class="icons-item search">fa-magnifying-glass</v-icon>
          </div>
          <div @click="handleClickCart()" style="margin-right: 7px">
            <v-badge
              :content="quantity"
              :value="quantity"
              color="#f299c2"
              overlap
            >
              <v-icon small class="icons-item cart">fa-cart-flatbed</v-icon>
            </v-badge>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  title: "Pla.Socks",
  name: "NavigationBar",
  data() {
    return {
      items: [
        { title: "Boxes Of Love" },
        { title: "Socks For Winter" },
        { title: "Socks For Women" },
        { title: "Socks For Men" },
        { title: "Socks For Kids" },
      ],
      drawer: false,
      overlay: false,
      responsive: false,
      dropdown: false,
      dialog: false,
      selectedLink: "",
    };
  },
  methods: {
    handleClickCart() {
      this.drawer = !this.drawer;
      // if (this.drawer === true) {
      //   document.documentElement.style.overflow = "hidden"; // firefox, chrome
      // } else {
      //   document.documentElement.style.overflowY = "visible"; // firefox, chrome
      // }
    },
    onClickOutside() {
      this.overlay = false;
      // this.dialog = false;
    },
    onClickClose() {
      this.dialog = false;
    },
    formatOriginalPrice(value) {
      let number = value;
      return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "VND",
      }).format(number);
    },
    handleClickDelete(id) {
      this.$store.commit("DELETE_CART_ITEM", id);
      this.$toast.open({
        message: "🙈 Delete item from cart successfully! 🙉",
        type: "success",
        duration: 2000,
        dismissible: true,
        position: "bottom",
      });
    },
    handleChangeLayout() {
      this.$store.commit("CHANGELAYOUT");
    },
    handleSignOut() {
      this.$store.commit("SIGNOUT");
      if (this.isAuth === false) {
        this.$toast.open({
          message: "🙈 You have successfully signed out! 🙉",
          type: "success",
          duration: 2000,
          dismissible: true,
          position: "bottom",
        });
      }
    },
  },

  computed: {
    ...mapGetters({
      quantity: "GET_CART_QUANTITY",
      cartItems: "GET_CART_ITEMS",
      totalPrice: "GET_CART_PRICE",
      isAuth: "getIsAuth",
      currentUser: "getUserCurrent",
    }),
    ...mapMutations([
      "ADD_CART_ITEM",
      "DELETE_CART_ITEM",
      "CHANGELAYOUT",
      "SIGNOUT",
    ]),
  },
  watch: {
    drawer(value) {
      if (value === true) {
        document.documentElement.style.overflow = "hidden"; // firefox, chrome
      } else if (value === false) {
        document.documentElement.style.overflowY = "visible"; // firefox, chrome
      }
    },
    overlay(value) {
      if (value === true) {
        document.documentElement.style.overflow = "hidden"; // firefox, chrome
      } else if (value === false) {
        document.documentElement.style.overflowY = "visible"; // firefox, chrome
      }
    },
    $route(to) {
      console.log(to);
      // this.selectedLink = "";
      let a = to.path;
      let temp = a.indexOf("/", 1);
      if (temp > -1) {
        this.selectedLink = a.slice(1, temp);
      } else {
        this.selectedLink = a.substring(1);
      }
    },
  },
};
</script>

<style lang="scss" scoped src="./NavigationBar.scss"></style>
