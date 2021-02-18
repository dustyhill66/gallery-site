import React from 'react';
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="menu__inner">
        <li className="menu__item">
          <NavLink 
            className="menu__link"
            to="/"
            exact
          >
            Главная
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink 
            className="menu__link"
            to="/gallery"
          >
            Галерея
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink 
            className="menu__link"
            to="/technology"
          >
            Технология
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink 
            className="menu__link"
            to="/about"
          >
            Об авторе
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink 
            className="menu__link"
            to="/expo"
          >
            Выставки
          </NavLink>
        </li>
        <li className="menu__item">
          <NavLink 
            className="menu__link"
            to="/contacts"
          >
            Контакты
          </NavLink>
        </li>    
      </ul>
    </nav>
  )
}