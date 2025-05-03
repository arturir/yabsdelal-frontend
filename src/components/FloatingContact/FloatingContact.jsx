import { Link } from "react-router-dom";
import telegram from "../../images/icons-messengers/telegram-white.svg";
import phone from "../../images/icons8-phone-96.png";

export default function FloatingContact() {

    return (
        <div className="floating-contact">
            <div className="floating-contact__wrapper">
                <Link to="https://t.me/vladimiriphone" target="_blank"className="floating-contact__link-telegram"><img src={telegram} className="floating-contact__telegram" alt="telegram logo"/></Link>
                <Link to="tel:+79300304430" className="floating-contact__link-phone"><img src={phone} className="floating-contact__phone-logo" alt="telegram logo"/><p className="floating-contact__phone">Позвонить</p></Link>
            </div>
        </div>
    )

}