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
            <label for="valorMulta">Valor da Multa por Minuto:</label>
            <input
              type="float"
              class="form-control"
              placeholder="Digite o valor da multa"
            />
          </div>
        </li>
        <li class="list-group-item">
          <div class="form-group">
            <label for="valorMulta">Inicio do expediente:</label>
            <input
              type="time"
              class="form-control"
              placeholder="Digite a hora de inicio"
            />
          </div>
        </li>
        <li class="list-group-item">
          <div class="form-group">
            <label for="valorMulta">Fim do expediente:</label>
            <input
              type="time"
              class="form-control"
              placeholder="Digite a hora do fim do expediente"
            />
          </div>
        </li>
        <li class="list-group-item">
          <div class="form-group">
            <label for="valorMulta">Tempo para obter desconto:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite o tempo para obter desconto"
            />
          </div>
        </li>
        <li class="list-group-item">
          <div class="form-group">
            <label for="valorMulta">Tempo de desconto:</label>
            <input
              type="time"
              class="form-control"
              placeholder="Digite o tempo de desconto"
            />
          </div>
        </li>
        <li class="list-group-item">
          <div class="form-group">
            <label for="valorMulta">Gerar desconto:</label>
            <input
              type="text"
              class="form-control"
            />
          </div>
        </li>
        <li class="list-group-item">
          <div class="form-group">
            <label for="valorMulta">Vagas moto:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite a quantidade de vagas de moto"
            />
          </div>
        </li>
        <li class="list-group-item">
          <div class="form-group">
            <label for="valorMulta">Vagas carro:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite a quantidade de vagas de carro"
            />
          </div>
        </li>
        <li class="list-group-item">
          <div class="form-group">
            <label for="valorMulta">Vagas van:</label>
            <input
              type="text"
              class="form-control"
              placeholder="Digite a quantidade de vagas de van"
            />
          </div>
        </li>
      </ul>
      <div class="botaoconfigg">
      <button type="button" class="btn btn-outline-danger">
                  Voltar
                </button>
    <button
      type="button"
      onclick="window.location.href='/configuracoes'"
      class="btn btn-outline-success"
    >
      Salvar configurações
    </button>
  </div>
    </div>

  </div>
</template>

<style>
.mainconfig {
  margin-top: 50px;
  min-height: 73.2vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.listaconfig {
  
  
    width: 35%;
  
 
}

.tituloconfig {
 
  padding-bottom: 40px;
}
button{

margin-bottom: 50px;

}

.botaoconfigg{


  width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-top: 50px;


}

.botaoconfigg button{

margin-left: 5px;

}
</style>
