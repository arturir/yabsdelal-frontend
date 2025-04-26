import Intro from '../../components/Intro/Intro';
import Prices from '../../components/Prices/Prices';
import CalcForm from '../../components/CalcForm/CalcForm';
import ContactForm from '../../components/ContactForm/ContactForm';
import Examples from '../../components/Examples/Examples';
import Reviews from '../../components/Reviews/Reviews';
import ContactUs from '../../components/ContactUs/ContactUs';
import Location from '../../components/Location/Location';
import { useSelector } from 'react-redux';

function App() {

  const orderForm = useSelector(state => state.orderForm);

  return (
    <>
      <Intro />
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

export default App;
