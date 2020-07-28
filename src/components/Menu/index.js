import React from 'react';
import Logo from'../../assets/img/Logo.png'
import './Menu.css';
import Button from '../Button';
// import ButtonLink from '../components/ButtonLink/index';

function Menu(){

    return(
       <nav className="Menu">
           <a href="/">

            <img  className="Logo" src={Logo} alt="TrackFlix logo"/>

           </a>
           {/* ele coloca como botao porem para funcionar como uma tag a */}
           <Button as ="a"className="ButtonLink"href="/">
                Novo Video
           </Button>
       </nav>
    );

}

export default Menu;