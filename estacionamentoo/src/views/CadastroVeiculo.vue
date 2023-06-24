<template>
  <div class="maincadastrovei">
    <div class="titulotcadastrov">
      <h1>Cadastro de veículo</h1>
    </div>
    <div class="formulariov">
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
          <input class="form-control me-2" type="text" placeholder="Placa" />
        </li>
        <li class="list-group-item">
          <input class="form-control me-2" type="text" placeholder="Cor" />
        </li>
        <li class="list-group-item">
          <select class="seletordemarca" label="Ano">
            <option selected disabled>Ano</option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
            <option>2003</option>
            <option>2004</option>
            <option>2005</option>
            <option>2006</option>
            <option>2007</option>
            <option>2008</option>
            <option>2009</option>
            <option>2010</option>
            <option>2011</option>
            <option>2012</option>
            <option>2013</option>
            <option>2014</option>
            <option>2015</option>
            <option>2016</option>
            <option>2017</option>
            <option>2018</option>
            <option>2019</option>
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
            <option>2023</option>
            <option>2024</option>
          </select>
        </li>
      </ul>
      <div class="botaoconfirmarveiculo">
        <button type="button" class="btn btn-outline-danger">
                  Voltar
                </button>
        <button
          type="button"
          onclick="window.location.href='/veiculo'"
          class="btn btn-outline-success"
        >
          Cadastrar veículo
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.maincadastrovei {
  min-height: 79.8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulotcadastrov {
  width: 100%;
  height: 25vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.formulariov {
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

.botaoconfirmarveiculo {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 50px;
}

.botaoconfirmarveiculo button{

margin-left: 5px;

}
</style>
