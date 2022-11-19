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
          <li @click="selectedCategory = 'Boxes Of Love'">Boxes Of Love (1)</li>
          <li @click="selectedCategory = 'Customized Socks'">
            Customized Socks (2)
          </li>
          <ul class="level-2">
            <li>Customized Performance Socks (3)</li>
            <li>Dress Socks (4)</li>
            <li>Standard & Athlete Socks (5)</li>
          </ul>
          <li @click="selectedCategory = 'Socks For Kids'">
            Socks For Kids (6)
          </li>
          <ul class="level-2">
            <li>Crew Socks (7)</li>
            <li>Knee-High Socks (8)</li>
          </ul>
          <li @click="selectedCategory = 'Socks For Men'">Socks For Men (9)</li>
          <li @click="selectedCategory = 'Socks For Women'">
            Socks For Women (10)
          </li>
          <li @click="selectedCategory = 'Socks For Winter'">
            Socks For Winter (11)
          </li>
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
    selectedCategory: "",
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
    selectedCategory(value) {
      this.$emit("changeCategory", value);
    },
  },
};
</script>

<style lang="scss" scoped src="./FilterSection.scss"></style>
