import Produto from "./Produto";

export default class Estoque{
    id!:number;
    produto!:Produto;
    quantidade!: string;
    estoque_minimo!:string;
    estoque_maximo!:string;
    ultima_entrada!: Date;
    ultima_saida!: Dates;

}