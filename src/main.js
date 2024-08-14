import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router/index.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./assets/main.css";
const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
createApp(App).use(router).mount("#app");
