import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueToast from "vue-toast-notification";
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import "vue-toast-notification/dist/theme-sugar.css";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate";
import "@/assets/styles/scrollbar.scss";
import VueApexCharts from "vue-apexcharts";
Vue.use(VueApexCharts);

//Vuelidate
Vue.use(Vuelidate);

//FontAweSome
library.add(fas);
library.add(fab);
library.add(far);

Vue.component("font-awesome-icon", FontAwesomeIcon);
dom.watch();
//Toast
Vue.use(VueToast);
// Dismiss all opened toast immediately
Vue.$toast.clear();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
