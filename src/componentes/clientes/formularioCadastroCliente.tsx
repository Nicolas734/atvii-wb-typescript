import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'
import "../clientes/cadastroCliente.css"

type props = {
    tema: string
}

export default class FormularioCadastroCliente extends Component<props> {
    
    render() {
        let estiloBotao = `btn waves-effect waves-light pink lighten-1 ${this.props.tema}`
        
        return (
            <div className="container">
                <div className="row ">
                    <form className="col s12 formCli">
                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="first_name" type="text" className="validate" />
                                <label htmlFor="first_name">Nome</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="nomeSocial" type="text" className="validate" />
                                <label htmlFor="nomeSocial">Nome social</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="genero" type="text" className="validate" />
                                <label htmlFor="genero">Gênero</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="telefone" type="text" className="validate" />
                                <label htmlFor="telefone">(DDD) Telefone</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="cpf" type="text" className="validate" />
                                <label htmlFor="cpf">CPF</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="dataCPF" type="text" className="validate" />
                                <label htmlFor="dataCPF">Data de emissão CPF</label>
                            </div>                           
                        </div>

                        <div className="row">
                            <div className="input-field col s6 ">
                                <input id="RG" type="text" className="validate" />
                                <label htmlFor="RG">RG</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="dataRG" type="text" className="validate" />
                                <label htmlFor="dataRG">Data de emissão RG</label>
                            </div>                           
                        </div>
                        
                        <div className="row">
                            <div className="col s12 center ">
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