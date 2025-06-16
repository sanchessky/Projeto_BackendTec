import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";
import EstoqueService from "./services/EstoqueService";





const app = express();
app.use(express.json());
app.use(cors());


const cli = new ClienteService();
const fun = new FuncionarioService();
const prod = new ProdutoService();



app.get("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req, res);
});

app.post("/api/v1/cliente/cadastro", (req, res) => {
        cli.cadastroCliente(req, res);
    })


 app.get("/api/v1/funcionario/listar", (req, res) => {
    fun.listarFuncionarios(req, res);
});

app.post("/api/v1/funcionario/cadastro", (req, res) => {
        fun.cadastroFuncionario(req, res);
    })
   
app.get("/api/v1/produto/listar",(req,res)=>{
    prod.listarProduto
})

app.post("/api/v1/produto/cadastrar",(req,res)=>{
    prod.cadastroProduto
})


//#####################-- Inicio listen --##################################
app.listen(5000, () => {
    console.log(`Online em: http://127.0.0.1:5000`)
});


