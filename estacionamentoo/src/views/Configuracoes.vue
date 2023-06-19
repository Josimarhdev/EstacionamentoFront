<template>
  <div class="mainconfig">
    <div class="tituloconfig">
      <h1>Configurações</h1>
    </div>

    <div class="listaconfig">
      <ul class="list-group">
        <li class="list-group-item">
          <div class="form-group">
            <label for="precoHora">Preço por Hora:</label>
            <input
              type="float"
              class="form-control"
              placeholder="Digite o valor por hora"
            />
          </div>
        </li>
        <li class="list-group-item">
          <div class="form-group">
            <label for="valorMulta">Valor da Multa por Hora:</label>
            <input
              type="float"
              class="form-control"
              placeholder="Digite o valor da multa"
            />
          </div>
        </li>
      </ul>
    </div>
    <button
      type="button"
      onclick="window.location.href='/'"
      class="btn btn-outline-success"
    >
      Salvar configurações
    </button>
  </div>
</template>

<style>
.mainconfig {
  margin-top: 50px;
  min-height: 73.2vh;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.listaconfig {
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
}

.tituloconfig {
  padding-top: 30px;
  padding-bottom: 80px;
}
</style>
