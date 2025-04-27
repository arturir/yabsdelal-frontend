import Intro from '../../components/Intro/Intro';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { huawei } from '../../constants/brandIdList';
import { Helmet } from 'react-helmet';

function Huawei() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
        <Helmet>
            <title>Ремонт Huawei и Honor во Владимире — замена экрана, аккумулятора и др.</title>
            <meta name="description" content="Ремонт телефонов Honor и Huawei во Владимире: замена экрана, акб, дисплея и др. неисправностей. Быстро, качественно, с гарантией. Оригинальные  запчасти." />
        </Helmet>
        <Intro h1={'Ремонт телефонов Huawei, Honor во Владимире'} h3={'Наладим Ваш смартфон Хуавей, Хонор при вас, в день обращения'} 
            p={'Большая часть запчастей уже есть в наличии. Качественный ремонт с гарантией.'} />
        <PhoneInfo 
        header={`Ремонтируем смартфоны Huawei, Honor с заботой о качестве и вашем времени`}
        description={`В сервисе «ЯбСделал» мы быстро восстанавливаем смартфоны Huawei и Honor — большинство ремонтов занимает всего несколько часов. Меняем дисплеи, аккумуляторы, задние крышки и устраняем любые неисправности, используя проверенные запчасти. Ваш смартфон будет готов к использованию уже в день обращения — качественно, надёжно и с гарантией. Доверьте ремонт Huawei и Honor опытным мастерам и получите отличный результат без лишнего ожидания!`}
        />
        {!orderForm.hasMovedForward && <CalcForm defaultBrandId={huawei} />}
        {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
        <Examples />
        <Reviews />
        <ContactUs />
        <Location />
    </>
    );
}

export default Huawei;
