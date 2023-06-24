<template>
<div class="mainconfigs">
    <h1 class="titconfig">Configurações</h1>
<div class="divtabela">
    <table class="table table-bordered table-striped table-responsive">
                    <thead>
                        <tr>
                        <th scope="col">Valor por hora</th>
                        <th scope="col">Valor da multa por minuto</th>
                        <th scope="col">Inicio do expediente</th>
                        <th scope="col">Fim do expediente</th>
                        <th scope="col">Tempo desconto </th>
                        <th scope="col">Tempo de desconto</th>
                        <th scope="col">Gerar desconto</th>
                        <th scope="col">Vagas moto</th>
                        <th scope="col">Vagas carro</th>
                        <th scope="col">Vagas van</th>
                        <th scope="col">Opções</th>
                        </tr>
                    </thead>
                    <tbody class="table-group-divider">
                        <tr>
                        
                        <td>R$10,00</td>
                        <td>R$00,20</td>
                        <td>09:00:00</td>
                        <td>22:00:00</td>
                        <td>50:00:00</td>
                        <td>02:00:00</td>
                        <td>Sim</td>
                        <td>20</td>
                        <td>50</td>
                        <td>5</td>
                        <td>
                           
                <button id="botaooo" onclick="window.location.href='/configuracoesedicao'" type="button" class="btn btn-outline-warning">
                  Editar
                </button>
                    </td>

                        </tr>
                    </tbody>
            </table>
        </div>

</div>


</template>

<style>

    .divtabela{

        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        
        
    }
      .mainconfigs{
        flex-direction: column;
        min-height: 79.8vh;
        display: flex;
        align-items: center;
       
        width: 100%;
        height: 100%;

        }

    
      button{

        margin: 2px;

      }

      .titconfig{

        display: flex;
        margin-top: 50px;
        justify-content: center;
        height:15vh;
        width: 100%;
      

      }

      .mainconfigs h1{




  
  
  font-size: 50px;
  font-weight: bold;
  color: black;
 
  text-transform: uppercase;
  text-decoration: underline;
  letter-spacing: 2px;
  height: 10vh;



      }


</style>