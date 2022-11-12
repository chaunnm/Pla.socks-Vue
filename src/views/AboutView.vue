<template>
  <div class="about">
    <h1 @click.stop="drawer = !drawer">This is an about page</h1>

    <v-btn color="success" class="mt-12" @click="overlay = !overlay">
      Show Overlay
    </v-btn>

    <v-overlay :absolute="absolute" :value="overlay">
      <v-btn color="success" @click="overlay = false"> Hide Overlay </v-btn>
    </v-overlay>
  </div>
</template>

<script>
export default {
  title: "Pla.Socks - About",
  data() {
    return {
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard" },
        { title: "Photos", icon: "mdi-image" },
        { title: "About", icon: "mdi-help-box" },
      ],
      right: null,
      drawer: false,
      group: null,
    };
  },
};
</script>

<style></style>
