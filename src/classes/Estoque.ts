import Produto from "./Produto";

export default class Estoque{
    id!:number;
    produto!:Produto;
    quantidade!: number;
    estoque_minimo!:number;
    estoque_maximo!:number;
    ultima_entrada!: Date;
    ultima_saida!: Date;

}