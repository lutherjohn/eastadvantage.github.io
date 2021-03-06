import Vue from 'vue'
import App from './App.vue'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import BootstrapGrid from "bootstrap/dist/css/bootstrap-grid.css"
import router from "./router"

Vue.config.productionTip = false
library.add(fas);
library.add(far);
library.add(fab);

Vue.use(Bootstrap);
Vue.use(BootstrapGrid);

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
