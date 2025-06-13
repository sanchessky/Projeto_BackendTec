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
    Cadastrar(obj: Estoque): Promise<Estoque> {
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
   
}