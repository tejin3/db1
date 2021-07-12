import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import hello from "../views/hello.vue";
import DataBindingCheckbox from "../views/DataBindingCheckbox.vue";
import DataBindingHtml from "../views/DataBindingHtml.vue";
import DataBindingAttribute from "../views/DataBindingAttribute.vue";
import DataBindingButton from "../views/DataBindingButton.vue";
import DataBindingInputText from "../views/DataBindingInputText.vue";
import DataBindingSelect from "../views/DataBindingSelect.vue";
import DataBindingRadio from "../views/DataBindingRadio.vue";
import exBending from "../views/exBending.vue";
import exRest from "../views/exRest.vue";
import ExRest2 from "../views/ExRest2.vue";
import getList from "../views/getList.vue";
import Person from "../views/Person.vue";

const routes = [
  {
    path: "/person",
    name: "Person",
    component: Person,
  },
  {
    path: "/getList",
    name: "getList",
    component: getList,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/hello",
    name: "hello",
    component: hello,
  },
  {
    path: "/DataBindingCheckbox",
    name: "DataBindingCheckbox",
    component: DataBindingCheckbox,
  },
  {
    path: "/DataBindingHtml",
    name: "DataBindingHtml",
    component: DataBindingHtml,
  },
  {
    path: "/DataBindingAttribute",
    name: "DataBindingAttribute",
    component: DataBindingAttribute,
  },
  {
    path: "/DataBindingButton",
    name: "DataBindingButton",
    component: DataBindingButton,
  },
  {
    path: "/DataBindingInputText",
    name: "DataBindingInputText",
    component: DataBindingInputText,
  },
  {
    path: "/DataBindingSelect",
    name: "DataBindingSelect",
    component: DataBindingSelect,
  },
  {
    path: "/DataBindingRadio",
    name: "DataBindingRadio",
    component: DataBindingRadio,
  },
  {
    path: "/exBending",
    name: "exBending",
    component: exBending,
  },
  {
    path: "/exRest",
    name: "exRest",
    component: exRest,
  },
  {
    path: "/exrest2",
    name: "ExRest2",
    component: ExRest2,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
