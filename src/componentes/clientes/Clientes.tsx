/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'


type props = {
    tema: string
}

export default class CLiente extends Component<props> {
    
    render() {
        let estilo = `collection-item active  pink lighten-2 ${this.props.tema}`
        return (
            <div className="containerCli">
             <h2 className="nome">Natália Bessa</h2>
                <ul className="collapsible popout">
                    <li>
                        <div className="collapsible-header"><i className="material-icons">person</i>Dados Pessoais</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">shopping_cart</i>Produtos</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                    <li>
                        <div className="collapsible-header"><i className="material-icons">work</i>Serviços</div>
                        <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                    </li>
                </ul>

            </div>
        )
    }
}