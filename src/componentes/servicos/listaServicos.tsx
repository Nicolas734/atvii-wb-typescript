/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'


type props = {
    tema: string
}

export default class ListaServicos extends Component<props> {
    render() {
        let estilo = `collection-item active pink lighten-1 ${this.props.tema}`
        return (
            <div className="containerServ">
                <div className="collection">
                    <a className="collection-item">Serviços 1</a>
                    <a className="collection-item">Serviços 2</a>
                    <a className="collection-item">Serviços 3</a>
                    <a className="collection-item">Serviços 4</a>
                </div>
            </div>
        )
    }
}