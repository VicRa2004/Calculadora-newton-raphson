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
import useGrafica from "../../hooks/useGrafica";

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
  const { handleChange, dataForm, grafica, valorMinY, actualizarGrafica } =
    useGrafica({
      ecuacion,
    });

  let otraData = {
    labels: grafica.valoresX,
    datasets: [
      // Cada una de las líneas del gráfico
      {
        label: ecuacion,
        data: grafica.valoresY,
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

      {grafica.valoresX && <Line data={otraData} options={options} />}

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
              value={dataForm.rangoXL}
              onChange={(e) => handleChange(e)}
              placeholder="Por defecto -2"
            />
          </section>

          <section className="flex flex-col">
            <label htmlFor="">Valor final de X</label>
            <input
              className="outline-emerald-300 border-2 p-1 rounded-lg"
              type="number"
              value={dataForm.rangoXR}
              onChange={(e) => handleChange(e)}
              name="rangoXR"
              placeholder="Por defecto 2"
            />
          </section>

          <button
            className="bg-emerald-400 p-2 rounded-md text-white "
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              console.log("Actualizando");
              actualizarGrafica();
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
