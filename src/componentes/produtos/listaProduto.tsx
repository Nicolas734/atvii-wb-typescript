/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import "../produtos/cadastroProduto.css"
import { Link } from "react-router-dom";


type props = {
    tema: string
}

export default class ListaProduto extends Component<props> {

    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }  
    render() {
        let estilo = `collection-item active  pink lighten-2 ${this.props.tema}`
        return (
            <div className="containerProd">

                <div className="input-field col s12 opcao">
                    <select >
                        <option  value="">Opções</option>
                        <option value="1">Produtos mais consumidos</option>
                        <option value="2">Produtos mais consumidos (gênero) </option>
                    </select>
                </div>

                <div className="collection">
                    <Link to = {'/Produto'} className="collection-item">Produto 1</Link>
                    <Link to = {'/Produto'} className="collection-item">Produto 2</Link>
                    <Link to = {'/Produto'} className="collection-item">Produto 3</Link>
                    <Link to = {'/Produto'} className="collection-item">Produto 4</Link>
                </div>
            </div>
        )
    }
}