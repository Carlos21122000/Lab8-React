import React from 'react';
import './Header.css';
class Header extends React.Component {
    render(){
       return (
           <header>
                <div className="titulo">Juego Memoria</div>
                <div>
                    <button className="boton-reiniciar">
                        Reiniciar
                    </button>
                </div>
                <div className="titulo">
                    Intentos:
                </div>   
           </header>  
        );
    }
}
export default Header;