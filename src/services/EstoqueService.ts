import {Request, Response} from "express";
import EstoqueRepository from "../repositories/EstoqueRepoisitory";
import Estoque from "../classes/Estoque";

export default class EstoqueService{
    estRepository = new EstoqueRepository();

    async cadastroEstoque(req:Request, res:Response){
        const est:Estoque = new Estoque();
        
        est.quantidade = req.body.quantidade;
        est.estoque_minimo = req.body.estoque_minimo;
        est.estoque_maximo = req.body.estoque_maximo;
        est.ultima_entrada = req.body.ultima_entrada;
        est.ultima_saida = req.body.ultima_saida

        try{
            const rs = await this.estRepository.Cadastrar(est);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarEstoque(req:Request, res:Response){
        try{
            const rs = await this.estRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}