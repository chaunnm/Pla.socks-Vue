<template>
  <v-app>
    <v-main>
      <LayoutDefault>
        <template v-slot:default>
          <router-view />
        </template>
      </LayoutDefault>
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
};
</script>

<style scoped>
#app {
  font-family: "Montserrat", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #777777;
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
</style>