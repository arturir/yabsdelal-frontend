import Intro from '../../components/Intro/Intro';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { xiaomi } from '../../constants/brandIdList';
import { Helmet } from 'react-helmet';

function Xiaomi () {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
        <Helmet>
            <title>Ремонт Xiaomi, Redmi, Poco во Владимире - замена экрана, дисплея, акб и др.</title>
            <meta name="description" content="Быстрый и надёжный ремонт Xiaomi, Redmi и Poco во Владимире. Заменяем экраны, дисплеи, аккумуляторы, крышки, устраняем поломки. Гарантия на все работы!" />
        </Helmet>    
        <Intro h1={'Ремонт телефонов Xiaomi, Redmi и Poco во Владимире'} h3={'Наладим Ваш смартфон Сяоми, Редми и Поко при вас, в день обращения'} 
            p={'Большая часть запчастей уже есть в наличии. Качественный ремонт с гарантией.'} />
        <PhoneInfo 
        header={`Ремонтируем смартфоны Xiaomi, Redmi и Poco с заботой о качестве и вашем времени`}
        description={`В сервисе «ЯбСделал» мы выполняем ремонт смартфонов Xiaomi, Redmi и Poco всего за несколько часов. Быстро меняем дисплеи, аккумуляторы, задние крышки и устраняем любые другие поломки, используя качественные комплектующие. Ваш телефон снова будет радовать вас уже в день обращения — мы работаем аккуратно и даём гарантию на все работы. Доверьте ремонт профессионалам и получите отличный результат без лишнего ожидания!`}
        />
        {!orderForm.hasMovedForward && <CalcForm defaultBrandId={xiaomi} />}
        {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
        <Examples />
        <Reviews />
        <ContactUs />
        <Location />
    </>
    );
}

export default Xiaomi;
