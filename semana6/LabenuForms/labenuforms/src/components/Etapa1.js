import React from 'react'

class Etapa1 extends React.Component {
    render(){
        return (
            <div>
                <h3>ETAPA 1 - DADOS GERAIS</h3>
                <div>
                    <p>1.Qual o seu nome?</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>2.Qual sua idade?</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>3.Qual seu email?</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>4.Qual sua escolaidade</p>
                    <select>
                        <option>Ensino médio imcompleto</option>
                        <option>Ensino médio completo</option>
                        <option>Ensino superior imcompleto</option>
                        <option>Ensino superior completo</option>
                    </select>
                </div>
                <button>Próxima etapa</button>
            </div>
        );
    }}
    export default Etapa1;