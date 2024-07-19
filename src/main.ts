import { VueQueryPlugin } from "@tanstack/vue-query";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/organisms/Router";
import "./style.css";

const app = createApp(App);
app.use(router);
app.use(VueQueryPlugin);
app.mount("#app");
