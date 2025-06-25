import Pagamento from "../classes/Pagamento";
import { conexao } from "../database/Config";
import Commands from "../Interfaces/Commands";

export default class PagamentoRepository implements Commands<Pagamento>{
    Listar(): Promise<Pagamento[]> {
        return new Promise((resolve,reject)=>{
            conexao.query("Select * from pagamento",(erro, result)=>{
                if(erro){
                    return reject(erro)
                }
                else{
                    return resolve(result as Pagamento[])
                }
            })
        })
    }
    Apagar(id: number): Promise<string> {
        throw new Error("Method not implemented.");
    }
    Atualizar(obj: Pagamento): Promise<Pagamento> {
        throw new Error("Method not implemented.");
    }
    PesquisarId(id: number): Promise<Pagamento> {
        throw new Error("Method not implemented.");
    }
    Cadastrar(obj: Pagamento): Promise<Pagamento> {
        return new Promise((resolve,reject)=>{
 
            conexao.query(
                "INSERT INTO pagamento (id_venda, tipo_pagamento, total_pagar) VALUES (?, ?, ?)",
                [
                  obj.venda,          
                  obj.tipo_pagamento, 
                  obj.total_pagar     
                ],    
            
                (erro,end:any)=>{
                    
                if(erro){
                    return reject(erro);
                }
                else{
                    return resolve(obj)
                }                    
            })
        })
        }
    }