import Intro from '../Intro/Intro';
import Prices from '../Prices/Prices';
import CalcForm from '../CalcForm/CalcForm';
import ContactForm from '../ContactForm/ContactForm';
import Examples from '../Examples/Examples';
import Reviews from '../Reviews/Reviews';
import ContactUs from '../ContactUs/ContactUs';
import Location from '../Location/Location';
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
