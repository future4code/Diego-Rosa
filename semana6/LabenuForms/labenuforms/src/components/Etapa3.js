import React from 'react'

class Etapa1 extends React.Component {
    render(){
        return (
            <div>
                <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
                <div>
                    <p>5. Por que você não terminou um curso de graduação?</p>
                    <input type="text"></input>
                </div>
                <div>
                    <p>6.Você fez algum curso complementar?</p>
                    <select>
                        <option>Nenhum</option>
                        <option>Curso técnico</option>
                        <option>Curso de inglês</option>
                    </select>
                    <button>Pŕoxima etapa</button>
                </div>
            </div>
        )
}}