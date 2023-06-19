<template>
    <div class="mainhomemo">
      <div class="hometitulomo">
        <h1>MODELOS</h1>
      </div>
      <div class="botaomo">
        <button type="button" class="btn btn-outline-success">Cadastrar modelo</button>
      </div>
  
      <div class="divtabelamo">
        <div class="tabelamo">
          <table class="table table-striped table-bordered table-responsive">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Marca</th>
                <th scope="col">Modelo</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Chevrolet</td>
                <td>Camaro</td>
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
    width: 65%;
  }
  
  .hometitulomo h1 {
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
  