<template>
  <div class="main-container">
    <v-navigation-drawer v-model="drawer" absolute bottom temporary clipped>
      <div class="exit" @click="drawer = !drawer">
        <v-icon dense class="icons-item">fa-x</v-icon>
      </div>
      <h3>CATEGORIES</h3>
      <hr />
      <div class="categoryList-container">
        <ul class="level-1" @click="drawer = !drawer">
          <li>Boxes Of Love (1)</li>
          <li>Customized Socks (2)</li>
          <ul class="level-2">
            <li>Customized Performance Socks (3)</li>
            <li>Dress Socks (4)</li>
            <li>Standard & Athlete Socks (5)</li>
          </ul>
          <li>Socks For Kids (6)</li>
          <ul class="level-2">
            <li>Crew Socks (7)</li>
            <li>Knee-High Socks (8)</li>
          </ul>
          <li>Socks For Men (9)</li>
          <li>Socks For Women (10)</li>
          <li>Socks For Summer (11)</li>
        </ul>
      </div>
    </v-navigation-drawer>
    <div class="container">
      <div class="breadscrumb">
        <p>
          <router-link to="/">Home</router-link> /
          <router-link to="/shop">Shop</router-link>
        </p>
      </div>
      <div class="category" @click="drawer = !drawer">
        <img
          src="https://drive.google.com/uc?id=12PbVCLOMIqjkDP4V-4c3xVFwg9MTxbtd"
          alt=""
          class="category-icon"
        />
        <p>CATEGORIES</p>
      </div>
      <div class="filter-container">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <div class="filter-btn" v-bind="attrs" v-on="on">
              <div class="text">{{ filter }}</div>
              <v-icon x-small color="white" class="icon">
                fa-chevron-down
              </v-icon>
            </div>
          </template>
          <v-list>
            <v-list-item @click="selectedFilter = 1">
              <v-list-item-title>Sort by popularity</v-list-item-title>
            </v-list-item>
            <v-list-item @click="selectedFilter = 2">
              <v-list-item-title>Sort by average rating</v-list-item-title>
            </v-list-item>
            <v-list-item @click="selectedFilter = 3">
              <v-list-item-title>Sort by lastest</v-list-item-title>
            </v-list-item>
            <v-list-item @click="selectedFilter = 4">
              <v-list-item-title>Sort by price: low to high</v-list-item-title>
            </v-list-item>
            <v-list-item @click="selectedFilter = 5">
              <v-list-item-title>Sort by price: high to low</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterComponent",
  data: () => ({
    selectedFilter: 4,
    filter: "Sort by price: low to high",
    drawer: false,
  }),
  methods: {},
  watch: {
    selectedFilter(value) {
      this.$emit("changeFilter", value);
      switch (value) {
        case 1:
          this.filter = "Sort by popularity";
          break;
        case 2:
          this.filter = "Sort by average rating";
          break;
        case 3:
          this.filter = "Sort by lastest";
          break;
        case 4:
          this.filter = "Sort by price: low to high";
          break;
        case 5:
          this.filter = "Sort by price: high to low";
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.v-list::v-deep .v-list-item {
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.07);
  }
}
.main-container {
  height: 100px;
  width: 100vw;
  background-color: #4db7b3;
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
    .categoryList-container {
      width: 95%;
      margin: auto;
      ul {
        list-style-type: none;
        &.level-1 {
          margin-top: 10px;
          padding-left: 0;
        }

        &.level-2 {
          padding-left: 15px;
        }
        li {
          padding-top: 10px;
          padding-bottom: 10px;
          cursor: pointer;

          &:hover {
            background-color: rgba(0, 0, 0, 0.07);
          }
        }
      }
    }
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1080px;
    margin: auto auto;
    height: 100%;
    .breadscrumb {
      margin-top: auto;
      margin-bottom: auto;
      color: white;
      p {
        margin: 0;
      }
      a {
        font-size: 18px;
        text-decoration: none;
        color: white;
        &:first-child {
          margin-right: 7px;
          transition: 0.4s ease;
          &:hover {
            color: rgba(199, 199, 199, 0.57);
          }
        }
        &:nth-child(2) {
          margin-left: 7px;
          font-weight: 600;
          cursor: default;
        }
      }
    }

    .category {
      display: none;
      cursor: pointer;
      transition: 0.5s ease;
      &:hover {
        padding: 7px;
        transform: scale(1.02);
        outline: 1px dashed white;
      }
      .category-icon {
        width: 25px;
      }
      p {
        color: black;
        margin: auto 5px;
      }
    }
    .filter-container {
      .filter-btn {
        display: flex;
        flex-wrap: nowrap;
        width: 230px;
        height: 45px;
        font-size: 15px;
        border-radius: 25px;
        background-color: #ffffff2f;
        .text {
          margin: auto;
          color: white;
        }
        .icon {
          margin: auto;
          svg {
            font-size: 14px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 850px) {
  .main-container {
    height: 170px;
    .container {
      margin: auto;
      display: grid;
      justify-content: center;
      text-align: center;
      grid-template-rows: 3 3 4;
      .breadscrumb {
        margin: 0;
      }
      .category {
        display: flex;
        justify-content: center;
      }
      .filter-container {
        .filter-btn {
          padding: 10px;
        }
      }
    }
  }
}
</style>
