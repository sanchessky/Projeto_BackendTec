import Cliente from "./Cliente";
import Funcionario from "./Funcionario";
export default class Venda{
    id!:number;
    data_hora!:Date
    cliente!:Cliente;
    funcionario!:Funcionario;
    forma_entrega!: string;
    valor_total!:number;
    
}