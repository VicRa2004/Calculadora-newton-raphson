import React from "react";
import CardList from "../components/integrantes/CardList";

const Integrantes = () => {
  return (
    <>
      <h1 className="text-2xl font-medium">Integrantes</h1>

      <section className=" flex flex-col gap-4">
        <CardList nombre="Victor Raul Garcia Garcia" correo="victor06ra2004@gmail.com">
          Programador principal y jefe de equipo
        </CardList>
        <CardList nombre="Marcos Cardenas Magaña" correo="marcosmagana417@gmail.com" >
          Supervisor y diseñador principal
        </CardList>
        <CardList nombre="Mauricio Martinez Torres" correo="torresmtnz456@gmail.com" >
          Pogramador secundario y tester
        </CardList>
        <CardList nombre="Shirley Joshira Moreno Lopez" correo="shirleymoreno120@gmail.com">
          Administradora
        </CardList>
        <CardList nombre="Gerardo Segura Navarro" correo="navarrogerardo1409@gmail.com">
          Tester y administrador de datos
        </CardList>
      </section>
    </>
  );
};

export default Integrantes;
