import React, { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { resolverEcuacion } from "../../libs/math/basicos";
import { abs } from "mathjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const GraficaDeLaFuncion = ({ ecuacion }) => {
  const [valorLineaX, setValorLineaX] = useState([]);
  const [valorLineaY, setValorLineaY] = useState([]);

  const [form, setForm] = useState({
    rangoXL: "",
    rangoXR: "",
  });

  const [rangoXL, setRangoXL] = useState(-2);
  const [rangoXR, setRangoXR] = useState(2);

  const [valorMinY, setvalorMinY] = useState(5);

  //console.log(ecuacion);

  useEffect(() => {
    calcularGrafica();
  }, [ecuacion, rangoXL, rangoXR]);

  function calcularGrafica() {
    let valoresY = [];
    let valoresX = [];
    let contador = 0;
    let valorMaximoX = 0;

    for (let i = rangoXL; i <= rangoXR; i += 0.5) {
      let valor = resolverEcuacion(ecuacion, i);
      valoresY[contador] = valor;
      valoresX[contador] = i;

      if (abs(valor) > valorMaximoX) {
        valorMaximoX = abs(valor);
      }
      console.log("x:" + valoresX[contador] + "  y:" + valoresY[contador]);
      contador++;
    }
    //console.log(valoresY);
    //console.log(valoresX);

    // Agrgadolos al estado
    setValorLineaX(valoresX);
    setValorLineaY(valoresY);
    //console.log(valorMaximoX);
    setvalorMinY(valorMaximoX);
  }

  //console.log(ecuacion);

  let otraData = {
    labels: valorLineaX,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: ecuacion,
        data: valorLineaY,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(50, 182, 86)",
        backgroundColor: "rgba(0, 0, 0, 0)",
        pointRadius: 5,
        pointBorderColor: "rgba(41, 145, 69)",
        pointBackgroundColor: "rgba(59, 161, 87)",
      },
    ],
  };

  let options = {
    scales: {
      y: {
        min: -valorMinY,
        ticks: { color: "rgb(0, 0, 0)" },
      },
      x: {
        ticks: { color: "rgb(0, 0, 0)" },
      },
    },
  };

  return (
    <div>
      <h2 className="font-medium text-xl">Gráfica de la función: {ecuacion}</h2>

      {valorLineaX && valorLineaY && <Line data={otraData} options={options} />}

      <section className="flex flex-col gap-3 items-center w-full">
        <form
          className="border-4 border-emerald-300 rounded-lg p-4 flex flex-col gap-2 text-lg bg-gray-300"
          action=""
        >
          <h2 className="text-xl font-medium">
            Modificar valores de la Grafica
          </h2>

          <section className="flex flex-col">
            <label htmlFor="">Valor inicial de X</label>
            <input
              className="outline-emerald-300 border-2 p-1 rounded-lg"
              type="number"
              name="rangoXL"
              value={form.rangoXL}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              placeholder="Por defecto -2"
            />
          </section>

          <section className="flex flex-col">
            <label htmlFor="">Valor final de X</label>
            <input
              className="outline-emerald-300 border-2 p-1 rounded-lg"
              type="number"
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              name="rangoXR"
              placeholder="Por defecto 2"
            />
          </section>

          <button
            className="bg-emerald-400 p-2 rounded-md text-white "
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (
                typeof form.rangoXL == "string" &&
                typeof form.rangoXR == "string"
              ) {
                setRangoXL(parseFloat(form.rangoXL));
                setRangoXR(parseFloat(form.rangoXR));
                //console.log("Echo");
              }
            }}
          >
            Actualizar Grafica
          </button>
        </form>
      </section>
    </div>
  );
};

export default GraficaDeLaFuncion;
