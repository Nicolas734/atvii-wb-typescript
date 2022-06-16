/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "../cadastros/cadastros.css"
import M from 'materialize-css'

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
                <div className="collection">
                    <a className="collection-item">Cadastrar Cliente</a>
                    <a className="collection-item">Cadastrar Produtos</a>
                    <a className="collection-item">Cadastrar Serviços</a>
                </div>
            </div>
        )
    }
}