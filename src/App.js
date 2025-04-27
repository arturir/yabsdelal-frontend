import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom";
import Burgermenu from './components/Burgermenu/Burgermenu';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Contacts from './pages/Contacts/Contacts';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/PageNoteFound/PageNoteFound';
import Iphones from './pages/Iphones/Iphones';
import Samsung from './pages/Samsung/Samsung';
import Huawei from './pages/Huawei/Huawei';
import Xiaomi from './pages/Xiaomi/Xiaomi';
import Realme from './pages/Realme/Realme';
import Vivo from './pages/Vivo/Vivo';
import Oppo from './pages/Oppo/Oppo';
import Tecno from './pages/Tecno/Tecno';
import Infinix from './pages/Infinix/Infinix';
import Other from './pages/Other/Other';
import FloatingContact from './components/FloatingContact/FloatingContact';
import { useState } from 'react';

export default function App() {

  const [buregerMenuIsOpen, setBuregerMenuIsOpen] = useState(false);

  return (
    <div className="page">
      <Navigation openBurgerMenu={() => setBuregerMenuIsOpen(true)}/>
      {buregerMenuIsOpen && <Burgermenu closeBurgerMenu={()=>setBuregerMenuIsOpen(false)}/>}
      <FloatingContact />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kontakty" element={<Contacts />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="/repair-iphone" element={<Iphones />} /> 
        <Route path="/repair-samsung" element={<Samsung />} /> 
        <Route path="/repair-honor-huawei" element={<Huawei />} />
        <Route path="/repair-xiaomi" element={<Xiaomi />} />
        <Route path="/repair-realme" element={<Realme />} />
        <Route path="/repair-vivo" element={<Vivo />} />
        <Route path="/repair-oppo" element={<Oppo />} />
        <Route path="/repair-tecno" element={<Tecno />} />
        <Route path="/repair-infinix" element={<Infinix />} />
        <Route path="/repair-other" element={<Other />} />
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
      <Footer />
    </div>
  );
}
