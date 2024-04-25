import React from "react";

const Home = () => {
  return (
    <>
      <section className="flex flex-col gap-4 text-lg">
        <h2 className="text-2xl font-medium">Que es el Metodo de Newton Raphson</h2>
        <p>
          El método de Newton-Raphson, también conocido como el método de
          Newton, es un algoritmo utilizado para encontrar las aproximaciones de
          las raíces de una función real. Es especialmente útil cuando se
          necesita encontrar soluciones numéricas para ecuaciones que no se
          pueden resolver fácilmente de manera algebraica.
        </p>

        <p>
          El método de Newton-Raphson se basa en la idea de que una buena
          aproximación de la raíz de una función{" "}
          <span className="font-medium">f(x)</span> puede ser encontrada si se
          comienza con una estimación inicial y se itera usando la fórmula:
        </p>

        <span className="font-medium italic">Xn + 1 = Xn - (f(Xn) / f'(Xn))</span>

        <ul className="flex flex-col gap-3">
          Donde:
          <li>
            <span className="font-medium">Xn + 1</span> es la próxima
            aproximación de la raíz.
          </li>
          <li>
            <span className="font-medium">Xn</span> es la aproximación actual de
            la raíz
          </li>
          <li>
            <span className="font-medium">f(Xn)</span> es el valor de la función
            en Xn
          </li>
          <li>
            <span className="font-medium">f'(Xn)</span> es la derivada de la
            función en Xn
          </li>
        </ul>

        <div className="">
          <p>
            El proceso se repite iterativamente hasta que se alcance una
            aproximación aceptable o hasta que se cumpla algún criterio de
            parada, como un número máximo de iteraciones o una tolerancia
            predefinida para el error.
          </p>

          <img
            src="https://procesosnumericos2015.weebly.com/uploads/4/6/8/1/46814569/1575573_orig.png"
            alt=""
          />
        </div>

        <p>
          El método de Newton-Raphson puede converger rápidamente hacia la raíz
          de una función si se elige una buena estimación inicial y si la
          función es suave y tiene una derivada bien comportada en la vecindad
          de la raíz. Sin embargo, puede ser inestable o divergir si la
          estimación inicial está lejos de la raíz o si la función tiene
          singularidades o comportamientos oscilatorios en la región de interés.
        </p>

        <br />

        <h3 className="text-xl font-medium">
          Aplicaciones reales del Metodo de Newton-Raphson
        </h3>
        <p>
          El método de Newton-Raphson se puede aplicar en una amplia variedad de
          contextos donde se necesite encontrar las raíces de una función.
          Algunas de las áreas donde se utiliza comúnmente incluyen:
        </p>
        <ul className="flex flex-col gap-3">
          <li><span className="font-medium">Matemáticas y análisis numérico:  </span>Se utiliza para encontrar soluciones numéricas de ecuaciones no lineales que no tienen soluciones algebraicas explícitas.</li>
          <li><span className="font-medium">Ingeniería: </span>En ingeniería, se aplica para resolver problemas de diseño, análisis estructural, dinámica de fluidos, circuitos eléctricos, control de sistemas, entre otros.</li>
          <li><span className="font-medium">Ciencias físicas: </span>Se utiliza en física para resolver ecuaciones que modelan fenómenos naturales en diversas áreas como mecánica, electromagnetismo, termodinámica, entre otros.</li>
          <li><span className="font-medium">Economía y finanzas: </span>En análisis financiero, se utiliza para calcular valores de equilibrio, tasas de interés y otros problemas relacionados con las finanzas.</li>
          <li><span className="font-medium">Computación gráfica y procesamiento de imágenes: </span>En estos campos, se aplica para resolver problemas relacionados con la detección de bordes, la segmentación de imágenes y la alineación de imágenes.</li>
          <li><span className="font-medium">Optimización: </span>El método de Newton-Raphson también se utiliza en problemas de optimización para encontrar mínimos y máximos de funciones.</li>
        </ul>
      </section>
    </>
  );
};

export default Home;
