import React from 'react';
import "./Projetos.css";

function Projetos() {
  return (
    <div id="projetos">
        <h2>projetos</h2>
        <div className="projetos">
            <div className="projetos-item">
                <a href="https://ronaldof16.github.io/Calculadora-IMC/">Calculadora IMC</a>                   
                <p>Neste projeto foi desenvolvido uma calculadora para obter o 
                índice de massa corporal e informações sobre as faixas de obesidade.</p>            
            </div>
            <div className="projetos-item">
                <a href="https://ronaldof16.github.io/gerador-de-senha/">Gerador de senha</a>
                <p>Neste projeto o usuário define a quantidade de caracteres que a 
                senha deve ter e depois é só clicar no botão gerar senha que o programa irá retornar 
                uma nova senha.</p>          
            </div>
            <div className="projetos-item">
                <a href="https://ronaldof16.github.io/Calculadora/">Calculadora</a>                
                <p>Projeto desenvolvido durante o módulo de javascript da Formação
                Acelerada em Programação da Softex PE. Consiste numa calculadora onde o 
                usuário poderá fazer operações de soma, subtração, multiplicação e divisão.</p>
            </div>
        </div>
    </div>
  )
}

export default Projetos