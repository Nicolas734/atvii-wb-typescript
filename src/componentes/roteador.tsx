import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import Cadastros from "./cadastros/cadastros";
import CLiente from "./clientes/Clientes";
import FormularioCadastroCliente from "./clientes/formularioCadastroCliente";
import ListaCliente from "./clientes/listaCliente";
import CadastroProdutos from "./produtos/cadastroProdutos"
import ListaProduto from "./produtos/listaProduto";
import CadastroServicos from "./servicos/cadastroServicos";
import ListaServicos from "./servicos/listaServicos";

type state = {
    tela: string
}

export default class Roteador extends Component<{}, state> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Home'
        }
        this.selecionarView = this.selecionarView.bind(this)
        
    }

    selecionarView(novaTela: string, evento: Event) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
        
    }

    render() {
        let barraNavegacao = <BarraNavegacao seletorView={this.selecionarView} tema="purple lighten-4" botoes={['Home', 'Clientes', 'Produtos', 'Serviços']} />
        
          //para ir para tela de cadastro de cliente
        if (this.state.tela === 'Home'){
            return (
                <>
                    {barraNavegacao}
                    <CLiente tema="purple lighten-4" />
                </>
            )
        }

        //lista de cliente
        if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="purple lighten-4" />
                </>
            )
        }

        //lista de produtos
        if (this.state.tela === 'Produtos'){
            return(
                <>
                {barraNavegacao}
                <ListaProduto tema="purple lighten-4" />
                </>
            )
        }
        
        //lista de serviços

        if (this.state.tela === 'Serviços'){
            return(
                <>
                {barraNavegacao}
                <ListaServicos tema="purple lighten-4" />
                </>
            )
        }

      
      
    

    



        


    }
}