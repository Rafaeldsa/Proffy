import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/38410234?s=460&v=4"
          alt="Rafael Dantas"
        />
        <div>
          <strong>Rafael Dantas</strong>
          <span>Programador</span>
        </div>
      </header>

      <p>
        Bora codar!
        <br /> <br />
        Tô codando!
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
