<template>
  <div class="mainrelatorio">
    <h1 class="titulorelatorio">Relatório</h1>

    <table class="table table-striped">
      <thead>
        <tr class="tr">
          <th scope="col">Informações</th>
          <th scope="col">Valor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Condutor:</th>
          <td>Vagner Santos Junior</td>
        </tr>
        <tr>
          <th scope="row">Placa:</th>
          <td>LGS-2384</td>
        </tr>
        <tr>
          <th scope="row">Valor:</th>
          <td>R$20,50</td>
        </tr>
        <tr>
          <th scope="row">Valor Multa :</th>
          <td>R$ 1.50</td>
        </tr>
        <tr>
          <th scope="row">Valor total:</th>
          <td>R$22,00</td>
        </tr>
        <tr>
          <th scope="row">Horas dentro:</th>
          <td>02:03:40</td>
        </tr>
      </tbody>
    </table>
    <button  type="button" onclick="window.location.href='/'" class="btn btn-outline-success">Concluir</button>
  </div>
</template>


<style>

.mainrelatorio{

min-height: 79.8vh;
display: flex;

align-items:center ;
flex-direction: column;
}

.titulorelatorio{

    height: 17vh;
    display: flex;
    align-items: center;
    justify-content: center;


}


</style>