import Commands from "../Interfaces/Commands";
import Produto from "../classes/Produto";
import { conexao } from "../database/Config";

export default class ProdutoRepository implements Commands<Produto> {
    Cadastrar(obj: Produto): Promise<Produto> {

        return new Promise((resolve, reject) => {


            conexao.query(
                "INSERT INTO produto(nome,preco,marca,categoria,garantia_meses,codigo_barras,fabricante,data_cadastro,descricao,foto1,foto2,foto3) VALUES (?, ?, ?, ?, ?, ? ,? ,? , ? ,? ,? ,?)",
                [
                    
                    obj.nome,
                    obj.preco,
                    obj.marca,
                    obj.categoria,
                    obj.garatia,
                    obj.codigo_barras,
                    obj.fabricante,
                    obj.data_cadastro,
                    obj.descricao,
                    obj.foto1,
                    obj.foto2,
                    obj.foto3
                    ],
                (erro, end: any) => {

                    if (erro) {
                        return reject(erro);
                    }

                    


                }
            );
        }
        );
    }

    Listar(): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            conexao.query("SELECT * FROM Produto", (erro, result) => {
                if (erro) {
                    return reject(erro);
                } else {
                    return resolve(result as Produto[]);
                }
            });
        });



    }

    ListarMaisVendidos(): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            conexao.query(`SELECT produto.nome, produto.foto1, itemvendido.quantidade
from produto inner join itemvendido
on produto.id = itemvendido.id_produto
order by itemvendido.quantidade DESC
limit 0,10;`, (erro, result) => {
                if (erro) {
                    return reject(erro);
                } else {
                    return resolve(result as Produto[]);
                }
            });
        });



    }

    ListarPorCategoria(categoria: string): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            conexao.query(`SELECT * FROM produto WHERE descricao like ${categoria}`, (erro, result) => {
                if (erro) {
                    return reject(erro);
                } else {
                    return resolve(result as Produto[]);
                }
            });
        });



    }



    ListarPorId(id:number): Promise<Produto[]> {
        return new Promise((resolve, reject) => {
            conexao.query(`SELECT * FROM produto WHERE id=${id}`, (erro, result) => {
                if (erro) {
                    return reject(erro);
                } else {
                    return resolve(result as Produto[]);
                }
            });
        });



    }

    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Produto): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Produto> {
        throw new Error("Method not implemented.");
    }
}