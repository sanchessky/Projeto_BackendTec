import {Request, Response} from "express";
import Itemvendido from "../classes/Itemvendido";
import ItemvendidoRepository from "../repository/ItemvendidoRepository";


export default class ItemvendidoService{
    itemRepository = new ItemvendidoRepository();

    async cadastroItem(req:Request, res:Response){
        const item:Itemvendido = new Itemvendido();
        item.venda = req.body.id_venda;
        item.produto = req.body.id_produto;
        item.quantidade = req.body.quantidade;


        try{
            const rs = await this.itemRepository.Cadastrar(item);
            return res.status(201).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }

    }

    async listarItem(req:Request, res:Response){
        try{
            const rs = await this.itemRepository.Listar();
            return res.status(200).json(rs);
        }
        catch(erro){
            return res.status(500).json(erro)
        }
    }

}