import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/workers",
    name: "Staff",
    component: () => import("../views/Staff.vue"),
  },
  {
    path: "/new-workers",
    name: "NewWorkers",
    component: () => import("../views/NewWorkers.vue"),
  },
  {
    path: "/registry",
    name: "Registry",
    component: () => import("../views/Registry.vue"),
  },
  {
    path: "/departments",
    name: "Departments",
    component: () => import("../views/Departments.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
