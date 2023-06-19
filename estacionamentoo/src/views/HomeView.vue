<template>
  <div class="mainhome">
    <div class="hometitulo">
      <h1>PÁGINA INICIAL</h1>
    </div>
    <div class="botao">
        <button  type="button" onclick="window.location.href='/cadastromovimentacao'" class="btn btn-outline-success">Cadastrar movimentação</button>
      </div>

    <div class="divtabela">
      <div class="tabela">
        <table class="table table-striped table-bordered table-responsive">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">CPF</th>
              <th scope="col">Marca</th>
              <th scope="col">Modelo</th>
              <th scope="col">Placa</th>
              <th scope="col">Data/hora de entrada</th>
              <th scope="col">Ação</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>João</td>
              <td>011.235.351-53</td>
              <td>Chevrollet</td>
              <td>Corvette</td>
              <td>SOF-1293</td>
              <td>18/06/2023 - 12:20:32</td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Opções
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">Registrar Saída</a>
                    </li>
                    <li><a class="dropdown-item" href="#">Editar</a></li>
                    <li><a class="dropdown-item" href="#">Excluir</a></li>
                  </ul>
                </div>
              </td>
             
            </tr>
            <tr>
              <td>2</td>
              <td>Maria</td>
              <td>925.512.515-82</td>
              <td>Porsche</td>
              <td>911</td>
              <td>KSE-2935</td>
              <td>18/06/2023 - 10:51:12</td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Opções
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">Registrar Saída</a>
                    </li>
                    <li><a class="dropdown-item" href="#">Editar</a></li>
                    <li><a class="dropdown-item" href="#">Excluir</a></li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Carlos</td>
              <td>235.163.725-82</td>
              <td>Toyota</td>
              <td>Corolla</td>
              <td>ISD-2834</td>
              <td>18/06/2023 - 09:42:52</td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Opções
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">Registrar Saída</a>
                    </li>
                    <li><a class="dropdown-item" href="#">Editar</a></li>
                    <li><a class="dropdown-item" href="#">Excluir</a></li>
                  </ul>
                </div>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Vagner</td>
              <td>262.732.924-91</td>
              <td>Chevrolet</td>
              <td>S10</td>
              <td>VDR-2384</td>
              <td>18/06/2023 - 08:23:36</td>
              <td>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Opções
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">Registrar Saída</a>
                    </li>
                    <li><a class="dropdown-item" href="#">Editar</a></li>
                    <li><a class="dropdown-item" href="#">Excluir</a></li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts"></script>

<style>
.mainhome {
  background-color: white;
  min-height: 79.8vh;
}

.botao {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 140px;
}

.divtabela {
  width: 100%;

  display: flex;

  justify-content: center;
  align-items: center;
}

.tabela {
  width: 65%;
}

.hometitulo h1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  font-weight: bold;
  color: black;
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 2px;
  height: 18vh;
}
</style>
