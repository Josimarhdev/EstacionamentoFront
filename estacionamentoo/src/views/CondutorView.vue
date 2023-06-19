<template>
  <div class="mainhomec">
    <div class="hometituloc">
      <h1>CONDUTORES</h1>
    </div>
    <div class="botaoc">
        <button  type="button" onclick="window.location.href='/cadastrocondutor'" class="btn btn-outline-success">Cadastrar condutor</button>
      </div>

    <div class="divtabelac">
      <div class="tabelac">
        <table class="table table-striped table-bordered table-responsive">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Telefone</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>João</td>
              <td>011.235.351-53</td>
              <td>45991290404</td>
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
              <td>Maria</td>
              <td>925.512.515-82</td>
              <td>45981728463</td>
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
              <td>Carlos</td>
              <td>235.163.725-82</td>
              <td>45927458265</td>
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
              <td>Vagner</td>
              <td>262.732.924-91</td>
              <td>45927452652</td>
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
              <td>Leticia</td>
              <td>023.523.632-62</td>
              <td>45923845285</td>
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
              <td>Maycon</td>
              <td>923.492.294-82</td>
              <td>45929349582</td>
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
              <td>Fred</td>
              <td>923.429.532=23</td>
              <td>45928347321</td>
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
              <td>John</td>
              <td>923.429.219-12</td>
              <td>45928348532</td>
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
.mainhomec {
  background-color: white;
  
}

.botaoc {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 35px;
  height: 50px;
}

.divtabelac {
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;
}

.tabelac {
  width: 65%;
}

.hometituloc h1 {
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
