<template>
  <div class="container" style="margin-top: 40px;">
  
  <div class="row">
    <div class="col-md-10 text-start"> <p class="fs-2"> Lista de Modelos </p> </div>
    <div class="col-md-2"> 
      <div class="d-grid gap-2">
        <router-link type="button" class="btn btn-success" 
          to="/cadastromodelo">Cadastrar
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
            <th scope="col" class="text-start">Modelo</th>
            <th scope="col" class="text-start">Marca</th>
            <th scope="col">Opção</th>
          </tr>
        </thead>  
        <tbody class="table-group-divider">
          
          <tr v-for="item in modelosList" :key="item.id">
            <th class="col-md-1">{{ item.id }}</th>
            <th class="col-md-2"> 
              <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
              <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
            </th>
            <th class="text-start">{{ item.nome }}</th>
            <th class="text-start">{{ item.marca.nome }}</th>
            
            <th class="col-md-2">
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <router-link type="button" class="btn btn-sm btn-warning" 
                    :to="{ name: 'modelo-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                  Editar 
                </router-link>
                <router-link type="button" class="btn btn-sm btn-danger" 
                    :to="{ name: 'modelo-formulario-excluir-view', query: { id: item.id, form: 'deletaModelo' } } ">
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

import ModeloClient from '@/client/modelo.client';
import { Modelo } from '@/model/Modelo';

export default defineComponent({
  name: 'ModeloLista',
  data() {
    return {
        modelosList: new Array<Modelo>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      ModeloClient.listaCompleta()
        .then(sucess => {
          this.modelosList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
  </script>

<style>
 .mainhomemo {
    background-color: white;
    
  }
  
  .botaomo {
    display: flex;
    align-items: center;
    justify-content: center;
   
    margin-bottom: 35px;
    height: 50px;
  }
  
  .divtabelamo {
    width: 100%;
  
    display: flex;
  
    justify-content: center;
    align-items: center;
  }
  
  .tabelamo {
    width: 100%;
  }
  
  .hometitulomo h1 {
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
