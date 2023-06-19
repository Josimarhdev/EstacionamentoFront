<template>
    <div class="maincadastromo">
      <div class="titulotcadastromo">
        <h1>Cadastro de modelo</h1>
      </div>
      <div class="formulariomo">
        <ul class="list-group">
          <li class="list-group-item">
            <select class="seletordemarca" label="Marca">
              <option selected disabled>Marca</option>
              <option>Toyota</option>
              <option>Porsche</option>
              <option>Ford</option>
              <option>Chevrolet</option>
              <option>BMW</option>
              <option>Audi</option>
              <option>Mercedes-Benz</option>
              <option>Volkswagen</option>
              <option>Nissan</option>
              <option>Honda</option>
              <option>Hyundai</option>
              <option>Kia</option>
              <option>Volvo</option>
              <option>Subaru</option>
              <option>Mazda</option>
            </select>
          </li>
          <li class="list-group-item">
            <input class="form-control me-2" type="text" placeholder="Nome do modelo" />
          </li>
         
          
        </ul>
        <div class="botaoconfirmarmodelo">
          <button
            type="button"
            onclick="window.location.href='/modelo'"
            class="btn btn-outline-success"
          >
            Cadastrar modelo
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .maincadastromo {
    min-height: 79.8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .titulotcadastromo {
    width: 100%;
    height: 25vh;
  
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .formulariomo  {
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
  
  .botaoconfirmarmodelo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  </style>
  