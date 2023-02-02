<template>
  <v-app>
    <v-main>
      <AdminLayout v-if="isAdmin && getShowAdmin">
        <template v-slot:default>
          <router-view />
        </template>
      </AdminLayout>
      <LayoutDefault v-else>
        <template v-slot:default>
          <router-view />
        </template>
      </LayoutDefault>
      <div
        id="pagetop"
        class="fixed right-0 bottom-0"
        v-show="scY > 300"
        @click="toTop"
      >
        <img
          src="https://drive.google.com/uc?id=1aCFB6UWlKIhdfkwmHYq82WsSWbxckKmL"
          alt=""
        />
      </div>
    </v-main>
  </v-app>
</template>

<script>
import AdminLayout from "./components/Admin/AdminLayout/AdminLayout.vue";
import LayoutDefault from "@/components/layouts/Layout.vue";
import { mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    LayoutDefault,
    AdminLayout,
  },
  data: () => ({
    scTimer: 0,
    scY: 0,
    // showAdmin: null,
    // isAdmin: null,
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  created() {
    // this.showAdmin = this.$store.getters.getShowAdminUI;
    // this.isAdmin = this.$store.getters.getUserCurrent.admin;
    // console.log("show", this.showAdmin);
    // console.log("isAdmin", this.isAdmin);
  },
  computed: {
    ...mapGetters(["getShowAdmin"]),
    isAdmin() {
      // return true;
      return this.$store.getters.getUserCurrent.admin;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #777777;
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#pagetop {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  z-index: 99999999;

  img {
    float: right;
    width: 80px;
    animation: moveInUp 0.5s ease-out;
    animation-fill-mode: backwards;
  }
}

@keyframes moveInUp {
  0% {
    opacity: 0;
    transform: translateY(20%);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
