import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import "materialize-css/dist/js/materialize.min";
import messagePlugin from "@/plugins/message/message.plugin.js";
import "material-design-icons/iconfont/material-icons.css";

Vue.config.productionTip = false;

Vue.use(messagePlugin);
Vue.use(Vuelidate);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
