import CommandsUsuario from "./CommandsPessoa";


export default interface CommandsFuncionario<T> extends CommandsUsuario<T>{
    PesquisarCargo(cargo:string):T[]
    PesquisarSalario(salario:number):T[]


}