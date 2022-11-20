<template>
  <div class="main-container">
    <h3>CATEGORIES</h3>
    <hr />
    <div class="categoryList-container">
      <ul class="level-1">
        <li
          :class="selectedCategory === 'Boxes Of Love' ? 'active' : 'inactive'"
          @click="selectedCategory = 'Boxes Of Love'"
        >
          <img
            src="https://drive.google.com/uc?id=10Xz6m5wn_sT6NKTrNetyW_ckcuDeK2SK"
            alt=""
          />
          <p>Boxes Of Love (1)</p>
        </li>
        <li
          :class="
            selectedCategory === 'Customized Socks' ? 'active' : 'inactive'
          "
          @click="selectedCategory = 'Customized Socks'"
        >
          <img
            src="https://drive.google.com/uc?id=1q_cr9tB0MYyNacHq16_DvkQQcIIg-nkn"
            alt=""
          />
          <p>Customized Socks (2)</p>
        </li>
        <ul class="level-2">
          <li>
            <img
              src="https://drive.google.com/uc?id=1EYcvwC5-6UEkB2tiVfi_s8NNHyRolj5m"
              alt=""
            />
            <p>Customized Performance Socks (3)</p>
          </li>
          <li>
            <img
              src="https://drive.google.com/uc?id=1_uzPi2mXK6g0B8nOKV9jyFPeeDixci8r"
              alt=""
            />
            <p>Dress Socks (4)</p>
          </li>
          <li>
            <img
              src="https://drive.google.com/uc?id=1rxGQ0pbUcIEIKgKVO5zU1eg_5ynIGhIw"
              alt=""
            />
            <p>Standard & Athlete Socks (5)</p>
          </li>
        </ul>
        <li
          :class="selectedCategory === 'Socks For Kids' ? 'active' : 'inactive'"
          @click="selectedCategory = 'Socks For Kids'"
        >
          <img
            src="https://drive.google.com/uc?id=18emIX5Asf8BTTyAaYWEBD2s2bRTkjLQm"
            alt=""
          />
          <p>Socks For Kids (6)</p>
        </li>
        <ul class="level-2">
          <li>
            <img
              src="https://drive.google.com/uc?id=1OBgxZngh7Mxb6TczJgQeO5smjBVncT5W"
              alt=""
            />
            <p>Crew Socks (7)</p>
          </li>
          <li>
            <img
              src="https://drive.google.com/uc?id=1aUzDwBy51CHwUNro_aqKjgkcLOMnHr6J"
              alt=""
            />
            <p>Knee-High Socks (8)</p>
          </li>
        </ul>
        <li
          :class="selectedCategory === 'Socks For Men' ? 'active' : 'inactive'"
          @click="selectedCategory = 'Socks For Men'"
        >
          <img
            src="https://drive.google.com/uc?id=1Ni0lGCZ-tbYy_B10xSy82KC66Lm6qObj"
            alt=""
          />
          <p>Socks For Men (9)</p>
        </li>
        <li
          :class="
            selectedCategory === 'Socks For Women' ? 'active' : 'inactive'
          "
          @click="selectedCategory = 'Socks For Women'"
        >
          <img
            src="https://drive.google.com/uc?id=1SZK0QWvp7NY_VdyA5Z3hfK70a2RYvt8C"
            alt=""
          />
          <p>Socks For Women (10)</p>
        </li>
        <li
          :class="
            selectedCategory === 'Socks For Winter' ? 'active' : 'inactive'
          "
          @click="selectedCategory = 'Socks For Winter'"
        >
          <img
            src="https://drive.google.com/uc?id=1W184eml-Lj6FyonVwC6nIfxPrHdvKanb"
            alt=""
          />
          <p>Socks For Winter (11)</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategorySection",
  data: () => ({
    selectedCategory: "",
  }),

  watch: {
    selectedCategory(value) {
      this.$emit("changeCategory", value);
      // this.$root.$emit("changeCategory", value);
      // console.log(value);
    },
  },
  methods: {
    // updateTitle() {
    //   this.$emit("changeTitle", this.selectedCategory);
    // },
  },
};
</script>

<style lang="scss" src="./CategorySection.scss" scoped></style>
