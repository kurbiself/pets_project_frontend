import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

const app = createApp(App);

const ax_instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8000/api/",
});
app.config.globalProperties.$http = { ...ax_instance };

app.use(router);
localStorage.access_token = null;
app.mount("#app");
