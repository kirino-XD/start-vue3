import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/home/Home.vue"), // 注意这里要带上 文件后缀.vue
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/pages/login/Login.vue"), // 注意这里要带上 文件后缀.vue
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
