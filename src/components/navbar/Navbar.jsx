import React from "react";
import LinkNav from "./LinkNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="bg-emerald-600 w-full px-5 py-4 flex justify-between items-center">
        <section>
          <Link className="text-white text-2xl font-light" to="/">
            Calculadora Newton-Raphson
          </Link>
        </section>
        <section className="flex gap-4 flex-wrap items-center justify-center">
          <LinkNav to="/calculadora">Calculadora</LinkNav>
          <LinkNav to="/ayuda">Ayuda</LinkNav>
          <LinkNav to="/integrantes">Integrantes</LinkNav>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
