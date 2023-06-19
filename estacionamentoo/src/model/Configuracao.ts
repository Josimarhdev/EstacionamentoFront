import { AbstractEntity } from "./AbstractEntity";

export class Configuracao extends AbstractEntity{

valorHora?: Float32Array;
valorMinutoMulta?: Float32Array;
inicioExpediente?: Float32Array;
fimExpediente?: Float32Array;
tempoParaDesconto?: Float32Array;
tempoDeDesconto?: Float32Array;
gerarDesconto?: Float32Array;
vagasMoto?: Int32Array;
vagasCarro?: Int32Array;
vagasVan?: Int32Array


}