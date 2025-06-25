import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";
import VendaService from "./services/VendaService";
import ItemvendidoService from "./services/itemvendidoService";
import PagamentoService from "./services/PagamentoService";
import UsuarioService from "./services/UsuarioService";
import EstoqueService from "./services/EstoqueService";








const app = express();
app.use(express.json());
app.use(cors());


const cli = new ClienteService();
const fun = new FuncionarioService
const prod = new ProdutoService
const ven = new VendaService();
const item = new ItemvendidoService();
const pag = new PagamentoService()
const us = new UsuarioService() 
const estoq = new EstoqueService()

app.get("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req, res);
});

app.post("/api/v1/cliente/cadastrar", (req, res) => {
        cli.cadastroCliente(req, res);
    })


app.get("/api/v1/funcionario/listar", (req, res) => {
        fun.listarFuncionarios(req, res);
});
    
app.post("/api/v1/funcionario/cadastrar", (req, res) => {
        fun.cadastroFuncionario(req, res);
});
    
app.post("/api/v1/produto/cadastrar", (req, res) => {
    prod.cadastroProduto(req, res);
});


app.get("/api/v1/produto/listar", (req, res) => {
    prod.listarProdutos(req, res);
});
app.get("/api/v1/venda/listar", (req, res) => {
    ven.listarVendas(req, res);
});
app.post("/api/v1/venda/cadastrar", (req, res) => {
    ven.cadastroVenda(req, res);
});
app.get("/api/v1/itemvendido/listar", (req, res) => {
    item.listarItem(req, res);
});
app.post("/api/v1/itemvendido/cadastrar", (req, res) => {
    item.cadastroItem(req, res);
});
app.get("/api/v1/pagamento/listar", (req, res) => {
    pag.listarPagamentos(req, res);
 });
 
 app.post("/api/v1/pagamento/cadastrar", (req, res) => {
   pag.cadastroPagamento(req, res);
 });

 app.post("/api/v1/usuarios/cadastrar", (req, res) => {
    us.cadastrarUsuario(req, res);
  });


  app.post("/api/v1/estoque/cadastrar", (req, res) => {
    estoq.cadastroEstoque(req, res);
  });
  app.post("/api/v1/estoque/listar", (req, res) => {
    estoq.listarEstoque(req, res);
   });

//#####################-- Inicio listen --##################################
app.listen(5000, '0.0.0.0', () => {
    console.log(`Online em: http://127.0.0.1:5000`)
});


