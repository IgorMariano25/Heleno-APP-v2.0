import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// import App from "./App";
import Home from "./pages/home/"
import Portfolios from "./pages/portfolios/"
import Alunos from "./pages/alunos/"
import Contato from "./pages/contato/"
import Sobre from "./pages/sobre/"
import Graduacao from "./pages/graduacao/"
import MBA from "./pages/mba/"
import Pos from "./pages/pos/"

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sobre from "./pages/Sobre";
import InfoAluno from "./pages/InfoAluno";
import InfoPortifolio from "./pages/InfoPortifolio";

//para rodar o pipeline

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={ process.env.REACT_APP_BASE_NAME || ""}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portfolios" element={<Portfolios />} />
        <Route path="portfolios/:id" element={<InfoPortifolio/>} />
        <Route path="alunos" element={<Alunos />} />
        <Route path="alunos/:id" element={<InfoAluno />} />
        <Route path="contato" element={<Contato />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="graduacao" element={<Graduacao />} />
        <Route path="mba" element={<MBA />} />
        <Route path="pos" element={<Pos />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
