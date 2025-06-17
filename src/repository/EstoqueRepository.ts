import Estoque from "../classes/Estoque";
import { conexao } from "../database/Config";
import CommandsEstoque from "../Interfaces/CommandsEstoque";

export default class EstoqueRepository implements CommandsEstoque<Estoque> {
    PesquisarQntd(quantidade: string): Estoque[] {
        throw new Error("Method not implemented.");
    }
    PesquisarEstoqueMax(estoquemaximo: string): Estoque[] {
        throw new Error("Method not implemented.");
    }
    PesquisarEstoqueMin(estoqueminimo: string): Estoque[] {
        throw new Error("Method not implemented.");
    }
    PesquisarEntrada(ultima_entrada: Date): Estoque[] {
        throw new Error("Method not implemented.");
    }
    Pesquisarsaida(ultima_saida: Date): Estoque[] {
        throw new Error("Method not implemented.");
    }
    Listar(): Promise<Estoque[]> {
        throw new Error("Method not implemented.");
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Estoque): Promise<Estoque> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Estoque> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Estoque): Promise<Estoque> {
        return new Promise((resolve, reject) => {
            let id_prd: any = null;
    
            conexao.query(
                "INSERT INTO Produto(nome, preco, marca, categoria, garantia_meses, codigo_barras, fabricante, data_cadastro, descricao, foto1, foto2, foto3) VALUES (? ,? ,? ,?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [
                    obj.produto.nome,
                    obj.produto.preco,
                    obj.produto.marca,
                    obj.produto.categoria,
                    obj.produto.garantia_meses,
                    obj.produto.codigo_barras,
                    obj.produto.fabricante,
                    obj.produto.data_cadastro,
                    obj.produto.descricao,
                    obj.produto.foto1,
                    obj.produto.foto2,
                    obj.produto.foto3
                ],
                (erro, result: any) => {
                    if (erro) {
                        return reject(erro);
                    } else {
                        id_prd = result.insertId;
    
                        conexao.query(
                            "INSERT INTO Estoque(id_produto, quantidade, estoque_minimo, estoque_maximo, ultima_entrada, ultima_saida) VALUES (?,?,?,?,?,?)",
                            [
                                id_prd,
                                obj.quantidade,
                                obj.estoque_minimo,
                                obj.estoque_maximo,
                                obj.ultima_entrada,
                                obj.ultima_saida
                            ],
                            (erro, prd: any) => {
                                if (erro) {
                                    return reject(erro);
                                } else {
                                    return resolve(obj);
                                }
                            }
                        );
                    }
                }
            );
        });
    }
}    