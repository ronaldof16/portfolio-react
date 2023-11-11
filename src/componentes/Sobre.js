import React from 'react';
import imgSobre from '../img/foto-perfil.jpg';
import "./Sobre.css";

function Sobre () {
  return (
    <div id='sobre' className='container'>
        <h2>sobre</h2>
            <div className="sobre">
                <div className="sobre-foto">
                   <img src={imgSobre} alt='Foto de perfil'/> 
                </div>
                <div className="sobre-texto">
                    <h3>Desenvolvedor Front End</h3>
                    <p>Olá, meu nome é Ronaldo Fernando e sou um desenvolvedor web 
                    apaixonado por tecnologia. Sou movido por desafios e estou sempre 
                    buscando evoluir profissionalmente.
                    </p>
                    <a className="link-github" href="https://www.github.com/ronaldof16"><i className="fa-brands fa-github icone-github"></i>Github</a>
                    <a className="link-linkedin" href="https://www.linkedin.com/in/ronaldof16"><i className="fa-brands fa-linkedin icone-linkedin"></i>Linkedin</a>
                </div>
            </div>
    </div>
  )
}

export default Sobre;
