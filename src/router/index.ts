/*
 * @Author: zhb
 * @Descripttion:
 * @Date: 2022-08-02 18:33:37
 * @LastEditors: zhb
 * @LastEditTime: 2022-08-03 09:35:23
 * @FilePath: /hello-vue3/src/router/index.ts
 */
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "login",
    component: () => import("../views/login/login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
