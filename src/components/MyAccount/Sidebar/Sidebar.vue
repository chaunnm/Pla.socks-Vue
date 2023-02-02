<template>
  <div class="container-aside">
    <!-- <v-card> -->
    <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" permanent>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            src="https://preview.redd.it/5unn16axx1v81.jpg?width=640&crop=smart&auto=webp&s=19fcd170aadc63147c0a4492f43017a17f052a02"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-title>Lê Thị Yến Nhi</v-list-item-title>

        <v-btn icon @click.stop="mini = !mini">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>
      <div
        class="list-item"
        @click="select = '1'"
        :class="select == '1' ? 'active-link-account' : ''"
      >
        <v-icon>mdi-account-box-multiple-outline</v-icon>
        <span class="link-text"> My Account</span>
        <!-- <router-link class="link-text" to="/">My Account</router-link> -->
      </div>
      <div
        class="list-item"
        @click="select = '2'"
        :class="select == '2' ? 'active-link-account' : ''"
      >
        <v-icon>mdi-heart-multiple-outline</v-icon>
        <span class="link-text"> Favorites</span>
        <!-- <router-link class="link-text" to="/">Favorites</router-link> -->
      </div>
      <div
        class="list-item mb-6"
        @click="select = '3'"
        :class="select == '3' ? 'active-link-account' : ''"
      >
        <v-icon>mdi-stocking</v-icon>
        <span class="link-text"> My Orders</span>
        <!-- <router-link class="link-text" to="/">My Orders</router-link> -->
      </div>

      <!-- <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->

      <v-divider></v-divider>
      <div class="list-item">
        <v-icon>mdi-help-box-multiple-outline</v-icon>
        <span class="link-text">Helpdesk</span>

        <!-- <router-link class="link-text" to="/">Helpdesk</router-link> -->
      </div>
      <div class="list-item">
        <v-icon>mdi-cogs</v-icon>
        <span class="link-text">Settings</span>
        <!-- <router-link class="link-text" to="/">Settings</router-link> -->
      </div>
      <div class="list-item">
        <v-icon>mdi-logout</v-icon>
        <span class="link-text">Sign Out</span>
        <!-- <router-link class="link-text" to="/">Sign Out</router-link> -->
      </div>
      <!-- <v-list dense>
        <v-list-item v-for="item in itemsSetting" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <!-- </v-card> -->
  </div>
</template>

<script>
// import { mdiAccountBoxMultipleOutline } from '@mdi/js';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",
  data: () => ({
    drawer: true,
    // items: [
    //   { title: "My Account", icon: "mdi-account-box-multiple-outline" },
    //   { title: "Favorites", icon: "mdi-heart-multiple-outline" },
    //   { title: "My Orders", icon: "mdi-stocking" },
    // ],
    // itemsSetting: [
    //   { title: "Helpdesk", icon: "mdi-help-box-multiple-outline" },
    //   { title: "Settings", icon: "mdi-cogs" },
    //   { title: "Sign Out", icon: "mdi-logout" },
    // ],
    windowWidth: window.innerWidth,
    mini: false,
    select: "1",
    width: 0,
  }),
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.width = window.innerWidth;
      console.log(this.width);
    },
  },
  watch: {
    select(value) {
      this.$emit("changeComponent", value);
    },
    width(value) {
      if (value < 900) {
        this.mini = true;
      }
      if (value >= 900) {
        this.mini = false;
      }
    },
  },

  // methods: {
  //   checkScreenWidth() {
  //     console.log(this.windowWidth);
  //     if (this.windowWidth == 650) {
  //       this.mini = true;
  //     }
  //   },
  // },
  // watch: {
  //   select(value) {
  //     this.$emit("changeComponent", value);
  //   },
  // },
};
</script>

<style lang="scss" scoped src="./Sidebar.scss">
@media screen and (max-width: 650px) {
}
</style>
