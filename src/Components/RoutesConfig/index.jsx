import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router";
import InitialPage from "../../pages/InitialPage/InitialPage";
import Error404 from "../../pages/Error404/Error404"
import About from "../../pages/About/About"
import MuayThai from "../../pages/MuayThai/MuayThai"
import Boxe from "../../pages/Boxe/Boxe"
import Taekwondo from "../../pages/Taekwondo/Taekwondo"
import Funcional from "../../pages/Funcional/Funcional"
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function RoutesConfig() {

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element= { <InitialPage/>} />
      <Route path="/sobre" element= { <About/>} />
      <Route path="/muaythai" element= { <MuayThai/>} />
      <Route path="/boxe" element= { <Boxe/>} />
      <Route path="/taekwondo" element= { <Taekwondo/>} />
      <Route path="/funcional" element= { <Funcional/>} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default RoutesConfig;