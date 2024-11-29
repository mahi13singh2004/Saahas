import React from "react";
import Navbar from "./components/Navbar";
import Home from './pages/Home.jsx'
import Mission from './pages/Mission.jsx'
import Testimony from './pages/Testimony.jsx'
import Contact from './pages/Contact.jsx'
import Team from './pages/Team.jsx'

import { Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/mission" element={<Mission/>}/>
        <Route path="/testimony" element={<Testimony/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/privacy" element={<PrivacyPolicy/>}/>
      </Routes>
    </>
  );
};

export default App;
