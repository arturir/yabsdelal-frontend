import { Link } from "react-router-dom";
import Map from "../Map/Map";
import location1 from "../../images/location/ourPlace1.jpg";
import location2 from "../../images/location/ourPlace2.jpg";
import location3 from "../../images/location/ourPlace3.jpg";

export default function Location () {

    return (
        <div className="location">
            <div className="location__wrapper">
                <div className="location__text">
                    <h3 className="h3">Мы находимся в самом центре города</h3>
                    <p className="p">В двух минутах от остановки “Золотые ворота”</p>
                </div>
                <div className="location__column-left">
                    <img className="location__img-scheme" src={location1} />
                    <img className="location__img-scheme" src={location2} />
                    <img className="location__img-scheme" src={location3} />
                    <div className="location__contacts">

                        <div className="location__contacts-left">
                            <p className="p location__adress">Дворянская 10, 2 этаж, центральный вход ЦУМ Валентина</p>
                            <Link to="/kontakty" className="location__link p">Схема прохода и карта</Link>
                        </div>
                        <div className="location__contacts-right">
                            <div className="location__hours">
                                <p className="p">Будни: c 10 до 19</p>
                                <p className="p">Выходные: c 10 до 17</p>
                            </div>
                        </div>

                        <p className="p location__adress location__adress--mobile">Дворянская 10, 2 этаж, центральный вход ЦУМ Валентина</p>
                        <div className="location__hours location__hours--mobile">
                            <p className="p">Будни: c 10 до 19</p>
                            <p className="p">Выходные: c 10 до 17</p>
                        </div>
                        <Link to="/kontakty" className="location__link p location__link--mobile">Схема прохода и карта</Link>
                    </div>
                </div>
                <div className="location__column-right" >
                    <Map width="405px" height="230px"/>
                </div>
            </div>
        </div>
    )
}