import {Request, Response} from "express";
import Cliente from "../classes/Cliente";
import ClienteRepository from "../repositories/ClienteRepository";

export default class ClienteService{
    cliRepository = new ClienteRepository();

    async cadastroCliente(req:Request, res:Response){
        const cli:Cliente = new Cliente();
        cli.nome = req.body.nome;
        cli.cpf = req.body.cpf;
        cli.senha = req.body.senha;
        cli.usuario = req.body.usuario;
        cli.endereco = req.body.endereco;
        cli.contato = req.body.contato;
        cli.data_cadastro = req.body.data_cadastro;
        cli.data_nascimento = req.body.data_nascimento;
        try{
            const rs = await this.cliRepository.Cadastrar(cli);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarClientes(req:Request, res:Response){
        try{
            const rs = await this.cliRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}