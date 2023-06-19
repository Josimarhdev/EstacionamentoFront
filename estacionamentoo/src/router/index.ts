import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/condutor',
    name: 'Condutor',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CondutorView.vue')
  },
  {
    path: '/marca',
    name: 'Marca',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/MarcaView.vue')
  },
  {
    path: '/modelo',
    name: 'Modelo',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/ModeloView.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
