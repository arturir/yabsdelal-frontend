import Intro from '../../components/Intro/Intro';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { iphone } from '../../constants/brandIdList';
import { Helmet } from 'react-helmet';

function Iphones() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
        <Helmet>
            <title>Ремонт iPhone во Владимире — замена экрана, аккумулятора и других деталей</title>
            <meta name="description" content="Ремонт iPhone во Владимире: замена экрана, дисплея, аккумулятора и других деталей. Быстро, качественно, с гарантией и оригинальными комплектующими." />
        </Helmet>
        <Intro h1={'Ремонт iPhone во Владимире'} h3={'Наладим Ваш Айфон при вас, в день обращения'} 
            p={'Запчасти уже есть в наличии. Качественный ремонт с гарантией.'} />
        <PhoneInfo 
        header={`Ремонтируем iPhone с заботой о качестве и вашем времени`}
        description={`В «ЯбСделал» большая часть ремонтов iPhone занимает не больше одного часа. Быстро и качественно меняем дисплеи, экраны, аккумуляторы, задние крышки и устраняем другие неисправности. Вам не придётся надолго расставаться с телефоном — пока вы пьёте кофе, ваш айфон будет как новый! Приходите — работаем с любовью к технике и вниманием к деталям.`}
        />
        {!orderForm.hasMovedForward && <CalcForm defaultBrandId={iphone} />}
        {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
        <Examples />
        <Reviews />
        <ContactUs />
        <Location />
    </>
    );
}

export default Iphones;
