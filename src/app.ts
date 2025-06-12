import express from "express";
import cors from "cors";
import ClienteService from "./services/ClienteService";
import FuncionarioService from "./services/FuncionarioService";





const app = express();
app.use(express.json());
app.use(cors());


const cli = new ClienteService();
const fun = new FuncionarioService();



app.get("/api/v1/cliente/listar", (req, res) => {
    cli.listarClientes(req, res);
});

app.post("/api/v1/cliente/cadastro", (req, res) => {
        cli.cadastroCliente(req, res);
    })


 app.get("/api/v1/listar/funcionario", (req, res) => {
    fun.listarFuncionarios(req, res);
});

app.post("/api/v1/cliente/funcionario", (req, res) => {
        fun.cadastroFuncionario(req, res);
    })
   

//#####################-- Inicio listen --##################################
app.listen(5000, () => {
    console.log(`Online em: http://127.0.0.1:5000`)
});


