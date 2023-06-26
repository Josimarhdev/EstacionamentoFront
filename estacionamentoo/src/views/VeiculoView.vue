<template>
  <div class="container" style="margin-top: 10px;">
  
  <div class="row">
    <div class="col-md-10 text-start"> <p class="fs-3"> Lista de Veiculos </p> </div>
    <div class="col-md-2"> 
      <div class="d-grid gap-2">
        <router-link type="button" class="btn btn-success" 
          to="/cadastroveiculo">Cadastrar
        </router-link>
      </div>
    </div>
  </div>
  
  <div class="row">
    <div class="col-md-12">  
      <table class="table">
        <thead class="table-secondary" >
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Ativo</th>
            <th scope="col" class="text-start">Placa</th>
            <th scope="col" class="text-start">Modelo</th>
            <th scope="col" class="text-start">Cor</th>
            <th scope="col" class="text-start">Tipo</th>
            <th scope="col" class="text-start">Ano</th>
            <th scope="col">Opção</th>
          </tr>
        </thead>  
        <tbody class="table-group-divider">
          
          <tr v-for="item in veiculosList" :key="item.id">
            <th class="col-md-1">{{ item.id }}</th>
            <th class="col-md-2"> 
              <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
              <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
            </th>
            <th class="text-start">{{ item.placa }}</th>
            <th class="text-start">{{ item.modelo.nome }}</th>
            <th class="text-start">{{ item.cor }}</th>
            <th class="text-start">{{ item.tipo }}</th>
            <th class="text-start">{{ item.ano }}</th>
            <th class="col-md-2">
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <router-link type="button" class="btn btn-sm btn-warning" 
                    :to="{ name: 'veiculo-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                  Editar 
                </router-link>
                <router-link type="button" class="btn btn-sm btn-danger" 
                    :to="{ name: 'veiculo-formulario-excluir-view', query: { id: item.id, form: 'deletaVeiculo' } } ">
                  Excluir
                </router-link>
              </div>
            </th>
          </tr>
  
        </tbody>
      </table>
    </div>
  </div>
  </div>
  
  
  </template>

<script lang="ts">

import { defineComponent } from 'vue';

import VeiculoClient from '@/client/veiculo.client';
import { Veiculo } from '@/model/Veiculo';

export default defineComponent({
  name: 'VeiculoLista',
  data() {
    return {
        veiculosList: new Array<Veiculo>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      VeiculoClient.listaCompleta()
        .then(sucess => {
          this.veiculosList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
  </script>
  
  <style>
  .mainhomev {
    background-color: white;
    
  }
  
  .botaov {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    height: 50px;
  }
  
  .divtabelav{
    width: 100%;
  
    display: flex;
  
    justify-content: center;
    align-items: center;
  }
  
  .tabelav{
    width: 100%;
  }
  
  .hometitulov h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    font-weight: bold;
    color: black;
    text-transform: uppercase;
    text-decoration: underline;
    letter-spacing: 2px;
    height: 10vh;
  }
  
  button {
    margin-right: 10px;
  }
  </style>
  