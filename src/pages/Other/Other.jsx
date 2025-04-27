
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';

import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { Helmet } from 'react-helmet';

function Other() {

    return (
    <>
        <Helmet>
            <title>Ремонт телефонов других моделей во Владимире — экраны, акб, дисплеи и др.</title>
            <meta name="description" content="Ремонтируем телефоны всех марок во Владимире. Заменим экраны, аккумуляторы, дисплеи и устраним другие неисправности. Гарантия на работу и запчасти!" />
        </Helmet> 
        <PhoneInfo  
        header={`Не нашли свой смартфон?`}
        description={`В сервисе ЯбСделал мы ремонтируем не только популярные модели, но и множество других смартфонов различных брендов. Для уточнения всех деталей вы можете связаться с нами по телефону, в Telegram, ВКонтакте, других популярных мессенджерах или оставить заявку на обратный звонок.`}
        />
        <ContactUs />
        <Examples />
        <Reviews />
        <Location />
    </>
    );
}

export default Other;
