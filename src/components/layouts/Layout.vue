<template>
  <div>
    <NavigationBar style="position: sticky; top: 0; z-index: 99999" />
    <main class="main-slot" style="z-index: -1">
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
