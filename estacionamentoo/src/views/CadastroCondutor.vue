<template>

  <div class="container" style="background: ;">

    <div class="row">
      <div class="col-md-10 text-start"> <p class="fs-3"> Cadastro de condutor </p> </div>
      <div class="col-md-2"> </div>
    </div>

    <hr/>

    <div v-if="mensagem.ativo" class="row">
      <div class="col-md-12 text-start">
        <div :class="mensagem.css" role="alert">
          <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12 text-start">
        <label class="form-label">Nome do condutor *</label>
        <input type="text"  class="form-control" v-model="condutor.nome">

        <label class="form-label">CPF do condutor *</label>
        <input type="text"  class="form-control" v-model="condutor.cpf">

        <label class="form-label">Telefone do condutor *</label>
        <input type="text"  class="form-control" v-model="condutor.telefone">
      </div>
    </div>

    <div class="row">
      <div class="col-md-3 offset-md-6"> 
        <div class="d-grid gap-2">
          <router-link type="button" class="btn btn-info" 
            to="/condutor">Voltar
          </router-link>
        </div>
      </div>
      <div class="col-md-3 "> 
        <div class="d-grid gap-2">
          <button v-if="form === undefined" type="button" 
              class="btn btn-success" @click="onClickCadastrar()">
            Cadastrar 
          </button>
          <button v-if="form === 'editar'" type="button" 
              class="btn btn-warning" @click="onClickEditar()">
            Editar 
          </button>
          <button v-if="form === 'deletaCondutor'" type="button"
            class="btn btn-danger" @click="onClickExcluir()">
            Excluir 
          </button>
        </div>
      </div>
    </div>
  </div>

</template>

<script lang="ts">

import  CondutorClient from '@/client/condutor.client'; 
import { Condutor } from '@/model/Condutor';
import { defineComponent } from 'vue';

export default defineComponent({
name: 'CondutorFormulario',
data() {
  return { 
    condutor: new Condutor(),
    mensagem: {
      ativo: false as boolean,
      titulo: "" as string,
      mensagem: "" as string,
      css: "" as string
    }
  }
},
computed: {
  id () {
    return this.$route.query.id
  },
  form () {
    return this.$route.query.form
  }
},
mounted() { 

  if(this.id !== undefined){
    this.findById(Number(this.id));
  }


},
methods: {

  onClickCadastrar(){
    CondutorClient.cadastrar(this.condutor)
      .then(sucess => {
        this.condutor = new Condutor()
        
        this.mensagem.ativo = true;
        this.mensagem.mensagem = sucess;
        this.mensagem.titulo = "Parabens. ";
        this.mensagem.css = "alert alert-success alert-dismissible fade show";
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
        console.log(error);
      });
  },
  findById(id: number){
    CondutorClient.findById(id)
      .then(sucess => {
        this.condutor = sucess
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
  },
  onClickEditar(){
    CondutorClient.editar(this.condutor.id, this.condutor)
      .then(sucess => {
        this.condutor = new Condutor()
        
        this.mensagem.ativo = true;
        this.mensagem.mensagem = sucess;
        this.mensagem.titulo = "Parabens. ";
        this.mensagem.css = "alert alert-success alert-dismissible fade show";
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
  },
  onClickExcluir(){
    CondutorClient.deletaCondutor(this.condutor.id)
      .then(sucess => {
        this.condutor = new Condutor()
        
        this.$router.push({ name: 'condutor-lista-view' });
      })
      .catch(error => {
        this.mensagem.ativo = true;
        this.mensagem.mensagem = error;
        this.mensagem.titulo = "Error. ";
        this.mensagem.css = "alert alert-danger alert-dismissible fade show";
      });
  }
}
});

</script>
  
  <style>
  .maincadastroco {
    min-height: 79.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .titulotcadastroco {
    width: 100%;
    height: 25vh;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .formularioco {
    height: 30vh;
    width: 35%;
  }
  
  .seletordemarca {
    padding-right: 40px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    opacity: 0.7;
  }
  
  .botaoconfirmarcondutor {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 50px;
  }

  .botaoconfirmarcondutor button{

    margin-left: 5px;

  }


  </style>
  