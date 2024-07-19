import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { RoutePaths } from "../../constants/routes";
import AboutPage from "../../pages/AboutPage.vue";
import HomePage from "../../pages/HomePage.vue";

const routes: RouteRecordRaw[] = [
  { path: RoutePaths.Home, component: HomePage },
  { path: RoutePaths.About, component: AboutPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
