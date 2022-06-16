/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'


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
                    <a className="collection-item">Serviços 1</a>
                    <a className="collection-item">Serviços 2</a>
                    <a className="collection-item">Serviços 3</a>
                    <a className="collection-item">Serviços 4</a>
                </div>
            </div>
        )
    }
}