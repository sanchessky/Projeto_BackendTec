



import Estoque from "../classes/Estoque";
import { conexao } from "../database/Config";
import CommandsEstoque from "../Interfaces/Commands";
    
    export default class CommandsEstoquRepository implements CommandsEstoque<Estoque>{
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
        Cadastrar(obj: Estoque): Promise<Estoque> {
            return new Promise((resolve, rejact)=>{
                conexao.query(`INSERT INTO estoque(id_produto,quantidade,estoque_minimo,estoque_maximo, ultima_entrada, ultima_saida)VALUES(?,?,?,?,?,?)`,
                    [
                        obj.produto,
                        obj.quantidade,
                        obj.estoque_minimo,
                        obj.estoque_maximo,
                        obj.ultima_entrada,
                        obj.ultima_saida
                    ],
                    (erro, result:any)=>{
                        if (erro) {
                            return rejact(erro)
                        }
                        else{
                            return resolve(result)
                        }
                    }
                )
        
                })    
        }
        Listar(): Promise<Estoque[]> {
            return new Promise((resolve,reject)=>{
                conexao.query("Select * from estoque",(erro, result)=>{
                    if(erro){
                        return reject(erro)
                    }
                    else{
                        return resolve(result as Estoque[])
                    }
                })
            })
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
        PesquisarQntd(quantidade: string): Estoque[] {
            throw new Error("Method not implemented.");
        }
    }