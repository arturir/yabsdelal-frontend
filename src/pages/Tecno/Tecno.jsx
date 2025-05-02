import Intro from '../../components/Intro/Intro';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { tecno } from '../../constants/brandIdList';
import { Helmet } from 'react-helmet-async';


function Tecno() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
        <Helmet>
            <title>Ремонт Tecno во Владимире — замена экрана, аккумулятора и других деталей</title>
            <meta name="description" content="Быстрый и качественный ремонт Tecno во Владимире в Ябсделал. Заменим экран, аккумулятор, дисплей и другие детали. Гарантия на работу и запчасти!" />
        </Helmet>   
        <Intro h1={'Ремонт телефонов Tecno во Владимире'} h3={'Наладим Ваш смартфон Техно (Текно) при вас, в день обращения'} 
            p={'Большая часть запчастей уже есть в наличии. Качественный ремонт с гарантией.'} />
        <PhoneInfo  
        header={`Ремонтируем смартфоны Tecno с заботой о качестве и вашем времени`}
        description={`В сервисе ЯбСделал мы быстро и качественно ремонтируем смартфоны Tecno — большинство работ занимает всего несколько часов. Мы профессионально меняем экраны, аккумуляторы, задние крышки и устраняем любые неисправности, используя надёжные комплектующие. Ваш Tecno будет полностью восстановлен уже в день обращения, а на все работы предоставляется гарантия. Доверьте ремонт своего смартфона мастерам ЯбСделал и верните устройство к жизни без лишнего ожидания!`}
        />
        {!orderForm.hasMovedForward && <CalcForm defaultBrandId={tecno} />}
        {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
        <Examples />
        <Reviews />
        <ContactUs />
        <Location />
    </>
    );
}

export default Tecno;
