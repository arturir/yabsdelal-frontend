import Intro from '../../components/Intro/Intro';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { oppo } from '../../constants/brandIdList';
import { Helmet } from 'react-helmet-async';

function Oppo() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
        <Helmet>
            <title>Ремонт Oppo во Владимире — замена экрана, аккумулятора, дисплея и др.</title>
            <meta name="description" content="Быстрый и надёжный ремонт телефонов Oppo во Владимире. Заменим экран, аккумулятор, дисплей и другие детали. Гарантия на все работы и запчасти!" />
        </Helmet> 
        <Intro h1={'Ремонт телефонов Oppo во Владимире'} h3={'Наладим Ваш смартфон Оппо при вас, в день обращения'} 
            p={'Большая часть запчастей уже есть в наличии. Качественный ремонт с гарантией.'} />
        <PhoneInfo 
        header={`Ремонтируем смартфоны Oppo с заботой о качестве и вашем времени`}
        description={`В сервисе ЯбСделал мы выполняем ремонт смартфонов Oppo быстро и аккуратно — большинство работ занимает всего несколько часов. Мы профессионально меняем дисплеи, аккумуляторы, задние крышки и устраняем любые неисправности, используя надёжные запчасти. Ваш Oppo будет полностью восстановлен уже в день обращения, а на все работы предоставляется гарантия. Доверьте свой смартфон мастерам ЯбСделал и получите качественный результат без лишнего ожидания!`}
        />
        {!orderForm.hasMovedForward && <CalcForm defaultBrandId={oppo} />}
        {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
        <Examples />
        <Reviews />
        <ContactUs />
        <Location />
    </>
    );
}

export default Oppo;
