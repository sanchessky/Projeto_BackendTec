import Funcionario from "../classes/Funcionario";
import { conexao } from "../database/Config";
import CommandsFuncionario from "../Interfaces/CommandsFuncionario";

export default class FuncionarioRepository implements CommandsFuncionario<Funcionario> {
    PesquisarContratacao(data_contratacao: string): Funcionario[] {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Funcionario[]> {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Funcionario): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarCargo(cargo: string): Funcionario[] {
        throw new Error("Method not implemented.");
    }
    PesquisarSalario(salario: number): Funcionario[] {
        throw new Error("Method not implemented.");
    }
    PesquisarCPF(cpf: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    PesquisarEmail(email: string): Promise<Funcionario> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Funcionario): Promise<Funcionario> {
        return new Promise((resolve, reject) => {
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
                                    "INSERT INTO Funcionario(nome,cpf,cargo,data_nascimento,data_contratacao,id_endereco,id_contato,usuario,senha) VALUES (?,?,?,?,?,?,?,?)",
                                    [
                                        obj.nome,
                                        obj.cpf,
                                        obj.cargo,
                                        obj.data_nascimento,
                                        obj.data_contratacao,
                                        id_end,
                                        id_cont,
                                        obj.salario
                                        
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
    )}
}