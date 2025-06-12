import Cliente from "../classes/Cliente";
import CommandsUsuario from "../Interfaces/CommandsUsuario";
import { conexao } from "../database/Config";
import Contato from "../classes/Contato";



export default class ClienteRepository implements CommandsUsuario<Cliente>{
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
                "INSERT INTO endereco(tipo_logradouro,logradouro,numero,cidade,estado,cep) VALUES (?,?,?,?,?,?)",
                [
                    obj.endereco.tipo_logradouro,
                    obj.endereco.logradouro,
                    obj.endereco.numero,
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
    
                    let id_cont: any = null;
                    conexao.query(
                        "INSERT INTO Contato(telefone,email,rede_social,horario_contato,observacoes) VALUES (?,?,?,?,?)",
                        [
                            obj.contato.telefone,
                            obj.contato.email,
                            obj.contato.rede_social,
                            obj.contato.horario_contato,
                            obj.contato.observacoes
                        ],
                        (erro, cont: any) => {
                            if (erro) {
                                return reject(erro);
                            } else {
                                id_cont = cont.insertId;
                            }
    
                            conexao.query(
                                "INSERT INTO Cliente(nome,cpf,data_nascimento,data_cadastro,id_endereco,id_contato,usuario,senha) VALUES (?,?,?,?,?,?,?,?)",
                                [
                                    obj.nome,
                                    obj.cpf,
                                    obj.data_nascimento,
                                    obj.data_cadastro,
                                    id_end,
                                    id_cont,
                                    obj.usuario,
                                    obj.senha
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
        })
    }
}