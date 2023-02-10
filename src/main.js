// plugin setup
import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

//gloabl components
import MyLoading from "./components/MyLoading.vue";

//bootstrap
import "./all.scss";
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

// Vue setup
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.component("MyLoading", MyLoading);

app.mount("#app");
