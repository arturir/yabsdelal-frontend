import Intro from '../../components/Intro/Intro';
import PhoneInfo from '../../components/PhoneInfo/PhoneInfo';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';
import { infinix } from '../../constants/brandIdList';
import { Helmet } from 'react-helmet';

function Infinix() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
        <Helmet>
            <title>Ремонт Infinix во Владимире — замена экрана, аккумулятора и других деталей</title>
            <meta name="description" content="Ремонт телефонов Infinix во Владимире: замена экрана, аккумулятора, дисплея и других деталей. Быстро и качественно, с гарантией и оригинальными запчастями." />
        </Helmet>
        <Intro h1={'Ремонт телефонов Infinix во Владимире'} h3={'Наладим Ваш смартфон Инфиникс при вас, в день обращения'} 
            p={'Большая часть запчастей уже есть в наличии. Качественный ремонт с гарантией.'} />
        <PhoneInfo  
        header={`Ремонтируем смартфоны Infinix с заботой о качестве и вашем времени`}
        description={`В сервисе ЯбСделал мы быстро и аккуратно ремонтируем смартфоны Infinix — большинство работ занимает всего несколько часов. Мы профессионально заменяем экраны, аккумуляторы, задние крышки и устраняем любые неисправности, используя качественные комплектующие. Ваш Infinix будет полностью восстановлен уже в день обращения, а на все работы мы предоставляем гарантию. Доверьте ремонт своего смартфона специалистам ЯбСделал и получите отличный результат без лишнего ожидания!`}
        />
        {!orderForm.hasMovedForward && <CalcForm defaultBrandId={infinix} />}
        {orderForm.hasMovedForward && <ContactForm type="order" header="Узнать точную стоимость"/>}
        <Examples />
        <Reviews />
        <ContactUs />
        <Location />
    </>
    );
}

export default Infinix;
