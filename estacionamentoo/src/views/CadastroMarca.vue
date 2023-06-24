<template>
    <div class="maincadastroma">
      <div class="titulotcadastroma">
        <h1>Cadastro de marca</h1>
      </div>
      <div class="formularioma">
        <ul class="list-group">
      
          <li class="list-group-item">
            <input id="nome-marca" class="form-control me-2" type="text" placeholder="Nome da marca" />
          </li>
         
        </ul>
        <div class="botaoconfirmarmarca">
            <button type="button" class="btn btn-outline-danger">
                  Voltar
                </button>
          <button
            type="button"
            onclick="window.location.href='/marca'"
            class="btn btn-outline-success"
          >
            Cadastrar marca
          </button>
        </div>
      </div>
    </div>
  </template>



  
  <style>
  .maincadastroma {
    min-height: 79.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .titulotcadastroma {
    width: 100%;
    height: 25vh;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .formularioma {
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
  
  .botaoconfirmarmarca {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 50px;
  }

  .botaoconfirmarmarca button{

    margin-left: 5px;

  }
  </style>
  