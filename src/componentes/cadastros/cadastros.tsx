/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "../cadastros/cadastros.css"
import M from 'materialize-css'
import { Link } from "react-router-dom";

type props = {
    tema: string
}

export default class Cadastros extends Component<props> {
    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }        
    

    render() {
        let estilo = `collection-item active  pink lighten-2 ${this.props.tema}`
        return (
            <div className="containerCadastro">
                <h2>Cadastros</h2>
                <div className="collection home">
                    <Link to ={'/CadastroCliente'} className="collection-item pointer">Cadastrar Cliente </Link>
                    <Link to ={'/CadastroProduto'} className="collection-item pointer">Cadastrar Produtos</Link>
                    <Link to ={'/CadastroServico'} className="collection-item pointer">Cadastrar Serviços</Link>
                    <Link to={'/CadastroPedido'} className="collection-item pointer">Cadastrar Pedidos</Link>
                </div>
            </div>
        )
    }
}