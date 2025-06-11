
import Endereco from "./Endereco";
import Contato from "./Contato";
export default abstract class Usuario{
    id!:number;
    nome!:string;
    cpf!:string;
    usuario!:string;
    senha!:string;
    contato!: Contato;
    endereco!: Endereco;
    data_nascimento!:string
    data_cadastro!:string

}