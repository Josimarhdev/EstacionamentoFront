<template>
  <div class="container" style="margin-top: 40px;">
  
  <div class="row">
    <div class="col-md-10 text-start"> <p class="fs-2"> Lista de Configurações </p> </div>
    <div class="col-md-2"> 
      <div class="d-grid gap-2">
        <router-link v-if="!configuracoesList.length" type="button" class="btn btn-success" 
          to="/configuracoescadastro">Cadastrar
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
            <th scope="col" class="text-start">Valor por hora</th>
            <th scope="col" class="text-start">Valor da multa por minuto</th>
            <th scope="col" class="text-start">Inicio do expediente</th>
            <th scope="col" class="text-start">Fim do expediente</th>
            <th scope="col" class="text-start">Tempo desconto</th>
            <th scope="col" class="text-start">Tempo de desconto</th>
            <th scope="col" class="text-start">Gerar desconto</th>
            <th scope="col" class="text-start">Vagas moto</th>
            <th scope="col" class="text-start">Vagas carro</th>
            <th scope="col" class="text-start">Vagas van</th>
            <th scope="col">Opção</th>
          </tr>
        </thead>  
        <tbody class="table-group-divider">
          
          <tr v-for="item in configuracoesList" :key="item.id">
            <th class="col-md-1">{{ item.id }}</th>
            <th class="col-md-2"> 
              <span v-if="item.ativo" class="badge text-bg-success"> Ativo </span>
              <span v-if="!item.ativo" class="badge text-bg-danger"> Inativo </span>
            </th>
            <th class="text-start">{{ item.valorHora }}</th>
            <th class="text-start">{{ item.valorMinutoMulta }}</th>
            <th class="text-start">{{ item.inicioExpediente }}</th>
            <th class="text-start">{{ item.fimExpediente }}</th>
            <th class="text-start">{{ item.tempoParaDesconto }}</th>
            <th class="text-start">{{ item.tempoDeDesconto }}</th>
            <th class="text-start">{{ item.gerarDesconto }}</th>
            <th class="text-start">{{ item.vagasMoto }}</th>
            <th class="text-start">{{ item.vagasCarro }}</th>
            <th class="text-start">{{ item.vagasVan }}</th>
            <th class="col-md-2">
              <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                <router-link type="button" class="btn btn-sm btn-warning" 
                    :to="{ name: 'configuracoes-formulario-editar-view', query: { id: item.id, form: 'editar' } } "> 
                  Editar 
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

import ConfiguracoesClient from '@/client/configuracao.client';
import { Configuracao } from '@/model/Configuracao';

export default defineComponent({
  name: 'ConfiguracoesLista',
  data() {
    return {
        configuracoesList: new Array<Configuracao>()
    }
  },
  mounted() {
    this.findAll();
  },
  methods: {

    findAll() {
      ConfiguracoesClient.listaCompleta()
        .then(sucess => {
          this.configuracoesList = sucess
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
});
  </script>

<style>

   :scope{font-size:13px;} 

      


</style>