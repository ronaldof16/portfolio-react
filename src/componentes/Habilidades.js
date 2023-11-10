import React from 'react';
import imgHtml from '../img/html2.png';
import imgCss from '../img/css10.png';
import imgJS from '../img/js2.png';
import "./Habilidades.css";

function Habilidades() {
  return (
    <div id='habilidades'>
        <h2>Habilidades</h2>
            <div className="habilidades-fotos">
                <div className="habilidades-fotos-itens">
                    <p>html</p>
                    <img src={imgHtml} alt="Logo HTML" />
                </div>
                <div className="habilidades-fotos-itens">
                    <p>css</p>
                    <img src={imgCss} alt="Logo CSS" />
                </div>
                <div className="habilidades-fotos-itens">
                    <p>javascript</p>
                    <img src={imgJS} alt="Logo JavaScript" />
                </div>
            </div>
    </div>
  )
}

export default Habilidades;