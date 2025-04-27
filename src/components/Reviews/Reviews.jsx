import {Link} from "react-router-dom";
import stars from "../../images/stars.svg";
import google from "../../images/icons-resources/logo-google-maps.svg";
import yandex from "../../images/icons-resources/logo-yandex-maps.svg";
import twoGis from "../../images/icons-resources/logo-2gis.svg";

export default function Reviews () {

    return (
        <div className="reviews">
            <div className="reviews__wrapper">
                <div className="reviews__top">
                    <h3 className="h3">Нас рекомендуют</h3>
                    <img src={stars} className="reviews__stars"/>
                </div>
                <p className="p">
                    95% положительных отзывов. Нас рекомендуют друзьям, знакомым и не только. 
                    Больше 300 положительных отзывов на независимых площадках.
                </p>
                <div className="reviews__resources">
                    <Link to="https://maps.app.goo.gl/YYvpQavfLFYs795L8"className="reviews__link-resource" target="_blank" rel="noopener noreferrer">
                        <img src={google} className="reviews__link-image"/>
                        <p className="h3 reviews__grade">5.0/5</p>
                    </Link>
                    <Link to="https://yandex.ru/profile/19637641765?lang=ru"className="reviews__link-resource" target="_blank" rel="noopener noreferrer">
                        <img src={yandex} className="reviews__link-image"/>
                        <p className="h3 reviews__grade">5.0/5</p>
                    </Link>
                    <Link to="https://go.2gis.com/EJMTt"className="reviews__link-resource" target="_blank" rel="noopener noreferrer">
                        <img src={twoGis} className="reviews__link-image"/>
                        <p className="h3 reviews__grade">4.5/5</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}