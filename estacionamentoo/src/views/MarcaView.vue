<template>
    <div class="mainhomem">
      <div class="hometitulom">
        <h1>MARCAS</h1>
      </div>
      <div class="botaom">
        <button type="button" class="btn btn-outline-success">Cadastrar marca</button>
      </div>
  
      <div class="divtabelam">
        <div class="tabelam">
          <table class="table table-striped table-bordered table-responsive">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Marca</th>
                <th scope="col">Ação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Chevrolet</td>
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
  .mainhomem {
    background-color: white;
    
  }
  
  .botaom {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    height: 50px;
  }
  
  .divtabelam {
    width: 100%;
  
    display: flex;
  
    justify-content: center;
    align-items: center;
  }
  
  .tabelam {
    width: 65%;
  }
  
  .hometitulom h1 {
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
  