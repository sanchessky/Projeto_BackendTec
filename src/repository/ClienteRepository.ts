import Cliente from "../classes/Cliente";
import { conexao } from "../database/Config";
import CommandsPessoa from "../Interfaces/CommandsPessoa";



export default class ClienteRepository implements CommandsPessoa<Cliente>{
   
    Listar(): Promise<Cliente[]> {
        return new Promise((resolve, reject) => {
            conexao.query("Select * from Cliente", (erro, result) => {
                if (erro) {
                    return reject(erro)
                }
                else {
                    return resolve(result as Cliente[])
                }
            })
        })

    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Cliente): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarCPF(cpf: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Cliente> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Cliente): Promise<Cliente> {
        return new Promise((resolve, reject) => {
            let id_end: any = null;
            conexao.query(
                "INSERT INTO Endereco(tipo_logradouro,logradouro,numero, bairro,complemento,cidade,estado,cep) VALUES (?,?,?,?,?,?,?,?)",
                [
                    obj.endereco.tipo_logradouro,
                    obj.endereco.logradouro,
                    obj.endereco.numero,
                    obj.endereco.bairro,
                    obj.endereco.complemento,
                    obj.endereco.cidade,
                    obj.endereco.estado,
                    obj.endereco.cep
                ],
                (erro, end: any) => {
                    if (erro) {
                        return reject(erro);
                    } else {
                        id_end = end.insertId;
                    }
                 
                            conexao.query(
                                "INSERT INTO Cliente(nome,cpf,telefone,email,data_nascimento,data_cadastro,id_endereco) VALUES (?,?,?,?,?,?,?)",
                                [
                                    obj.nome,
                                    obj.cpf,
                                    obj.data_nascimento,
                                    obj.data_cadastro,
                                    obj.email,
                                    obj.endereco,
                                    id_end
                                    
                                ],
                                (erro, result) => {
                                    if (erro) {
                                        return reject(erro);
                                    } else {
                                        return resolve(obj);
                                    }
                                }
                            )
                        }
                    )
                }
            )
    }
}