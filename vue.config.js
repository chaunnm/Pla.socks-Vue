const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  // chainWebpack: (config) => {
  //   config.module.rules.delete("eslint");
  // },
});
module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete("eslint");
  },
};
