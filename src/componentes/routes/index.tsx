import { type } from "@testing-library/user-event/dist/type";
import { Component, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Cadastros from "../cadastros/cadastros";
import Cliente from "../clientes/Clientes";
import FormularioCadastroCliente from "../clientes/formularioCadastroCliente";
import ListaCliente from "../clientes/listaCliente";
import CadastroProdutos from "../produtos/cadastroProdutos";
import ListaProduto from "../produtos/listaProduto";
import Produto from "../produtos/produtos";
import CadastroServicos from "../servicos/cadastroServicos";
import ListaServicos from "../servicos/listaServicos";
import Servicos from "../servicos/servicos";


type state = {

}

export default class AppRoutes extends Component <{}, state>{
    constructor(props:{}| Readonly <{}>){
        super(props)
        this.state = {
            tela:'Home'
        }
    }

    render(){
        
        return(
            <Routes>
                <Route path="/" element={<Cadastros tema="pink lighten-2"/>}/>
                <Route path="/Home" element={<Cadastros tema="pink lighten-2"/>}/>
                <Route path="/Produtos" element={<ListaProduto tema="pink lighten-2"/>}/>
                <Route path="/Servicos" element={<ListaServicos tema="pink lighten-2"/>}/>
                <Route path="/Clientes" element={<ListaCliente tema="pink lighten-2"/>}/>
                <Route path="/CadastroCliente" element={<FormularioCadastroCliente tema="pink lighten-2"/>}/>
                <Route path="/CadastroProduto" element={<CadastroProdutos tema="pink lighten-2"/>}/>
                <Route path="/CadastroServico" element={<CadastroServicos tema="pink lighten-2"/>}/>
                <Route path="/Cliente" element={<Cliente tema="pink lighten-2"/>}/>
                <Route path="/Produto" element={<Produto tema="pink lighten-2"/>}/>
                <Route path="/Servico" element={<Servicos tema="pink lighten-2"/>}/>
    
    
            </Routes>
        )
    }
}
