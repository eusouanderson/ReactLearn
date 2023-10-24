import React from 'react';
import styles from './Header.module.css'; 

function Header() {
  return (
    
    <header className={styles.futuristic_header}>
      <div className={styles.header_content}>
        <h1>M M S</h1>
        <nav>
          <ul>
            <li><a href=" ">Página Inicial</a></li>
            <li><a href=" ">Recursos</a></li>
            <li><a href=" ">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
    
  );
}

export default Header;
