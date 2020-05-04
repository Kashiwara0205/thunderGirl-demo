import Vue from 'vue'
import Router from 'vue-router'
import Home from "./view/home"
import TableTest from "./view/table_test"

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thunderGirl',
      name: 'thunderGirl',
      component: TableTest
    }
  ]
})