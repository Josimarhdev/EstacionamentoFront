<template>
  <div class="container" style="margin-top: 40px;">
  
  <div class="row">
    <div class="col-md-10 text-start"> <p class="fs-2"> <strong>Lista de Movimentações</strong></p> </div>
    <div class="col-md-2"> 
      <div class="d-grid gap-2">
        <router-link type="button" class="btn btn-outline-success" 
          to="/cadastromovimentacao">Cadastrar
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
            <th scope="col" class="text-start">Nome</th>
            <th scope="col" class="text-start">Marca</th>
            <th scope="col" class="text-start">Modelo</th>
            <th scope="col" class="text-start">Placa</th>  
            <th scope="col" class="text-start">Hora de entrada</th>
            <th scope="col">Opção</th>
          </tr>
        </thead>  
        <tbody class="table-group-divider">
          
          <tr v-for="item in movimentacoesList" :key="item.id">
            <th class="col-md-1">{{ item.id }}</th>
            <th class="col-md-2"> 
              <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
              <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
            </th>
            <th class="text-start">{{ item.condutor.nome }}</th>
            <th class="text-start">{{ item.veiculo.modelo.marca.nome}}</th>
            <th class="text-start">{{ item.veiculo.modelo.nome}}</th> 
            <th class="text-start">{{ item.veiculo.placa}}</th>
            <th class="text-start">{{ item.entrada}}</th>
            <th class="col-md-2">
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <router-link type="button" class="btn btn-sm btn-warning" 
                    :to="{ name: 'movimentacao-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                  Registrar saída 
                </router-link>
                <router-link type="button" class="btn btn-sm btn-danger" 
                    :to="{ name: 'movimentacao-formulario-excluir-view', query: { id: item.id, form: 'deletaMovimentacao' } } ">
                  Desativar
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

import MovimentacaoClient from '@/client/movimentacao.client';
import { Movimentacao } from '@/model/Movimentacao';

export default defineComponent({
  name: 'MovimentacaoLista',
  data() {
    return {
        movimentacoesList: new Array<Movimentacao>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      MovimentacaoClient.listaCompleta()
        .then(sucess => {
          this.movimentacoesList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
  </script>

<style>
.container {
  background-color: white;
  min-height: 74.5vh;
}





</style>
