<template>
  <div>
    <nav>
      <div class="nav-wrapper">
        <router-link to="/" tag="a" class="brand-logo">Logo</router-link>
        <router-link
          ref="dropdownScript"
          to="/"
          tag="a"
          data-target="mobile-demo"
          class="sidenav-trigger"
        >
          <i class="material-icons">menu</i>
        </router-link>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
          >
            <a href="/">{{ link.title }}</a>
          </router-link>
        </ul>
        <ul class="sidenav" id="mobile-demo">
          <router-link
            v-for="link in links"
            :key="link.url"
            tag="li"
            active-class="active"
            :to="link.url"
            :exact="link.exact"
          >{{ link.title }}</router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import M from "materialize-css";
let $ = require("jquery");

export default {
  name: "Header",
  props: ["value"],
  data() {
    return {
      links: [
        { title: "Главная", url: "/", exact: true },
        { title: "Реестр", url: "/registry" },
        { title: "Сотрудники", url: "/workers" },
        { title: "Новые кадры", url: "/new-workers" },
        { title: "Отделы", url: "/departments" },
        { title: "Профиль", url: "/profile" }
      ]
    };
  },
  mounted() {
    M.AutoInit();
  }
};
</script>
