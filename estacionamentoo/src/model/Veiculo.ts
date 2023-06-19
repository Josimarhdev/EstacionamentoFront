import { AbstractEntity } from "./AbstractEntity";
import { Cor } from "./Cor";
import { Modelo } from "./Modelo";
import { Tipo } from "./Tipo";

export class Veiculo extends AbstractEntity{

placa!: String;
modelo!: Modelo;
ano!: Int32Array;
cor!: Cor;
tipo!: Tipo;





}