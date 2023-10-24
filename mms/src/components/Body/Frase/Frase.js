import React from 'react';
import style from './Frase.module.css';
import DesktopDevelopment from './DesktopDevelopment';
import MobileDevelopment from './MobileDevelopment';

function Frase() {
  return (
    <div className={style.futuristic_frase}>
      <h1 className={style.title}>M M S - Desenvolvimento de Software</h1>
      <div className={style.subsubtitle}>
        <h2>Quem Somos:</h2>
      </div>
      <p className={style.description}>
        M M S é uma empresa especializada em desenvolvimento de software,
        com expertise em criação de aplicativos inovadores para dispositivos
        móveis e computadores. Nossa equipe apaixonada e experiente se dedica
        a transformar suas ideias em soluções digitais de alta qualidade,
        sob medida para suas necessidades. Trabalhamos em estreita colaboração
        com nossos clientes para garantir que suas visões se tornem realidade,
        utilizando as tecnologias mais recentes e as melhores práticas de desenvolvimento
        de software, com 15 anos de experiência em desenvolvimento de software.
        <DesktopDevelopment />
        <MobileDevelopment /> 
      </p>
    </div>
  );
}

export default Frase;
