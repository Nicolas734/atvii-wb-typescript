import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import '../servicos/cadastroServicos.css'

type props = {
    tema: string
}

export default class CadastroServicos extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light  pink lighten-2 ${this.props.tema}`
        return (
            <div className="containerServ">
                <div className="row ">
                    <form className="col s12 formServ ">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Nome do Serviços</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Descrição do serviço</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Valor do Serviço</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label htmlFor="last_name">Codigo de indentificação do serviço </label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Código de indentificação do produto</label>
                            </div>
                                                       
                        </div>
                        
                        <div className="row">
                            <div className="col s12 center">
                                <button className={estiloBotao} type="submit" name="action">Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}