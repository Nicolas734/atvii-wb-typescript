import { type } from "@testing-library/user-event/dist/type";
import { Component, ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Cadastros from "../cadastros/cadastros";
import AtualizaCliente from "../clientes/atualizaCliente";
import Cliente from "../clientes/Clientes";
import FormularioCadastroCliente from "../clientes/formularioCadastroCliente";
import ListaCliente from "../clientes/listaCliente";
import Listagens from "../listagens/listagens";
import ListaPedido from "../pedidos/listaPedido";
import Pedido from "../pedidos/pedido";
import RealizarPedido from "../pedidos/realizarPedido";
import AtualizaProduto from "../produtos/atualizaProduto";
import CadastroProdutos from "../produtos/cadastroProdutos";
import ListaProduto from "../produtos/listaProduto";
import Produto from "../produtos/produtos";
import AtualizaServico from "../servicos/atualizaServico";
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
                <Route path="/Pedidos" element={<ListaPedido tema="pink lighten-2"/>}/>
                <Route path="/CadastroCliente" element={<FormularioCadastroCliente tema="pink lighten-2"/>}/>
                <Route path="/CadastroProduto" element={<CadastroProdutos tema="pink lighten-2"/>}/>
                <Route path="/CadastroServico" element={<CadastroServicos tema="pink lighten-2"/>}/>
                <Route path="/CadastroPedido" element={<RealizarPedido tema="pink lighten-2"/>}/>
                <Route path="/Cliente" element={<Cliente tema="pink lighten-2"/>}/>
                <Route path="/Produto" element={<Produto tema="pink lighten-2"/>}/>
                <Route path="/Servico" element={<Servicos tema="pink lighten-2"/>}/>
                <Route path="/Listagens" element={<Listagens tema="pink ligthen-2" />}/>
                <Route path="/Pedido" element={<Pedido tema="pink ligthen-2"/>}/>
                <Route path="/AtualizaCliente" element={<AtualizaCliente tema="pink ligthen-2>"/>}/>
                <Route path="/AtualizaProduto" element={<AtualizaProduto tema="pink ligthen-2>"/>}/>
                <Route path="/AtualizaServico" element={<AtualizaServico tema="pink ligthen-2>"/>}/>

                
    
    
            </Routes>
        )
    }
}
