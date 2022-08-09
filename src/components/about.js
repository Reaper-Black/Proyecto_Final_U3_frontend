import React from "react";
import "../styles.css"
import Footer from "./footer";
import Dir from "./navbar";

const Me = () => {

    return (
        <div> < Dir />
            <div className='about'>
                <div>
                    <img className="image-a" src="./img/me.jpeg" alt="perfil"></img>
                    <img className="image-n" src="./img/nao.jpg" alt="perfil"></img>
                </div>
                <div className='about-me'>
                    <div>Universidad Tecnológica de Aguascalientes</div>
                    <div>Ingeniería en Desarrollo y Gestión de Software</div>
                    <div>Diseño Web Profesional</div>
                    <div>Matricula: 161000</div>
                    <div> Jesús Andrés Chacón Hernández </div>
                    <div>Matricula: 2000031</div>
                    <div> Naomi Itzel Ramos Rangel </div>
                    <div>Matricula: 200004</div>
                    <div> Onyx Ricardo Rios Valencia </div>
                    <div>Matricula: 190935</div>
                    <div> Maria Guadalupe Legorreta Millan </div>
                    <div>Matricula: 171615</div>
                    <div> Edith Ruiz Hernandez </div>
                </div>
                    <div>
                        <img className="image-o" src="./img/onyx.jpg" alt="perfil"></img>
                        <img className="image-m" src="./img/mary.jpg" alt="perfil"></img>
                        <img className="image-e" src="./img/edith.jpg" alt="perfil"></img>
                    </div>
            </div>
            <Footer />
        </div>
    );
};
export default Me;