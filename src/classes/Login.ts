
import Endereco from "./Endereco";
import Contato from "./Contato";
export default abstract class Usuario{
    id!:number;
    nome!:string;
    cpf!:string;
    contato!: Contato;
    endereco!: Endereco;
    data_nascimento!:Date;
    data_cadastro!:Date;

}