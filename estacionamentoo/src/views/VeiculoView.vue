<template>
    <div class="mainhomev">
      <div class="hometitulov">
        <h1>VEÍCULOS</h1>
      </div>
      <div class="botaov">
        <button  type="button" onclick="window.location.href='/cadastroveiculo'" class="btn btn-outline-success">Cadastrar veículo</button>
      </div>
  
      <div class="divtabelav">
        <div class="tabelav">
          <table class="table table-striped table-bordered table-responsive">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Placa</th>
                <th scope="col">Ano</th>
                <th scope="col">Cor</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Chevrolet</td>
                <td>Camaro</td>
                <td>ADS-2354</td>
                <td>2013</td>
                <td>Amarelo</td>


                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Excluir
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Editar
                  </button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Porsche</td>
                <td>911</td>
                <td>IJD-2395</td>
                <td>2015</td>
                <td>Vermelho</td>
                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Excluir
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Editar
                  </button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Toyota</td>
                <td>Corolla</td>
                <td>PVI-2385</td>
                <td>2018</td>
                <td>Preto</td>
                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Excluir
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Editar
                  </button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Hyundai</td>
                <td>HB20</td>
                <td>ISD-2934</td>
                <td>2017</td>
                <td>Prata</td>

                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Excluir
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Editar
                  </button>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Nissan</td>
                <td>Skyline</td>
                <td>SKY-2395</td>
                <td>2004</td>
                <td>Prata</td>

                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Excluir
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Editar
                  </button>
                </td>
              </tr>
              <tr>
                <td>6</td>


                <td>Volkswagen</td>
                <td>Gol</td>
                <td>DIS-2385</td>
                <td>2010</td>
                <td>Amarelo</td>
                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Excluir
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Editar
                  </button>
                </td>
              </tr>
  
              <tr>
                <td>7</td>
   
                <td>Peugeot</td>
                <td>307</td>
                <td>HDS-2835</td>
                <td>1997</td>
                <td>Preto</td>
                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Excluir
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Editar
                  </button>
                </td>
              </tr>
  
  
              <tr>
                <td>8</td>
 
                <td>Ford</td>
                <td>Focus</td>
                <td>BSD-2384</td>
                <td>2003</td>
                <td>Vermeho        </td>

                <td>
                  <button type="button" class="btn btn-outline-danger">
                    Excluir
                  </button>
                  <button type="button" class="btn btn-outline-warning">
                    Editar
                  </button>
                </td>
              </tr>
  
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </template>
  
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
  
  .divtabelav {
    width: 100%;
  
    display: flex;
  
    justify-content: center;
    align-items: center;
  }
  
  .tabelav {
    width: 65%;
  }
  
  .hometitulov h1 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
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
  