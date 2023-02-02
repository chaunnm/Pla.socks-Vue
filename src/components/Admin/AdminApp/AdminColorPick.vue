<template>
  <div class="adminColorPick-container">
    <div class="section">
      <h3>App</h3>
      <h2>
        Color Picker
        <i class="fa-solid fa-palette"></i>
      </h2>
    </div>
    <div class="color-picker">
      <v-row>
        <v-col cols="12" md="6">
          <v-sheet dark class="pa-4">
            <pre>{{ showColor }}</pre>
          </v-sheet>
          <v-btn
          v-for="t in types"
          :key="t"
          class="my-4"
          block
          @click="type = t"
        >{{ t }}</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-color-picker
            v-model="color"
            class="ma-2"
            show-swatches
            width="400px"
            max-width="50%"
          ></v-color-picker>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  title: "PlaSocks - Color Pick",
  name: "AdminColorPick",
  components: {},
  data() {
    return {
      types: ["hex", "hexa", "rgba", "hsla", "hsva"],
      type: "hex",
      hex: "#FF00FF",
      hexa: "#FF00FFFF",
      rgba: { r: 255, g: 0, b: 255, a: 1 },
      hsla: { h: 300, s: 1, l: 0.5, a: 1 },
      hsva: { h: 300, s: 1, v: 1, a: 1 },
    };
  },
  methods: {},
  computed: {
    color: {
      get() {
        return this[this.type];
      },
      set(v) {
        this[this.type] = v;
      },
    },
    showColor() {
      if (typeof this.color === "string") return this.color;

      return JSON.stringify(
        Object.keys(this.color).reduce((color, key) => {
          color[key] = Number(this.color[key].toFixed(2));
          return color;
        }, {}),
        null,
        2
      );
    },
    bgStyle() {
      return {
        "background-color": `#${this.showColor}`,
      };
    },
  },
};
</script>

<style lang="scss" src="./AdminColorPick.scss" scoped></style>
