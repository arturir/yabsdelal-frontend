import VkWidget from "../VkWidget/VkWidget"
export default function Details () {
    return(
        <div className="details">
            <div className="details__wrapper">
                <VkWidget />
                <div className="details__right-column">
                    <h3 className="h3">Реквизиты</h3>
                    <p className="p">ЯбСделал®</p>
                    <p className="p">ИП Галимов Тимур Ильдарович</p>
                    <p className="p">ОГРНИП 83940339393939</p>
                    <p className="p">Россия, Владимирская область, г. Владимир, ул. Дворянская 10</p>
                </div>
            </div>
        </div>
    )
}