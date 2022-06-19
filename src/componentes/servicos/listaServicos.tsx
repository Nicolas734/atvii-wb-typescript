/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'
import { Link } from "react-router-dom";


type props = {
    tema: string
}

export default class ListaServicos extends Component<props> {

    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }  

    render() {
        let estilo = `collection-item active pink lighten-1 ${this.props.tema}`
        return (
            <div className="containerServ">

                <div className="input-field col s12 opcao">
                    <select>
                        
                        <option value="">Opções</option>
                        <option value="1">Serviços mais consumidos</option>
                        <option value="2">Serviços mais consumidos (gênero) </option>
                        
                    </select>
                </div>

                <div className="collection">
                    <Link to = {'/Servico'} className="collection-item">Serviços 1</Link>
                    <Link to = {'/Servico'} className="collection-item">Serviços 2</Link>
                    <Link to = {'/Servico'} className="collection-item">Serviços 3</Link>
                    <Link to = {'/Servico'} className="collection-item">Serviços 4</Link>
                </div>
            </div>
        )
    }
}