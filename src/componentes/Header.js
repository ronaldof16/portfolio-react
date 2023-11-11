import React from "react";
import "./Header.css";

function Header() {
    return (
        <div className="cabecalho container">
            <h1>Ronaldo Fernando</h1>
            <nav>
                <ul className="menu">
                    <li className="menu-item"><a href="#sobre">sobre</a></li>
                    <li className="menu-item"><a href="#habilidades">habilidades</a></li>
                    <li className="menu-item"><a href="#projetos">projetos</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;


