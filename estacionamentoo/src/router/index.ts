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
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroVeiculo.vue'),
    children: [
      {
        path: '/cadastroveiculo',
        name: 'veiculo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroVeiculo.vue')
      },
      {
        path: '/cadastroveiculo',
        name: 'veiculo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroVeiculo.vue')
      }
    ]
  },
  {
    path: '/cadastromodelo',
    name: 'CadastroModelo',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroModelo.vue'),
    children: [
      {
        path: '/cadastromodelo',
        name: 'modelo-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroModelo.vue')
      },
      {
        path: '/cadastromodelo',
        name: 'modelo-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroModelo.vue')
      }
    ]
  },
  {
    path: '/cadastromarca',
    name: 'CadastroMarca',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMarca.vue'),
    children: [
      {
        path: '/cadastromarca',
        name: 'marca-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMarca.vue')
      },
      {
        path: '/cadastromarca',
        name: 'marca-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMarca.vue')
      }
    ]
  },
  
  {
    path: '/cadastrocondutor',
    name: 'CadastroCondutor',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroCondutor.vue'),
    children: [
      {
        path: '/cadastrocondutor',
        name: 'condutor-formulario-editar-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroCondutor.vue')
      },
      {
        path: '/cadastrocondutor',
        name: 'condutor-formulario-excluir-view',
        component: () => import(/* webpackChunkName: "about" */ '../views/CadastroCondutor.vue')
      }
    ]
  },
  {
    path: '/cadastromovimentacao',
    name: 'CadastroMovimentacao',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMovimentacao.vue')
  },
  {
    path: '/configuracoes',
    name: 'Configuracoes',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Configuracoes.vue')
  },
  {
    path: '/configuracoesedicao',
    name: 'ConfiguracoesEdicao',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/ConfiguracoesEdicao.vue')
  },
  {
    path: '/relatorio',
    name: 'Relatorio',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Relatorio.vue')
  },
  {
    path: '/cadastromarca',
    name: 'marca-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroMarca.vue')
  },
  {
    path: '/cadastrocondutor',
    name: 'condutor-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroCondutor.vue')
  },
  {
    path: '/cadastromodelo',
    name: 'modelo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroModelo.vue')
  },
  {
    path: '/cadastroveiculo',
    name: 'veiculo-lista-view',
    component: () => import(/* webpackChunkName: "about" */ '../views/CadastroVeiculo.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
