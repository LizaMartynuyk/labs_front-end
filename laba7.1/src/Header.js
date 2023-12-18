import React from 'react';
import { Changes, ChangesQuerySelector } from './script';

function Header() {
  return (
    <div>
      <h2>Мартинюк Ліза Миколаївна</h2>
      <p>Дата та місце народження: 15 червня, 2004 року, місто Житомир</p>
      <p>Освіта: "Гуманітарна гімназія №1", м. Житомир; НТУУ "КПІ", м.Київ</p>
      <p>Хоббі:</p>
      <ul type="circle">
        <li id="myElement" onClick={Changes}>Читання книг</li>
        <li className="myElement2" onClick={ChangesQuerySelector}>Танці</li>
        <li>Малювання та дизайн</li>
      </ul>
    </div>
  );
}

export default Header;
