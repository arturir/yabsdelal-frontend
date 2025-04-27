import { Link, NavLink } from "react-router-dom";
import Logo from '../Logo/Logo';
export default function Footer () {

    const year = new Date().getFullYear();

    return (
        <div className="footer">
            <div className="footer__wrapper">
                <Logo className="logo--footer"/>
                <div className="footer__nav-wrapper">
                    <ul className="footer__nav-list">
                        <li className="footer__nav-item">
                            <NavLink to="/" className="p">Главная</NavLink>
                        </li>
                        <li className="footer__nav-item">
                            <NavLink to="/about" className="p">О нас</NavLink>                                            
                        </li>
                        <li className="footer__nav-item">
                            <Link to="https://vk.com/remontiphonevladimir" className="p" target="_blank">Мы во Вконтакте </Link>                                            
                        </li>
                    </ul>
                    <ul className="footer__nav-list">
                        <li className="footer__nav-item">
                            <NavLink to="/kontakty" className="p">Контакты</NavLink>                        
                        </li>
                        <li className="footer__nav-item">
                            <NavLink to="/kontakty" className="p">Реквизиты</NavLink>                        
                        </li>
                    </ul>
                    <div className="footer__contacts">
                        <div className="footer__phone">
                            <p className="p">Контактный телефон:</p>
                            <p className="p"><Link to="tel:+79300304430" >+7 (930) 030 44 30</Link></p>
                        </div>
                        <div className="footer__hours">
                            <p className="p">Будни: c 10 до 19</p>
                            <p className="p">Выходные: c 10 до 17</p>
                        </div>
                    </div>
                </div>
            </div>

            <p className="p-small footer__other-info">
                Товарные знаки используется с целью описания товара, в отношении которых производятся
                услуги по ремонту сервисным центром.
                Услуги оказывается в неавторизованном сервисном центре «ЯбСделал», не связанными с компаниями 
                Правообладателями товарных знаков и/или с ее официальными представителями в отношении товаров, 
                которые уже были введены в гражданский оборот в смысле статьи 1487 ГК РФ 
                Время ремонта, срок гарантии могут меняться в зависимости от модели устройства и 
                сложности проводимых работ.
                Не является публичной офертой.
            </p>
            <div className="footer__date-wrapper">
                <p className="p">2019-{year} ЯбСделал</p>
            </div>
        </div>
    )
}