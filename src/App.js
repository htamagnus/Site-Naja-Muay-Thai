import { BrowserRouter, } from "react-router-dom";
import RoutesConfig from "./Components/RoutesConfig/index";
import './styles/stylesGlobals.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <RoutesConfig />
      </BrowserRouter>
    </div>
  );
}

export default App;
