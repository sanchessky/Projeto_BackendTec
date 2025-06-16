import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import FuncionarioService from "./services/FuncionarioService";
import ProdutoService from "./services/ProdutoService";






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
    prod.listarProduto(req, res);
})

app.post("/api/v1/produto/cadastrar",(req,res)=>{
    prod.cadastroProduto(req, res);
})


//#####################-- Inicio listen --##################################
app.listen(5000, '0.0.0.0', () => {
    console.log(`Online em: http://127.0.0.1:5000`)
});


