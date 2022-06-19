/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../clientes/cadastroCliente.css'
import M from 'materialize-css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}

export default class ListaCliente extends Component<props> {

    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }        
    
    render() {

        
        let estilo = `collection-item active pink lighten-2${this.props.tema}`
        return (

             <div className="containerCli nomeCli ">

                <div className="input-field col s12 opcao">
                    <select>
                        <option  value="">Opções</option>
                        <option value="1">10 clientes que mais consumiram (quantidade)</option>
                        <option value="2">Clientes por gênero</option>
                        <option value="3">10 cliente que menos consumiram</option>
                        <option value="4">5 clientes que mais consumiram (valor)</option>
                    </select>
                </div>



                <div className="collection">
                    <Link to ={'/Cliente'} className="collection-item pointer">Cliente 1</Link>
                    <Link to ={'/Cliente'} className="collection-item">Cliente 2</Link>
                    <Link to ={'/Cliente'} className="collection-item">Cliente 3</Link>
                    <Link to ={'/Cliente'} className="collection-item">Cliente 4</Link>
                </div>
            </div>
        )
    }
}