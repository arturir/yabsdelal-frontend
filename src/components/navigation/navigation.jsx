import { Link, NavLink } from "react-router-dom";
import vk from "../../images/icons-messengers/vk.svg";
import telegram from "../../images/icons-messengers/telegram.svg";
import { servicesList } from "../../constants/servicesList";



export default function Navigation ({openBurgerMenu}) {

    return (
        <>
            <div className={"menu__area"}></div>
            <nav className={"menu"}>
                <div className="menu__wrapper">
                    <div className="menu__address-wrapper">
                        <Link to="/" className={"logo"} >ЯбСделал</Link>
                        <div className="menu__mobile-contats">
                            <p className="menu__mobile-address">Дворянская 10 (ЦУМ, центр. вход), 2 этаж</p>
                            <NavLink to="/kontakty" className={"menu__mobile-scheme"}>Схема прохода и контакты</NavLink>
                        </div>
                        <Link to="tel:+79300304430" className={"menu__number"} >+7 (930) 030 44 30</Link>
                        <p className="menu__address">Дворянская 10 (ЦУМ, центр. вход), 2 этаж</p>
                        <NavLink to="/kontakty" className={"menu__scheme"} >Схема прохода</NavLink>
                    </div>
                    <div className="menu__links-wrapper">
                        <div className="menu__our-services-wrapper">
                            <p className="menu__our-services">Наши услуги</p>
                            <ul className="menu__dropdown">
                                {servicesList.map((item) => (
                                  <li key={item.href}>
                                    <Link to={item.href}>
                                      {item.label}
                                    </Link>
                                  </li>
                                ))}
                            </ul>
                        </div>
                        <NavLink to="/about" className={"menu__link"} >О нас</NavLink>
                        <NavLink to="/kontakty" className={"menu__link"} >Контакты</NavLink>
                    </div>
                    <div className="menu__wrapper-messengers">
                        <Link to="https://t.me/vladimiriphone" target="_blank" >
                            <img src={telegram} className="menu__messenger" alt="Ссылка на диалог в Telegram" />
                        </Link>
                        <Link to="https://vk.me/remontiphonevladimir" target="_blank" >
                            <img src={vk} className="menu__messenger" alt="Ссылка на диалог в ВК"/>
                        </Link>
                        <div className="menu__burger" onClick={openBurgerMenu}></div>
                    </div>
                            
                </div>
            </nav>
        </>
    )
}