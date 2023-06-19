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
  },
  {
    path: '/veiculo',
    name: 'Veiculo',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/VeiculoView.vue')
  },
  {
    path: '/cadastroveiculo',
    name: 'CadastroVeiculo',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroVeiculo.vue')
  },
  {
    path: '/cadastromodelo',
    name: 'CadastroModelo',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroModelo.vue')
  },
  {
    path: '/cadastromarca',
    name: 'CadastroMarca',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMarca.vue')
  },
  {
    path: '/cadastrocondutor',
    name: 'CadastroCondutor',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroCondutor.vue')
  },
  {
    path: '/cadastromovimentacao',
    name: 'CadastroMovimentacao',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMovimentacao.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
