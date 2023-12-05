//Team 9
/*
  Members: 
    Arturo García
    Andrés López
    Francisco Díaz

  Dependencies:
    "bootstrap": "^5.3.2",
    "react": "^18.2.0",
    "react-bootstrap": "^2.9.0",
    "react-dom": "^18.2.0",
    "react-router-bootstrap": "^0.26.2",
    "react-router-dom": "^6.17.0",
    "react-scripts": "5.0.1",
    "sass": "^1.69.3",
    "axios":"^1.6.0"
*/

import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import "./App.scss"
import Stats from "./views/Statistics";
import AboutUs from "./views/AboutUs";
import HowToHelp from "./views/HowToHelp";
import Login from "./views/Login";
import Register from "./views/Register";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


