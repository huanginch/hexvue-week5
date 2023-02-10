import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import "./all.scss";
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
