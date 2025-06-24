
import Endereco from "./Endereco";
export default abstract class Pessoas{
    id!:number;
    nome!:string;
    cpf!:string;
    telefone!:string;
    email!:string;
    endereco!: Endereco;
    data_nascimento!:Date;
    data_cadastro!:Date;


}