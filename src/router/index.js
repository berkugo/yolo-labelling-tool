import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../components/Main"
import Label from "../components/Label"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Main,
  },
  {
    path: "/i",
    name: "Label",
    component: Label,
    props: true
  },
];

const router = new VueRouter({
  routes,
});

export default router;
