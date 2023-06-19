<template>
  <div class="maincadastromov">
    <div class="titulotcadastromov">
      <h1>Cadastro de movimentação</h1>
    </div>
    <div class="formulariomov">
      <ul class="list-group">
        <li class="list-group-item">
          <select class="seletordemarca" label="Nome">
            <option selected disabled>Nome do condutor</option>
            <option>Alice</option>
            <option>João</option>
            <option>Marcos</option>
            <option>Danielli</option>
            <option>Enzo</option>
            <option>Fiona</option>
          </select>
        </li>
        <li class="list-group-item">
        <select class="seletordemarca" label="Nome">
            <option selected disabled>CPF</option>
            <option>022.023.293-43</option>
            <option>922.324.524-64</option>
          </select>
        </li>



        <li class="list-group-item">
          <select class="seletordemarca" label="Modelo">
            <option selected disabled>marca</option>
            <option>Corolla</option>
            <option>911</option>
            <option>Mustang</option>
            <option>Camaro</option>
            <option>Série 3</option>
            <option>A4</option>
            <option>Classe C</option>
            <option>Golf</option>
            <option>GT-R</option>
            <option>Civic</option>
            <option>Sonata</option>
            <option>Sportage</option>
            <option>S60</option>
            <option>Impreza</option>
            <option>MX-5</option>
          </select>
        </li>
        <li class="list-group-item">
          <select class="seletordemarca" label="Modelo">
            <option selected disabled>Modelo</option>
            <option>Corolla</option>
            <option>911</option>
            <option>Mustang</option>
            <option>Camaro</option>
            <option>Série 3</option>
            <option>A4</option>
            <option>Classe C</option>
            <option>Golf</option>
            <option>GT-R</option>
            <option>Civic</option>
            <option>Sonata</option>
            <option>Sportage</option>
            <option>S60</option>
            <option>Impreza</option>
            <option>MX-5</option>
          </select>
        </li>
        <li class="list-group-item">
          <select class="seletordemarca" label="placa">
            <option selected disabled>Placa</option>
            <option>SDI-1294</option>
            <option>JDS-2948</option>
            <option>XZJ-2833</option>
            <option>CXI-2385</option>
            <option>KSA-1284</option>
            <option>CDI-2834</option>
          </select>
        </li>

      </ul>
      <div class="botaoconfirmarmovimentacao">
        <button
          type="button"
          onclick="window.location.href='/'"
          class="btn btn-outline-success"
        >
          Cadastrar movimentação
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.maincadastromov {
  min-height: 79.8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulotcadastromov {
  width: 100%;
  height: 25vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.formulariomov {
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

.botaoconfirmarmovimentacao {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
}
</style>
