<template>
  <div class="container">
    <div class="responsive-container">
      <v-overlay
        v-model="responsive"
        absolute
        opacity="0.8"
        color="#4db7b3"
        :value="responsive"
        style="z-index: 999999; position: fixed"
      >
        <div
          style="
            width: 50vw;
            height: 80vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: auto;
          "
        >
          <div @click="overlay = false">
            <v-icon dense class="icons-item exit">fa-x</v-icon>
          </div>

          <div class="search-frame" v-click-outside="onClickOutside">
            <v-text-field label="Search" style="font-size: 30px"></v-text-field>
            <v-icon dense class="icons-item search">fa-magnifying-glass</v-icon>
          </div>
          <ul class="links">
            <li><router-link to="/">PLA.SOCKS</router-link></li>
            <li>
              <router-link to="/product">
                SHOP
                <i class="fa-solid fa-angle-down"></i>
              </router-link>
            </li>
            <v-list>
              <v-list-item
                style="cursor: pointer"
                v-for="(item, index) in items"
                :key="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
            <li><router-link to="/product">CUSTOM</router-link></li>
            <li><router-link to="/product">OUR STORY</router-link></li>
            <li><router-link to="/product">REWARDS</router-link></li>
            <li><router-link to="/product">BLOG</router-link></li>
            <li><router-link to="/product">CONTACT US</router-link></li>
          </ul>
        </div>
      </v-overlay>
    </div>

    <v-overlay
      v-model="overlay"
      :opacity="0.8"
      :value="overlay"
      style="z-index: 999999; position: fixed"
    >
      <div
        style="
          width: 50vw;
          height: 50vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        "
      >
        <div @click="overlay = false">
          <v-icon dense class="icons-item exit">fa-x</v-icon>
        </div>

        <div class="search-frame" v-click-outside="onClickOutside">
          <v-text-field label="Search" style="font-size: 30px"></v-text-field>
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
            <v-list-item>
              <div class="cart-item-container">
                <div class="item-img">
                  <img
                    src="https://plasocks.com/wp-content/uploads/2022/07/z3571968145342_c19358b9f7f2ac23258d664362d28f77-600x600.jpg"
                    alt=""
                  />
                </div>
                <div class="cart-item-content">
                  <router-link to="/">Sunny Daisy</router-link>
                  <div class="quanty-price">
                    <p>1</p>
                    <p>x</p>
                    <p><span>₫</span>49.000</p>
                  </div>
                  <p class="variance">Variance: 1</p>
                </div>
                <div class="delete">
                  <v-icon x-small class="icons-item">fa-x</v-icon>
                </div>
              </div>
            </v-list-item>

            <v-list-item>
              <div class="cart-item-container">
                <div class="item-img">
                  <img
                    src="https://plasocks.com/wp-content/uploads/2022/07/z3571968145342_c19358b9f7f2ac23258d664362d28f77-600x600.jpg"
                    alt=""
                  />
                </div>
                <div class="cart-item-content">
                  <router-link to="/">Sunny Daisy</router-link>
                  <div class="quanty-price">
                    <p>1</p>
                    <p>x</p>
                    <p><span>₫</span>49.000</p>
                  </div>
                  <p class="variance">Variance: 1</p>
                </div>
                <div class="delete">
                  <v-icon x-small class="icons-item">fa-x</v-icon>
                </div>
              </div>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <div class="subtotal">
          <p>SUBTOTAL:</p>
          <p class="total-price">₫100,000</p>
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
          <a href="tel:0388103967">0388.103.967</a>
        </div>
      </div>
    </div>

    <div class="mainContainer">
      <div class="content">
        <div class="hamburger-menu">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <div v-bind="attrs" v-on="on">
                <v-icon dense color="#4db7b3" class="icons-item hamburger"
                  >fa-bars</v-icon
                >
                <span>MENU</span>
              </div>
            </template>

            <v-card>
              <v-card-title class="text-h5 grey lighten-2">
                Privacy Policy
              </v-card-title>

              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialog = false">
                  I accept
                </v-btn>
              </v-card-actions>
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
          <li><router-link to="/">PLA.SOCKS</router-link></li>
          <v-menu offset-y bottom transition="slide-y-transition" open-on-hover>
            <template v-slot:activator="{ on, attrs }">
              <li v-bind="attrs" v-on="on">
                <router-link to="/product">
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
          <li><router-link to="/product">CUSTOM</router-link></li>
          <li><router-link to="/product">OUR STORY</router-link></li>
          <li><router-link to="/product">REWARDS</router-link></li>
          <li><router-link to="/product">BLOG</router-link></li>
          <li><router-link to="/product">CONTACT US</router-link></li>
          <li><router-link to="/product">CONTACT US</router-link></li>
        </ul>
        <div class="icons">
          <v-icon small class="icons-item user">fa-user-tie</v-icon>

          <div @click="overlay = !overlay">
            <v-icon small class="icons-item search">fa-magnifying-glass</v-icon>
          </div>
          <div @click="handleClickCart()" style="margin-right: 7px">
            <v-badge
              :content="cartNumber"
              :value="cartNumber"
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
    },
  },
  computed: {
    cartNumber() {
      return this.$store.getters.CART;
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container::v-deep .v-overlay--absolute {
  position: fixed !important;
}
.container {
  .responsive-container {
    .v-overlay {
      &__content {
        .links {
          list-style-type: none;
          text-align: center;
          width: 100%;
          font-size: 1.5em;

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
  }

  .v-overlay {
    max-height: 100vh;
    position: fixed !important;
    &__content {
      width: 100vw;

      .exit {
        float: right;
        margin-left: 30px;
        cursor: pointer;
        &:hover {
          color: #4db7b3;
          transition: 0.3 ease;
        }
      }
      .search-frame {
        display: flex;
        margin-top: 1vh;
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
      * {
        margin: 0 5px;
      }
    }
    .v-btn {
      margin: 0.5rem 0;
      box-shadow: none;
    }
  }
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
  .mainContainer {
    display: flex;
    position: -webkit-sticky;
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
          border-bottom: 3px solid transparent;
          border-top: 3px solid transparent;
          text-decoration: none;
          color: #7d7d7d;
          &:hover {
            border-bottom: 3px solid #4db7b3;
            color: black;
          }
        }
        // Chỗ này k được
        v-menu {
          v-list {
            v-list-item {
              cursor: pointer;
              &:hover {
                background-color: red;
              }
            }
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
