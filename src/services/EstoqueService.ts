import { Request, Response } from "express";
import Estoque from "../classes/Estoque";
import EstoqueRepository from "../repository/EstoqueRepository";

export default class EstoqueService {
  estoqRepository = new EstoqueRepository();

  async cadastroEstoque(req: Request, res: Response) {
    const estoq: Estoque = new Estoque();
    estoq.produto = req.body.id_produto;
    estoq.quantidade = req.body.quantidade;
    estoq.estoque_maximo = req.body.estoque_maximo;
    estoq.estoque_minimo = req.body.estoque_minimo;
    estoq.ultima_entrada = req.body.ultima_entrada;
    estoq.ultima_saida = req.body.ultima_saida;



    try {
      const rs = await this.estoqRepository.Cadastrar(estoq);
      return res.status(201).json(rs);
  }
  catch (erro) {
      return res.status(500).json(erro)
  }

}


  async listarEstoque(req: Request, res: Response) {
    try {
      const resultado = await this.estoqRepository.Listar();
      return res.status(200).json(resultado);
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }

}
