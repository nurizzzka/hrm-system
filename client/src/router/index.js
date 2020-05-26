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
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/login",
    name: "LoginForm",
    component: () => import("../views/LoginForm.vue"),
  },
  {
    path: "/registration",
    name: "RegistrationForm",
    component: () => import("../views/RegistrationForm.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
