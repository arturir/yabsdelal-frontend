import './App.css';
import Navigation from '../navigation/navigation';
import { CurrentAppContext } from "../../contexts/CurrentAppContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import Burgermenu from '../Burgermenu/Burgermenu';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Contacts from '../Contacts/Contacts';
import AboutUs from '../AboutUs/AboutUs';
import PageNotFound from '../PageNoteFound/PageNoteFound';
import { useState } from 'react';


function App() {

  const [buregerMenuIsOpen, setBuregerMenuIsOpen] = useState(false);

  return (

    <CurrentAppContext.Provider value={""}>
    <div className="page">
      <Navigation openBurgerMenu={()=>setBuregerMenuIsOpen(true)}/>
      {buregerMenuIsOpen && <Burgermenu closeBurgerMenu={()=>setBuregerMenuIsOpen(false)}/>}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kontakty" element={<Contacts />} />
        <Route path="/about" element={<AboutUs />} /> 
        <Route path="*" element={<PageNotFound />} /> 
      </Routes>


      <Footer />
      
    </div>
    </CurrentAppContext.Provider>
  );
}

export default App;
