/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {
    render() {
        let estilo = `collection-item active  pink lighten-2 ${this.props.tema}`
        return (
            <div className="containerCli">
                <div className="collection">
                    <a className="collection-item">Cliente 1</a>
                    <a className="collection-item">Cliente 2</a>
                    <a className="collection-item">Cliente 3</a>
                    <a className="collection-item">Cliente 4</a>
                </div>
            </div>
        )
    }
}