import Produto from "./Produto";

export default class Estoque{
    id!:number;
    produto!:Produto;
    quantidade!: string;
    estoque_minimo!:string;
    estoque!:string;
    ultima_entrada!: string;
    ultima_saida!: string;

}