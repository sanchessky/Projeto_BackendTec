import { Request, Response } from "express";
import Produto from "../classes/Produto";
import ProdutoRepository from "../repositories/ProdutoRepository";

export default class ProdutoService {
  prodRepository = new ProdutoRepository();

  async cadastroProduto(req: Request, res: Response) {
    const prod: Produto = new Produto();
    prod.nome = req.body.nome;
    prod.preco = req.body.preco;
    prod.marca = req.body.marca;
    prod.categoria = req.body.categoria;
    prod.garantia_meses = req.body.garantia_meses;
    prod.codigo_barras = req.body.codigo_barras;
    prod.fabricante = req.body.fabricante;
    prod.data_cadastro = req.body.data_cadastro;
    prod.descricao = req.body.descricao;
    prod.foto1 = req.body.foto1;
    prod.foto2 = req.body.foto2;
    prod.foto3 = req.body.foto3;


    try {
      const resultado = await this.prodRepository.Cadastrar(prod);
      return res.status(201).json(resultado);
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }

  async listarProduto(req: Request, res: Response) {
    try {
      const resultado = await this.prodRepository.Listar();
      return res.status(200).json(resultado);
    } catch (erro) {
      return res.status(500).json(erro);
    }
  }

}
