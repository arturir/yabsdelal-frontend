import { Link } from "react-router-dom";
import { useState} from "react";

export default function TabsContainer () {

    const [activeTab, setActiveTab] = useState("garanty");

    return (
        <div className="tabs-container">
            {activeTab==="garanty" && (<div className="tabs-container__content">
              <h3 className="h3 tabs-container__h3">Наша гарантия</h3>
              <p className="p">
              Наша гарантия - ваша защита.  Предоставляем гарантию на ремонт. 
              Выдаем все необходимые документы. Акт приема, гарантийный талон и
              акт выдачи, а также чек.
              </p>
              <ul className="tabs-container__list">
                <li className="tabs-container__list-item p">На аккумуляторы iPhone original - 6 месяцев</li>
                <li className="tabs-container__list-item p">На оригинальные сервисные запчасти – 3 месяца</li>
                <li className="tabs-container__list-item p">На аккумуляторы - 3 месяца</li>
                <li className="tabs-container__list-item p">Все остальное - от 1 месяца</li>
              </ul>
            </div>)}
            {activeTab==="term" && (<div className="tabs-container__content">
              <h3 className="h3 tabs-container__h3">Сроки исполнения</h3>
              <p className="p">
              Мы ценим ваше время и стараемся выполнять ремонт максимально быстро.
              Уточнённое время всегда озвучивается при приёме устройства. 
              Мы придерживаемся сроков и сообщаем, если что-то меняется.
              </p>
              <ul className="tabs-container__list">
                <li className="tabs-container__list-item p">Замена аккумулятора iPhone - 1-2 часа</li>
                <li className="tabs-container__list-item p">Замена дисплея iPhone - 1-2 часа</li>
                <li className="tabs-container__list-item p">Замена задней крышки iPhone - до 4 часов</li>
                <li className="tabs-container__list-item p">Замена дисплея Android -  2-4 часа</li>
                <li className="tabs-container__list-item p">Остальной модульный ремонт - 2-3 часа</li>
                <li className="tabs-container__list-item p">Компонентный ремонт (пайка, восстановление цепей) - от 1 дня</li>
              </ul>
            </div>)}
            {activeTab==="search" && (<div className="tabs-container__content">
              <h3 className="h3 tabs-container__h3">Не нашли своё устройство?</h3>
              <p className="p">
                Если вы не нашли своё устройство в списке — не беда. 
                Мы работаем с большим количеством моделей и поможем вам даже в нестандартных случаях.
                Ответим быстро, подскажем по срокам и сориентируем по цене.
                Просто напишите нам в удобный мессенджер — уточним возможность и стоимость ремонта.
              </p>
              <ul className="tabs-container__list">
                <li className="tabs-container__list-item p">WhatsApp / Telegram: <Link to="tel:+79300304430" className="tabs-container__href">+7 (930) 030 44 30</Link></li>
                <li className="tabs-container__list-item p">ВКонтакте: <Link to="https://vk.com/remontiphonevladimir" className="tabs-container__href">vk.com/remontiphonevladimir</Link></li>
              </ul>
            </div>)}
            <ul className="tabs-container__nav">
              <li className={`tabs-container__tab ${activeTab === "garanty" ? "tabs-container__tab_active" : ""}`}onClick={()=>setActiveTab("garanty")} >Про гарантию →</li>
              <li className={`tabs-container__tab ${activeTab === "term" ? "tabs-container__tab_active" : ""}`} onClick={()=>setActiveTab("term")}>Сроки исполнения →</li>
              <li className={`tabs-container__tab ${activeTab === "search" ? "tabs-container__tab_active" : ""}`} onClick={()=>setActiveTab("search")}>Нет вашего устройства →</li>
            </ul>
        </div>
    )
}