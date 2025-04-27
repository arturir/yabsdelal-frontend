import React from "react";
import Map from "../Map/Map";

export default function Intro ({h1, h3, p}) {

    return (
        <div className="intro">
            <div className="intro__wrapper">
                <div className="intro__left-column">
                    <h1 className="h1">{h1}</h1>
                    <h3 className="h3 intro__h3">{h3}</h3>
                    <p className="p">{p}</p>
                    <div className="intro__strip"> </div>
                    <ul className="intro__targets">
                        <div className="intro__row-targets">
                            <li className="intro__target">
                                <p className="p">До 180 дней гарантии</p>
                                <p className="p-small">Заберите телефон в день обращения, запчасти уже есть в наличии</p>
                            </li>
                            <li className="intro__target">
                                <p className="p">Мастер с опытом</p>
                                <p className="p-small">За 5 лет мы наладили более 5000 устройств</p>
                            </li>
                        </div>
                        <div className="intro__row-targets">
                            <li className="intro__target">
                                <p className="p">99 из 100 довольных клиентов</p>
                                <p className="p-small">Нам оставили более 300 положительных отзывов на независимых площадках</p>

                            </li>
                            <li className="intro__target">
                                <p className="p">Узнайте стоимость прямо на сайте</p>
                                <p className="p-small">Рассчитайте стоимость ремонта с помощью калькулятора на нашем сайте</p>
                            </li>
                        </div>
                    </ul>
                </div>
                <div className="intro__right-column">
                    <Map width={423} height={350}/>
                </div>
                
            </div>
        </div>
    )
}