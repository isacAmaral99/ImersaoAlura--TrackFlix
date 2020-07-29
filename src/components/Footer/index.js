import React from 'react';
import { FooterBase } from './styles';
import Logo from'../../assets/img/Logo.png';
import '../Footer/';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className=" Logo" src={Logo} alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura || B.I Tecnology
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
