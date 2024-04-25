import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import NewtonRaphson from "./pages/NewtonRaphson";
import Ayuda from "./pages/Ayuda";
import Integrantes from "./pages/Integrantes";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <main className="px-12 py-4 grid gap-4 text-lg border-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculadora" element={<NewtonRaphson />} />
            <Route path="/ayuda" element={<Ayuda />} />
            <Route path="/integrantes" element={<Integrantes />}></Route>
          </Routes>
        </main>
      </HashRouter>
    </>
  );
};

export default App;
