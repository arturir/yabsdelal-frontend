import React from "react";
import Map from "../Map/Map";
import { Link } from "react-router-dom";
import PhoneMessanger from "../PhoneMessenger/PhoneMessenger";

export default function ContactsIntro () {

    return (
        <div className={"constacts-intro"}>
            <div className={"constacts-intro__wrapper"}>
                <div className="constacts-intro__left-column">
                    <h1 className="h1">Контакты</h1>
                    <p className="p">Адрес, номер для связи, мессенджеры, социальные сети и схема прохода</p>
                    <PhoneMessanger />
                    <Link to="mailto:iphone33.ru@yandex.ru"><p className="p">Наша почта: iPhone33.ru@yandex.ru</p></Link>
                    <ul className="constacts-intro__targets">
                        <li className="constacts-intro__target">
                            <h3 className="h3">Адрес</h3>
                            <p className="p">г. Владимир, Дворянская 10, ЦУМ Валентина, 2 этаж</p>
                        </li>
                        <li className="constacts-intro__target">
                            <h3 className="h3">График работы</h3>
                            <p className="p">Будни: c 10 до 19, выходные: с 10 до 17</p>
                        </li>
                    </ul>
                </div>
                <div className="constacts-intro__right-column">
                    <Map width={340} height={280}/>
                </div>
                
            </div>
        </div>
    )
}