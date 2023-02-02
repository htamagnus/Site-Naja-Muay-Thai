import { BrowserRouter, Route, Routes } from "react-router-dom";
import './styles/stylesGlobals.scss';
import InitialPage from "./pages/InitialPage/InitialPage";
import Error404 from "../src/pages/Error404/Error404"
import About from "../src/pages/About/About"
import MuayThai from "../src/pages/MuayThai/MuayThai"
import Boxe from "../src/pages/Boxe/Boxe"
import Taekwondo from "../src/pages/Taekwondo/Taekwondo"
import Funcional from "../src/pages/Funcional/Funcional"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element= { <InitialPage/>} />
          <Route path="/sobre" element= { <About/>} />
          <Route path="/muaythai" element= { <MuayThai/>} />
          <Route path="/boxe" element= { <Boxe/>} />
          <Route path="/taekwondo" element= { <Taekwondo/>} />
          <Route path="/funcional" element= { <Funcional/>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
