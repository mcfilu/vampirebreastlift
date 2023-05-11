import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import VampireBreastLift from './pages/VampireBreastLift'
import VampireFaceLift from './pages/VampireFaceLift'
import OtherTreatments from './pages/OtherTreatments'
import OShot from './pages/OShot'
import PShot from './pages/PShot'
import DrSWFaceLift from './pages/DrSWFaceLift'
import NonSurgicalFaceLift from './pages/NonSurgicalFaceLift'
import NonSurgicalBlepharoplasty from './pages/NonSurgicalBlepharoplasty'
import OffLipolysis from './pages/OffLipolysis'
import Contact from './pages/Contact'



const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vampire-breastlift" element={<VampireBreastLift />} />
        <Route path="/vampire-facelift" element={<VampireFaceLift />} />
        <Route path="/other-treatments" element={<OtherTreatments />}>
          <Route path="/other-treatments/o-shot" element={<OShot />} />
          <Route path="/other-treatments/p-shot" element={<PShot />} />
          <Route path="/other-treatments/dr-sw-face-lift" element={<DrSWFaceLift />} />
          <Route path="/other-treatments/non-surgical-face-lift" element={<NonSurgicalFaceLift />} />
          <Route path="/other-treatments/non-surgical-blepharoplasty" element={<NonSurgicalBlepharoplasty />} />
          <Route path="/other-treatments/off-lipolysis" element={<OffLipolysis />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    
  );
};

export default App
