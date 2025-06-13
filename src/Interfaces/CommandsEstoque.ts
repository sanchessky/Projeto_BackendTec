import Commands from "./Commands";

export default interface CommandsEstoque<T> extends Commands<T>{
    PesquisarQntd(quantidade:string):T[]
    PesquisarEstoqueMax(estoquemaximo:string):T[]
    PesquisarEstoqueMin(estoqueminimo:string):T[]
    PesquisarEntrada(ultima_entrada:Date):T[]
    Pesquisarsaida(ultima_saida:Date):T[]


}