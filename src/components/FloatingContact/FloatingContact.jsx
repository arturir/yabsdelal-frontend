import { Link } from "react-router-dom";
import telegram from "../../images/icons-messengers/telegram-white.svg";

export default function FloatingContact() {

    return (
        <div className="floating-contact">
            <div className="floating-contact__wrapper">
                <Link to="https://t.me/vladimiriphone" target="_blank"className="floating-contact__link-telegram"><img src={telegram} className="floating-contact__telegram" alt="telegram logo"/></Link>
                <Link to="tel:+79300304430" className="floating-contact__link-phone"><p className="floating-contact__phone">✆ Позвонить</p></Link>
            </div>
        </div>
    )

}