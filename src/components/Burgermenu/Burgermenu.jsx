import React from "react";
import { Link, NavLink } from "react-router-dom";
import { servicesList } from "../../constants/servicesList";

export default function Burgermenu ({closeBurgerMenu}) {

  return (
    <div className="burgermenu">
      <div className="burgermenu__wrapper"> 
        <div className="burgermenu__header">
          <Link to="/" className={"logo"}>ЯбСделал</Link>
          <div className="burgermenu__close" onClick={closeBurgerMenu}></div>
        </div>
        <div className="burgermenu__wrapper-main-links">
          <NavLink to="/" className={"burgermenu__link"} onClick={closeBurgerMenu}>Главная</NavLink>
          <p>/</p>
          <NavLink to="/about" className={"burgermenu__link"} onClick={closeBurgerMenu}>О нас</NavLink>
          <p>/</p>
          <NavLink to="/kontakty" className={"burgermenu__link"} onClick={closeBurgerMenu}>Контакты</NavLink>
        </div>
        <ul className="burgermenu__wrapper-other-links">
          {servicesList.map((item) => (
            <li key={item.href} > 
              <NavLink to={item.href} className={"burgermenu__link"} onClick={closeBurgerMenu}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}