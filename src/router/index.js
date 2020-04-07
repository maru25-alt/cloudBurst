import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomePage.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/aboutus',
    name: 'About',
    component: () => import( '../views/AboutPage.vue')
  },
  {
    path: '/calender',
    name: 'calender',
    component: () => import('../views/CalenderPage.vue')
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('../views/MapPage.vue')
  },
  {
    path: '/graph',
    name: 'graph',
    component: () => import( '../views/Weather_graphPage.vue')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import( '../views/Weather_tablePage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
