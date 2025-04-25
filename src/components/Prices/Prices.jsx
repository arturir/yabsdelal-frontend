import { Link } from "react-router-dom";
import { servicesList } from "../../constants/servicesList";


export default function Prices () {

    return (
        <div className="prices">
            <div className="prices__wrapper">
                <h3 className="h3 prices__h3">Мы ремонтируем телефоны</h3>
                <p className="p prices__p">Выберите марку телефона, чтобы рассчитать стоимость ремонта</p>
                <ul className="prices__lists">
                    {servicesList.map((item, i) => (
                            <li className="prices__item-lists" key={item.href}>
                                <Link to={item.href}>
                                    {item.label}{(i+1===servicesList.length) && " →"}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    )
}