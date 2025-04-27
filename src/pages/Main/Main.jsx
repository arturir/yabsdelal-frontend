import Intro from '../../components/Intro/Intro';
import Prices from '../../components/Prices/Prices';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

function Main() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
      <Helmet>
        <title>Ремонт телефонов во Владимире — Сервисный центр ЯбСделал | С гарантией</title>
        <meta name="description" content="Ремонт телефонов во Владимире: замена экрана, дисплея, аккумулятора и других деталей. Работаем с iPhone, Samsung, Xiaomi, Huawei, Realme и другими." />
      </Helmet>
      <Intro h1={'Наладим ваш телефон сегодня, за 3 часа'} h3={'Готово в день обращения'} p={'Заберите готовый телефон в день обращения, запчасти уже есть в наличии'} />
      <Prices />
      {!orderForm.hasMovedForward && <CalcForm />}
      {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
      <Examples />
      <Reviews />
      <ContactUs />
      <Location />
    </>
  );
}

export default Main;
