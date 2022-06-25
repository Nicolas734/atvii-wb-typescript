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

                <h2>Listagem de Clientes</h2>

                <div className="input-field col s12 opcoes">
                <select>
                <option value="" disabled>Listar clientes por genero</option>
                    <option value="1">Todos</option>
                    <option value="2">Masculino</option>
                    <option value="3">Feminino</option>
                    <option value="4">Não Informado</option>
                </select>
            </div>



                <div className="collection home">
                    <Link to ={'/Cliente'} className="collection-item pointer">Natalia Bessa</Link>
                </div>
            </div>
        )
    }
}