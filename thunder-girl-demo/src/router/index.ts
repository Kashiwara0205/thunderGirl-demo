import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import DemoJs from '../views/demo_js.vue'
import DemoTs from '../views/demo_ts.vue'
Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/demo_js',
    name: 'demo_js',
    component: DemoJs
  },
  {
    path: '/demo_ts',
    name: 'demo_ts',
    component: DemoTs
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
