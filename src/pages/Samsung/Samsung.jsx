import Intro from '../../components/Intro/Intro';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { samsung } from '../../constants/brandIdList';
import { Helmet } from 'react-helmet-async';

function Samsung() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
        <Helmet>
            <title>Ремонт телефонов Samsung во Владимире - замена экрана, аккумулятора и др.</title>
            <meta name="description" content="Быстрый и надёжный ремонт смартфонов Samsung во Владимире. Заменим экран, аккумулятор, дисплей и другие детали. Гарантия на все виды работ!" />
        </Helmet>  
        <Intro h1={'Ремонт телефонов Samsung во Владимире'} h3={'Наладим Ваш смартфон Самсунг при вас, в день обращения'} 
            p={'Большая часть запчастей уже есть в наличии. Качественный ремонт с гарантией.'} />
        <PhoneInfo 
        header={`Ремонтируем смартфоны Samsung с заботой о качестве и вашем времени`}
        description={`В «ЯбСделал» большинство ремонтов смартфонов Samsung мы выполняем всего за несколько часов. Мы оперативно устраняем неисправности, меняем дисплеи, аккумуляторы и задние крышки, используя качественные комплектующие. Ваш телефон вернётся к жизни уже в день обращения — быстро, аккуратно и с гарантией. Доверьте свой Samsung нашим мастерам и сэкономьте время и нервы!`}
        />
        {!orderForm.hasMovedForward && <CalcForm defaultBrandId={samsung} />}
        {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
        <Examples />
        <Reviews />
        <ContactUs />
        <Location />
    </>
    );
}

export default Samsung;
