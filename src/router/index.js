import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Test1 from '@/views/Test1.vue'
import Test2 from '@/views/Test2.vue'
import TestQr from '@/views/TestQr.vue'

Vue.use(VueRouter)

const routes = [
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/test1',
    name: 'test1',
    component: Test1
  },
  {
    path: '/test2',
    name: 'test2',
    component: Test2
  },
  {
    path: '/testQr',
    name: 'testQr',
    component: TestQr
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
