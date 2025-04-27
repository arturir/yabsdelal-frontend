import Intro from '../../components/Intro/Intro';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { vivo } from '../../constants/brandIdList';
import { Helmet } from 'react-helmet';

function Vivo() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
        <Helmet>
            <title>Ремонт Vivo во Владимире — замена экрана и аккумулятора | ЯбСделал</title>
            <meta name="description" content="Быстрый и профессиональный ремонт телефонов Vivo во Владимире. Меняем экраны, аккумуляторы, дисплеи, устраняем неисправности. Гарантия и качество!" />
        </Helmet>  

        <Intro h1={'Ремонт телефонов Vivo во Владимире'} h3={'Наладим Ваш смартфон Виво при вас, в день обращения'} 
            p={'Большая часть запчастей уже есть в наличии. Качественный ремонт с гарантией.'} />
        <PhoneInfo 
        header={`Ремонтируем смартфоны Vivo с заботой о качестве и вашем времени`}
        description={`В сервисе ЯбСделал мы выполняем ремонт смартфонов Vivo быстро и аккуратно — большинство работ занимает всего несколько часов. Мы профессионально меняем дисплеи, аккумуляторы, задние крышки и устраняем любые неисправности, используя надёжные запчасти. Ваш Vivo будет полностью восстановлен уже в день обращения, а на все работы предоставляется гарантия. Доверьте свой смартфон мастерам ЯбСделал и получите качественный результат без лишнего ожидания!`}
        />
        {!orderForm.hasMovedForward && <CalcForm defaultBrandId={vivo} />}
        {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
        <Examples />
        <Reviews />
        <ContactUs />
        <Location />
    </>
    );
}

export default Vivo;
