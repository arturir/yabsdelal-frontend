import ContactsIntro from '../../components/ContactsIntro/ContactsIntro';
import Scheme from '../../components/Scheme/Scheme';
import Details from '../../components/Details/Details';
import { Helmet } from 'react-helmet-async';

export default function App() {

  return (
    <>
      <Helmet>
        <title>Контакты сервисного центра ЯбСделал во Владимире — как нас найти</title>
        <meta name="description" content="Свяжитесь с сервисным центром ЯбСделал во Владимире: адрес, телефон, время работы, форма обратной связи. Мы всегда готовы помочь!" />
      </Helmet>
      <ContactsIntro />
      <Scheme />
      <Details />
    </>
  );
}
