import Navigation from './components/Navigation/Navigation';
import { Routes, Route } from "react-router-dom";
import Burgermenu from './components/Burgermenu/Burgermenu';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Contacts from './pages/Contacts/Contacts';
import AboutUs from './pages/AboutUs/AboutUs';
import PageNotFound from './pages/PageNoteFound/PageNoteFound';
import { useState } from 'react';

export default function App() {

  const [buregerMenuIsOpen, setBuregerMenuIsOpen] = useState(false);

  return (
    <div className="page">
      <Navigation openBurgerMenu={() => setBuregerMenuIsOpen(true)}/>
      {buregerMenuIsOpen && <Burgermenu closeBurgerMenu={()=>setBuregerMenuIsOpen(false)}/>}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kontakty" element={<Contacts />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>
      <Footer />
    </div>
  );
}
