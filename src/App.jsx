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



const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vampire-breastlift" element={<VampireBreastLift />} />
        <Route path="/vampire-facelift" element={<VampireFaceLift />} />
        <Route path="/other-treatments" element={<OtherTreatments />}></Route>
         
        <Route path="/breast-augmentation" element={<Augmentation />} />
        <Route path="/breast-fat-enlargement" element={<Fat />} />
        <Route path="/breast-reduction" element={<Reduction />} />
        
        <Route path="/dr-wakil" element={<DrWakil />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    
  );
};

export default App
