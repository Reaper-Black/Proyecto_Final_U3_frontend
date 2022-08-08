import React from "react";
import "../../styles.css"

const Dir = () => {

    return (
        <nav>
            <div className='options'>
                <a href="/home" className='hover-underline-animation'> Poll </a>
                <a href="/about" className='hover-underline-animation'> About </a>
                <a href="https://www.utags.edu.mx/" className='hover-underline-animation'> Follow-Us </a>
                <a href="/" className='hover-underline-animation'> Sign-Off </a>
            </div>
        </nav>
    );

};

export default Dir;