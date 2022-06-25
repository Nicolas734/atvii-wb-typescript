/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import '../servicos/cadastroServicos.css'
import { Link } from "react-router-dom";
import "../listagens/listagens.css"


type props = {
    tema: string
}

export default class Listagens extends Component<props> {

    componentDidMount(){
        console.log(M);
        M.AutoInit();
    }  

    render() {
        let estilo = `collection-item active pink lighten-1 ${this.props.tema}`
        return (
            <div className='container center'>
            <h2 className='title'> Listagens de Consumo </h2>
                <div className="row">
                <div className="col s12 ">
                    <ul className="tabs-swipe-demo tabs tabsConsumo ">
                        <li className="tab col s2"><a href="#test-swipe-1">Cli.Consumo Valor</a></li>
                        <li className="tab col s2"><a href="#test-swipe-2">Cli.Maior Qtd</a></li>
                        <li className="tab col s2"><a href="#test-swipe-3">Cli.Menor Consumo</a></li>
                        <li className="tab col s2"><a href="#test-swipe-4">Prod/Serv Consumo</a></li>
                        <li className="tab col s2"><a href="#test-swipe-5">Consumo Genero</a></li>
                    </ul>
                </div>
                    <div id="test-swipe-1" className="col s12"> 
                        <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>


                    <div id="test-swipe-2" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>

                    <div id="test-swipe-3" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome</th>
                                        <th>CPF</th>
                                        <th>Telefone</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>

                    <div id="test-swipe-4" className="col s12"> 
                    <form>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>

                    <div id="test-swipe-5" className="col s12"> 
                    <form>
                            <h2 className='generoConsumoFont'><strong>Masculino</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>

                            <h2 className='generoConsumoFont'><strong>Feminino</strong></h2>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>

                            <h3 className='generoConsumoFont'><strong>Não Informado</strong></h3>
                            <div>
                                <table className='responsive-table centered'>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Nome do Produto/Serviço</th>
                                        <th>Valor do Produto/Serviço</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>Alvin</td>
                                        <td>Eclair</td>
                                        <td>$0.87</td>
                                    </tr>                          
                                    </tbody>
                                </table>
                            </div>
                        </form>
 
                    </div>
                </div>
        </div>
    )
}
}