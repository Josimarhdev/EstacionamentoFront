<template>
    <div class="maincadastroco">
      <div class="titulotcadastroco">
        <h1>Cadastro de condutor</h1>
      </div>
      <div class="formularioco">
        <ul class="list-group">
      
          <li class="list-group-item">
            <input class="form-control me-2" type="text" placeholder="Nome do condutor" />
          </li>
          <li class="list-group-item">
            <input class="form-control me-2" type="text" placeholder="CPF" />
          </li>
          <li class="list-group-item">
            <input class="form-control me-2" type="text" placeholder="Telefone" />
          </li>
                
         
        </ul>
        <div class="botaoconfirmarcondutor">
          <button
            type="button"
            onclick="window.location.href='/condutor'"
            class="btn btn-outline-success"
          >
            Cadastrar condutor
          </button>
        </div>
      </div>
    </div>
  </template>
  
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
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  </style>
  