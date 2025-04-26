import { Link } from "react-router-dom";
import telegramColorLogo from "../../images/icons-messengers/telegram-color-logo.svg";
import whatsappColorLogo from "../../images/icons-messengers/whatsapp-color-logo.svg";
import vkColorLogo from "../../images/icons-messengers/vk-color-logo.svg";

export default function PhoneMessanger () {
    return (
        <div className="phone-messenger__phone-wrapper">
            <Link to="tel:+79300304430" target="_blank"><p className="h3 phone-messenger__phone">+7 (930) 030 44 30</p></Link> 
            <Link to="https://t.me/vladimiriphone" target="_blank">
                <img src={telegramColorLogo} alt="telegram-logo" className="phone-messenger__logo-img"/>
            </Link>
            <Link to="https://wa.me/79300304430" target="_blank">
                <img src={whatsappColorLogo} alt="whatsapp-logo" className="phone-messenger__logo-img"/>
            </Link>
            <Link to="https://vk.me/remontiphonevladimir" target="_blank">
                <img src={vkColorLogo} alt="vk-logo" className="phone-messenger__logo-img"/>
            </Link>
        </div>
    )
}