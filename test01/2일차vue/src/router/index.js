import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import DataBinding from '../views/DataBinding.vue'
// import googlelogin from '../views/GoogleLogin.vue'
import Person from '../views/Person.vue'
import ImageUpload from '../views/ImageUpload.vue'

const routes = [
  {
    path: '/imageupload',
    name: 'ImageUpload',
    component: ImageUpload
  },
  {
    path: '/person',
    name: 'Person',
    component: Person
  },
  {
    path: '/googlelogin',
    name: 'GoogleLogin',
    component: () =>
      import(/* webpackChunkName: "parent" */ '../views/GoogleLogin.vue')
  },
  {
    path: '/datadinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
