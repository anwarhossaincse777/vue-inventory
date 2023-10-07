import "./assets/main.css";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css'
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);

const app = createApp(App);

app.use(ElementPlus);
app.component('EasyDataTable', Vue3EasyDataTable);
app.use(pinia);
app.use(router);

app.mount("#app");
