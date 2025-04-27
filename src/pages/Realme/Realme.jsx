import Intro from '../../components/Intro/Intro';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { realme } from '../../constants/brandIdList';
import { Helmet } from 'react-helmet';

function Realme() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
        <Helmet>
            <title>Ремонт Realme во Владимире — замена экрана, аккумулятора, дисплея и др.</title>
            <meta name="description" content="Быстрый и качественный ремонт телефонов Realme во Владимире. Заменим экран, аккумулятор, дисплей и другие детали. Гарантия на работу и комплектующие!" />
        </Helmet>  
        <Intro h1={'Ремонт телефонов Realme во Владимире'} h3={'Наладим Ваш смартфон Реалми при вас, в день обращения'} 
            p={'Большая часть запчастей уже есть в наличии. Качественный ремонт с гарантией.'} />
        <PhoneInfo 
        header={`Ремонтируем смартфоны Realme с заботой о качестве и вашем времени`}
        description={`В сервисе «ЯбСделал» мы быстро и качественно ремонтируем смартфоны Realme — большинство работ занимает всего несколько часов. Меняем экраны, аккумуляторы, задние крышки и устраняем любые неисправности с использованием проверенных запчастей. Ваш Realme будет восстановлен уже в день обращения — аккуратно, надёжно и с гарантией. Доверьте ремонт профессионалам и наслаждайтесь исправным смартфоном без лишних ожиданий!`}
        />
        {!orderForm.hasMovedForward && <CalcForm defaultBrandId={realme} />}
        {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
        <Examples />
        <Reviews />
        <ContactUs />
        <Location />
    </>
    );
}

export default Realme;
