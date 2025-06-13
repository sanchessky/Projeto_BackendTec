import Commands from "./Commands";

export default interface CommandsEstoque<T> extends Commands<T>{
    PesquisarQntd
    PesquisarEstoqueMax
    PesquisarEstoqueMin
    

}