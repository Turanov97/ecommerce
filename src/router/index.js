import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'customer'},
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {layout: 'customer'},
    component: () => import('../views/About.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {layout: 'admin'},
    component: () => import('../views/admin/Admin.app.vue')
  },
  {
    path: '/admin/product-edit',
    name: 'Product Edit',
    meta: {layout: 'admin'},
    component: () => import('../components/admin/AppProductEdit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
