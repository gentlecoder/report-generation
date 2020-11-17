import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/excel',
    name: 'Excel',
    component: () => import(/* webpackChunkName: "about" */ '../views/Excel.vue')
  },
  {
    path: '/manul',
    name: 'Manul',
    component: () => import(/* webpackChunkName: "about" */ '../views/Manul.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
