import { AbstractEntity } from "./AbstractEntity";
import { Condutor } from "./Condutor";
import { Veiculo } from "./Veiculo";


export class Movimentacao extends AbstractEntity {

    veiculo! : Veiculo

    condutor! : Condutor

    entrada!: Date

    saida?: Date

    tempo?: Date

    tempoDesconto?: Date

    tempoMulta?: Date

    valorDesconto?: Float32Array
    valorMulta?: Float32Array
    valorTotal?: Float32Array
    valorHora?: Float32Array
    valorHoraMulta?: Float32Array

}