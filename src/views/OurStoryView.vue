<template>
  <div class="story">
    <div class="change-page">
      <div class="btn-group">
        <button
          @click="selected = 1"
          :class="selected === 1 ? 'active' : 'inactive'"
        >
          Our Story
        </button>
        <button
          @click="selected = 2"
          :class="selected === 2 ? 'active' : 'inactive'"
        >
          About Us
        </button>
        <button
          @click="selected = 3"
          :class="selected === 3 ? 'active' : 'inactive'"
        >
          Sustainability
        </button>
      </div>
    </div>
    <OurStoryVue v-if="selected === 1" />
    <AboutUsVue v-else-if="selected === 2" />
    <SustainabilityVue v-else />
  </div>
</template>

<script>
import OurStoryVue from "@/components/OurStory/OurStoryTab/OurStory.vue";
import AboutUsVue from "@/components/OurStory/AboutUsTab/AboutUs.vue";
import SustainabilityVue from "@/components/OurStory/SustainabilityTab/Sustainability.vue";

export default {
  title: "Pla.Socks - Our Story",
  data: () => ({
    selected: 1,
  }),

  components: {
    OurStoryVue,
    AboutUsVue,
    SustainabilityVue,
  },

  watch: {
    $route() {
      this.selected = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.story {
  .change-page {
    display: flex;
    background-color: white;
    height: 5rem;
    .btn-group {
      display: block;
      width: fit-content;
      margin: auto;
      button {
        padding: 7px 10px;
        margin-right: 10px;
        color: #333;
        text-align: center;
        border-radius: 25px;
        // border: 2px dashed #4db7b3;
        background-color: transparent;
        transition: all ease 0.3s;
        &.active {
          background-color: #4db7b3;
          border: transparent;
          color: white;
          font-weight: 600;
        }
        &.inactive {
          background-color: transparent;
          // border: 2px dashed #4db7b3;
          color: #333;
          font-weight: 500;
        }
        &:hover {
          // color: rgba(0, 0, 0, 0.5);
          background-color: rgba(0, 0, 0, 0.05);
        }
      }
    }
  }
}
</style>
