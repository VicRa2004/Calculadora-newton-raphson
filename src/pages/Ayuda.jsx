import React from "react";
import Info from "../components/ayuda/Info";

const Ayuda = () => {
  return (
    <>
      <h1 className="text-2xl font-medium">Ayuda</h1>
      <p>
        Aqui tendras una pequeña guia sobre el funcionamiento de las aplicacion.
      </p>

      <h3 className="text-xl font-medium">Calculadora de Newton-Raphson</h3>
      <p>
        La calculadora funciona por medio de tres inputs para colocar la
        informacion. Cada input recibe tres parametros.
      </p>
      <h2 className="text-xl font-medium">Input: Ecuacion problema</h2>
      <p>
        El primer input recibe la ecuacion problema, este recibe la ecuacion en
        formato texto, con la siguiente sintaxis:
      </p>
      <Info>(x^2) - x + 5</Info>
      <Info>pi * 12x</Info>
      <Info>(x / e) - log(10)</Info>
      <p>
        Si quieres obtener mas informacion sobre la sintaxis y los diferentes
        tipos de funciones, puedes ir a la pagina de math js(la libreria ocupada
        por el proyecto para leer estos datos) o{" "}
        <a
          target="_blank"
          className="font-medium text-emerald-600"
          href="https://mathjs.org/docs/expressions/syntax.html"
        >
          precionar aqui
        </a>
        .
      </p>
      <h2 className="text-xl font-medium">
        Input: Valor arbitrario (punto de partida)
      </h2>

      <p>
        En este input se colocara el punto en el que se desea iniciar las
        iteraciones.
      </p>

      <h2 className="text-xl font-medium">Input: Margen de error</h2>

      <p>
        Aqui se pondra el porcentaje en el que se desea acabar con las
        iteraciones.
      </p>

      <h2 className="text-xl font-medium">Errores de la aplicacion</h2>

      <p>
        Por el momento la web aun no cuenta con un sistema para detectar el
        error en concreto por el cual falla la calculadora, ya que es
        funcionalidad para el futuro.
      </p>

      <p>Los errores que puede dar la web pueden ser ocacionados por:</p>

      <ul className="flex flex-col gap-1">
        <li>
          <span className="font-light">Sintaxis mal escrita</span>
        </li>
        <li>
          <span className="font-light">
            Ecuaciones que provoque una division entre cero
          </span>
        </li>
        <li>
          <span className="font-light">Error al escribir mal una funcion</span>
        </li>
      </ul>

      <p>Recuerde que pueden haber mas errores que no esten documentados</p>
    </>
  );
};

export default Ayuda;
