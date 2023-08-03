import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VampireBreastLift from './pages/VampireBreastLift'
import VampireFaceLift from './pages/VampireFaceLift'
import OtherTreatments from './pages/OtherTreatments'
import Augmentation from './pages/Augmentation'
import Fat from './pages/Fat'
import Reduction from './pages/Reduction'
import Contact from './pages/Contact'
import DrWakil from './pages/DrWakil'
import Book from './pages/Book'
import { HelmetProvider } from 'react-helmet-async';



const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  


  return (
    <>
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<VampireBreastLift />} />
        <Route path="/vampire-breastlift" element={<VampireBreastLift />} />
        <Route path="/vampire-facelift" element={<VampireFaceLift />} />
        <Route path="/other-treatments" element={<OtherTreatments />}></Route>
         
        <Route path="/breast-augmentation-in-london" element={<Augmentation />} />
        <Route path="/breast-fat-enlargement-in-london" element={<Fat />} />
        <Route path="/breast-reduction-in-london" element={<Reduction />} />
        
        <Route path="/dr-wakil" element={<DrWakil />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/book-now" element={<Book/>}/>
      </Routes>
      </HelmetProvider>
    </>
    
  );
};

export default App
