import React from "react";
import logoReact from '../assets/img/logoReact.png';

const Navegation = () => {
    return (
        <nav className="bg-zinc-900 text-white h-16 text-left">
            <ul className="p-4 ">
                <img src={logoReact} alt="" srcSet="" className="w-5 h-5 float-left mt-1"/>
                <strong className="ml-5">React JS - API Kevin Jefrey Daza Acosta</strong>
            </ul>
        </nav>
    );
};

export default Navegation;
