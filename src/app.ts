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

app.get("/api/v1/listar/cliente", (req, res) => {
    cli.listarClientes(req, res);
});

app.post("/api/v1/cliente/cadastrar", (req, res) => {
        cli.cadastroCliente(req, res);
    })


app.get("/api/v1/listar/funcionario", (req, res) => {
        fun.listarFuncionarios(req, res);
});
    
app.post("/api/v1/cadastrar/funcionario", (req, res) => {
        fun.cadastroFuncionario(req, res);
});
    
app.post("/api/v1/cadastrar/produto", (req, res) => {
    prod.cadastroProduto(req, res);
});
app.get("/api/v1/listar/produto", (req, res) => {
    prod.listarProdutos(req, res);
});
app.get("/api/v1/produto/listarmaisvendidos", (req, res) => {
    prod.listarProdutosMaisVendidos(req, res);
});


app.get("/api/v1/produto/listarporcategoria/:categoria", (req, res) => {
    prod.listarProdutosPorCategoria(req, res);
});

app.get("/api/v1/produto/listarporid/:id", (req, res) => {
    prod.listarProdutosPorId(req, res);
});
app.get("/api/v1/listar/venda", (req, res) => {
    ven.listarVendas(req, res);
});
app.post("/api/v1/cadastrar/venda", (req, res) => {
    ven.cadastroVenda(req, res);
});


app.get("/api/v1/listar/itemvendido", (req, res) => {
    item.listarItem(req, res);
});
app.post("/api/v1/cadastrar/itemvendido", (req, res) => {
    item.cadastroItem(req, res);
});
app.get("/api/v1/listar/pagamento", (req, res) => {
    pag.listarPagamentos(req, res);
 });
app.post("/api/v1/cadastrar/pagamento", (req, res) => {
   pag.cadastroPagamento(req, res);
 });
app.post("/api/v1/cadastrar/estoque", (req, res) => {
    estoq.cadastroEstoque(req, res);
  });
app.post("/api/v1/listar/estoque", (req, res) => {
    estoq.listarEstoque(req, res);
   });
   app.post("/api/v1/cadastrar/usuarios", (req, res) => {
    us.cadastrarUsuario(req, res);
  });
app.post("/api/v1/login/usuario", (req, res) => {
    us.loginUsuario(req, res);
  });
app.listen(5000, '0.0.0.0', () => {
    console.log(`Online em: http://127.0.0.1:5000`)
});


