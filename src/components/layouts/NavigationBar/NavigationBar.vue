<template>
  <div class="container">
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
          <div class="col-3 input-effect">
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
        <v-btn
          color="#4db7b3"
          tile
          style="
            color: white;
            width: 100%;
            font-weight: 600;
            font-size: 16px;
            padding: 5px 0;
          "
          >VIEW CART</v-btn
        >
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
                    <div class="col-3 input-effect">
                      <input class="effect-20" type="text" placeholder="" />
                      <label>Search</label>
                    </div>
                    <v-icon dense color="white" class="icons-item search"
                      >fa-magnifying-glass</v-icon
                    >
                  </div>
                  <ul class="links">
                    <div @click="dialog = false">
                      <router-link to="/"><li>PLA.SOCKS</li></router-link>
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
                      <router-link to="/product" @click="dialog = false"
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
          <img
            src="https://plasocks.com/wp-content/uploads/2022/07/289951629_5421917167875766_6698382690436412766_n-removebg-preview.png"
            alt="PlaSock Logo"
          />
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
                  :class="selectedLink === 'shop' ? 'Active' : 'inActive'"
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
              to="/product"
              :class="selectedLink === 'product' ? 'Active' : 'inActive'"
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
          <v-icon small class="icons-item user">fa-user-tie</v-icon>

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
        { title: "Socks For Summer" },
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
      console.log(this.$router.currentRoute._value);
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
  },
  computed: {
    // ...mapState(["cartNumber"]),
    // cartNumber() {
    //   return this.$store.getters.CART;
    // },
    ...mapGetters({
      quantity: "GET_CART_QUANTITY",
      cartItems: "GET_CART_ITEMS",
      totalPrice: "GET_CART_PRICE",
    }),
    ...mapMutations(["ADD_CART_ITEM", "DELETE_CART_ITEM"]),
    getSelectedLink() {
      console.log(this.$route.query.page);
      return this.$route.query.page;
    },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
:global(.v-toast) {
  z-index: 99999999 !important;
}
.responsive-container {
  margin-top: 20px;
  margin-right: 15px;
  width: 100vw;
  color: white;

  .exit-container {
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
    width: 100%;
    .exit {
      top: 0;
      color: white;
      padding: 15px;
      cursor: pointer;
      &:hover {
        color: #4db7b3;
        transition: 0.3 ease;
      }
    }
  }
  .search-frame {
    color: white;
    display: flex;
    max-width: 50vw;
    margin: auto;
    svg {
      margin: auto;
      margin-left: 10px;
      cursor: pointer;
      transition: 0.3s ease;
      &:hover {
        color: rgba(0, 0, 0, 0.915);
      }
    }
    .col-3 {
      float: left;
      width: 50vw;
      margin: 40px 3%;
      position: relative;
    }
    /* necessary to give position: relative to parent. */
    input[type="text"] {
      font-size: 22px;
      color: white;
      border-radius: 20px;
      background-color: #a0eae8bc;
      width: 100%;
      padding: 5px;
      padding-left: 15px;
      box-sizing: border-box;
      letter-spacing: 1px;
      z-index: 1;
      outline: 2px solid transparent;
    }

    :focus {
      outline: 2px solid #ffffff !important;
      transition: 0.3s ease-out;
    }
    .effect-20 ~ label {
      position: absolute;
      left: 14px;
      top: 10px;
      color: white;
      transition: 0.3s;
      z-index: 0;
      letter-spacing: 0.5px;
    }
    .effect-20:focus ~ label,
    .has-content.effect-20 ~ label {
      top: -25px;
      left: 0;
      font-size: 12px;
      color: white;
      transition: 0.3s;
    }
  }
  .links {
    max-width: 50vw;
    list-style-type: none;
    text-align: center;
    font-size: 1.5em;
    padding: 0 !important;
    margin: auto;

    ::v-deep .v-list {
      color: rgba(255, 255, 255, 0.797);
      background-color: rgba(0, 0, 0, 0.1);
    }

    li {
      padding: 2rem 0;
      &:hover {
        background-color: rgba(0, 0, 0, 0.064);
      }
    }

    a {
      text-decoration: none;
      color: white;
    }
  }
}
.container::v-deep .v-overlay--absolute {
  position: fixed !important;
}
.v-dialog__content::v-deep .v-dialog {
  max-height: 100vh !important;
  overflow-y: scroll;
  height: 100vh;
  margin: 0 !important;
  background-color: #4db7b47c;
}

.v-dialog__content::v-deep .v-card {
  background-color: transparent !important;
  box-shadow: none !important;
}
.v-dialog__content::v-deep .v-dialog {
  position: absolute !important;
  top: 0 !important;
}

.v-list::v-deep .v-list-item {
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
.container {
  .v-overlay {
    max-height: 100vh;
    align-items: normal !important;
    position: fixed !important;
    &__content {
      width: 100vw;
      .search-container {
        width: 100vw;
        height: 55vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .col-3 {
          float: left;
          width: 50vw;
          margin: 40px 3%;
          position: relative;
          label {
            color: white;
          }
        }
        /* necessary to give position: relative to parent. */
        input[type="text"] {
          font-size: 22px;
          color: white;
          border-radius: 20px;
          background-color: #4db7b483;
          width: 100%;
          padding: 5px;
          padding-left: 15px;
          box-sizing: border-box;
          letter-spacing: 1px;
          z-index: 1;
          outline: 2px solid transparent;
        }

        :focus {
          outline: 2px solid #4db7b3 !important;
          transition: 0.3s ease-out;
        }
        .effect-20 ~ label {
          position: absolute;
          left: 14px;
          top: 10px;
          color: rgba(255, 255, 255, 0.4);
          transition: 0.3s;
          z-index: 0;
          letter-spacing: 0.5px;
        }
        .effect-20:focus ~ label,
        .has-content.effect-20 ~ label {
          top: -18px;
          left: 0;
          font-size: 12px;
          color: white;
          transition: 0.3s;
        }

        .exit {
          display: flex;
          width: 100%;
          top: 0;
          justify-content: flex-end;
          cursor: pointer;
          svg {
            padding: 30px;
          }
          &:hover {
            color: #4db7b3;
            transition: 0.3 ease;
          }
        }
        .search-frame {
          display: flex;
          margin-top: 1vh;
          max-width: 50vw;
          margin-left: auto;
          margin-right: auto;
          .v-input {
            width: 30vw;

            input {
              max-height: 45px;
            }
          }
          .search {
            margin: auto;
            margin-left: 10px;
            cursor: pointer;
            transition: 0.3s ease;
            &:hover {
              color: rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }
  }
  aside {
    z-index: 9999999999999;
    display: flex;
    position: fixed;
    flex-direction: column;
    width: 320px !important;
    .exit {
      display: flex;
      justify-content: flex-end;
      margin: 15px 15px 0 0;
      svg {
        cursor: pointer;
        width: 20px;
      }
    }

    h3 {
      text-align: center;
      font-weight: 500;
      color: black;
      margin: 0px !important;
    }
    hr {
      width: 50px;
      border: none;
      background-color: #afafaf;
      height: 2px;
      margin: auto;
      margin-top: 0.8rem;
    }

    .v-list {
      padding: 0;
      margin: 1rem 0;
    }
    .v-list-item {
      padding: 7px 0;
      border-bottom: 2px solid #a2a2a222;
    }

    .cart-item-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin: auto;

      .item-img {
        margin: auto 0;
        img {
          width: 60px;
        }
      }
      .cart-item-content {
        display: flex;
        flex-direction: column;
        margin-right: 3.5rem;
        a {
          text-decoration: none;
          color: #7d7d7d;
          white-space: nowrap;
          overflow: hidden !important;
          text-overflow: ellipsis;

          &:hover {
            color: black;
          }
        }

        .quanty-price {
          display: flex;
          justify-content: space-between;
          font-size: smaller;
          font-weight: 600;
          color: #7d7d7d;
        }

        p {
          margin: 0;
          margin-right: 5px;
        }
        .variance {
          font-size: smaller;
        }
      }
      .delete {
        svg {
          color: #9a9a9a;
          font-size: 8px !important;
          padding: 5px 7px;
          border-radius: 50%;
          border: 2px solid #9a9a9a;
          transition: 0.3s ease;
          &:hover {
            color: black;
            border-color: black;
          }
        }
      }
    }
    .subtotal {
      display: flex;
      justify-content: center;
      padding: 10px 0;
      border-top: 2px solid #9a9a9a28;
      border-bottom: 2px solid #9a9a9a28;
      margin-bottom: 0.5rem;
      p {
        &:nth-child(2) {
          font-weight: 700;
        }
      }
      * {
        margin: 0 5px;
      }
    }
    .v-btn {
      margin: 0.5rem 0;
      box-shadow: none;
    }
  }
  .topBar-container {
    background-color: white;
    .topBar {
      display: flex;
      justify-content: space-between;
      max-width: 1080px;
      height: 30px;
      margin: 0 auto;
      background-color: white;
      font-size: 12px;
      z-index: 0;
      .leftSection {
        line-height: 30px;
      }
      .rightSection {
        display: flex;
        svg {
          margin: auto 5px;
          font-size: 13px;
        }
        .time {
          display: flex;
          line-height: 30px;
          a {
            color: #7d7d7d;
            cursor: default;
          }
          &:hover {
            svg,
            a {
              color: black;
              transition: 0.3s ease;
            }
          }
        }

        .divider {
          height: 15px;
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          margin: auto 10px;
        }
        .phone {
          line-height: 30px;
          svg {
            margin-left: 0;
          }
          a {
            text-decoration: none;
            color: #7d7d7d;
          }
          &:hover {
            svg,
            a {
              color: black;
              transition: 0.3s ease;
            }
          }
        }
      }
    }
  }

  .mainContainer {
    display: flex;
    width: 100vw;
    height: 72px;
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      width: 100vw;
      height: 72px;
      padding: 0;
      opacity: 0.15;
      background: url(https://plasocks.com/wp-content/uploads/2022/07/277602375_1042043753054162_4429385387159967082_n.jpg)
        repeat-x;
      // background-color: white;
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      left: 0;
      width: 100vw;
      height: 72px;
      padding: 0;
      background-color: white;
    }
    .content {
      height: max-content;
      max-width: 1080px;
      width: 1080px;
      height: 72px;
      margin: auto auto;
      display: flex;
      justify-content: space-between;
      z-index: 99999;

      .hamburger-menu {
        margin: auto 1rem;
        color: #4db7b3;
        display: none;
        &:hover {
          cursor: pointer;
        }
        span {
          margin-left: 4px;
        }

        .v-dialog__content {
          ::v-deep .v-dialog {
            max-height: 100vh !important;
            margin: 0 !important;
            background-color: #4db7b47c !important;
          }
        }
        .responsive-container {
          color: white;
          .links {
            list-style-type: none;
            text-align: center;
            width: 100%;
            font-size: 1.5em;

            ::v-deep .v-list {
              background-color: rgba(0, 0, 0, 0.1);
            }

            li {
              padding: 1rem 0;
              border-radius: 10px;
              &:hover {
                background-color: rgba(0, 0, 0, 0.1);
              }
            }

            a {
              text-decoration: none;
              color: white;
            }
          }
        }
      }

      .logo {
        display: flex;
        img {
          width: 90px;
          margin: auto;
        }
      }
      .links {
        display: flex;
        font-size: 12.8px;
        margin-top: auto;
        margin-bottom: auto;
        list-style-type: none;

        li {
          display: flex;
          margin-right: 10px;
        }
        a {
          margin: auto;
          padding: 10px 0;
          transition: 0.3s ease;
          text-decoration: none;
          border-bottom: 3px solid transparent;
          border-top: 3px solid transparent;
          color: #7d7d7d;
          &:hover {
            border-bottom: 3px solid #4db7b3;
            color: black;
          }
          &.Active {
            border-bottom: 3px solid #4db7b3;
            color: black;
          }
          &.inActive {
            border-bottom: 3px solid transparent;
            border-top: 3px solid transparent;
            color: #7d7d7d;
          }
        }
      }
      .icons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-top: auto;
        margin-bottom: auto;
        list-style: none;
        li {
          border-right: 1px solid rgba(0, 0, 0, 0.1);
          &:last-of-type {
            border-right: none;
          }
        }
        .icons-item {
          cursor: pointer;
          color: #4db7b3;
          padding: 7px;
          transition: 0.3 ease;
        }

        .user {
          &:hover {
            color: black;
          }
        }
        .search {
          border: 1px solid #4db7b3;
          border-radius: 50%;
          text-align: center;
          cursor: pointer;
          &:hover {
            color: white;
            background-color: black;
            border-color: black;
          }
        }
        .cart {
          border: 1px solid #4db7b3;
          border-radius: 10%;
          margin: 0 5px;
          &:hover {
            color: white;
            background-color: black;
            border-color: black;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 850px) {
  .container {
    .topBar {
      display: none;
    }
    .mainContainer {
      .content {
        .hamburger-menu {
          display: flex;
        }
        .links {
          display: none;
        }
        .icons {
          padding-right: 15px;
          grid-template-columns: repeat(1, 1fr);
          .user,
          .search {
            display: none;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 850px) {
  .container {
    .topBar {
      display: none;
    }
    .mainContainer {
      .content {
        .hamburger-menu {
          display: flex;
        }
        .links {
          display: none;
        }
        .icons {
          padding-right: 15px;
          grid-template-columns: repeat(1, 1fr);
          .user,
          .search {
            display: none;
          }
        }
      }
    }
  }
}
</style>
