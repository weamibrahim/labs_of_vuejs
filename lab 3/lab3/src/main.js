import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import userDetails from "./components/userdetails.vue";
import allusers from "./components/allusers.vue";
import errorComponent from "./components/error.vue";
const routes = [
  {
    path: "/",
    component: allusers,
    alias: "/users",
  },

  {
    path: "/users/:id",
    component: userDetails,
  },

  {
    path: "/:NotFound(.*)*",
    component: errorComponent,
    meta: { hideNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// custom directive

const app = createApp(App);

app.directive("theme", {
  mounted(elem, binding) {
    if (binding.value === "primary") {
      elem.style.backgroundColor = "blue";
    } else if (binding.value === "warning") {
      elem.style.backgroundColor = "pink";
    } else {
      elem.style.backgroundColor = "gray";
    }
  },
});
app.use(router).mount("#app");
