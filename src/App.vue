<template>
  <v-app>
    <v-main>
      <LayoutDefault>
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
import LayoutDefault from "@/components/layouts/Layout.vue";
export default {
  name: "App",
  components: {
    LayoutDefault,
  },
  data: () => ({
    scTimer: 0,
    scY: 0,
  }),
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
      }, 100);
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-toast {
  z-index: 99999999999 !important;
}

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
