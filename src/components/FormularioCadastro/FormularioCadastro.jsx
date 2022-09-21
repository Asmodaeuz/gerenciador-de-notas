import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {
    constructor(props) {
        super(props)
        this.titulo = ""
        this.texto = ""
    }

    _handleMudancaTitulo(evento) {
        this.titulo = evento.target.value
    }

    
    travaTextarea(evento) {
        if (evento.target.value === "") {
            evento.target.classList.add('textarea-vazio')
        }
        else {
            evento.target.classList.remove('textarea-vazio')
        }
    }

    _handleMudancaTexto(evento) {
        this.texto = evento.target.value
        this.travaTextarea(evento)
    }

    resetaFormulario() {
        document.querySelector('.form-cadastro').reset()
    }

    _criarNota(evento) {
        evento.preventDefault()
        evento.stopPropagation()
        this.resetaFormulario()
        this.props.criarNota(this.titulo, this.texto)
    }

    render() {
        return (
            <form className="form-cadastro "
            onSubmit={this._criarNota.bind(this)}>
                <input
                    type="text"
                    placeholder="Título"
                    className="form-cadastro_input"
                    onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea
                    rows={15}
                    placeholder="Escreva sua nota..."
                    className="form-cadastro_input textarea-vazio"
                    onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className="form-cadastro_input form-cadastro_submit">
                    Criar Nota
                </button>
            </form>
        );
    }
}

export default FormularioCadastro;