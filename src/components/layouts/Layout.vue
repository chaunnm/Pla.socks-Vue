<template>
  <div>
    <NavigationBar />
    <main class="main-slot">
      <slot></slot>
    </main>
    <FooterSection />
  </div>
</template>

<script>
import NavigationBar from "./NavigationBar/NavigationBar.vue";
import FooterSection from "./Footer/FooterSection.vue";

export default {
  name: "LayoutDefault",
  components: {
    NavigationBar,
    FooterSection,
  },
};
</script>

<style lang="scss" scoped></style>
