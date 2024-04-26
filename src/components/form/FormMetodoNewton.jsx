import React, { useState } from "react";
import { string } from "mathjs";
import { verificarExpresion } from "../../libs/math/basicos";
import useNewton from "../../hooks/useNewton";

const FormMetodoNewton = () => {
  const { form, establecerDatos, handleChange } = useNewton();

  return (
    <form className="border-4 border-emerald-300 rounded-lg p-4 flex flex-col gap-2 text-lg bg-gray-300">
      <div className="flex flex-col">
        <label htmlFor="ecuacion">Ingrese la ecuacion problema</label>

        <input
          name="ecuacion"
          onChange={(e) => handleChange(e)}
          className="outline-emerald-300 border-2 p-1 rounded-lg"
          type="text"
          placeholder="x^2 + x - 1"
          value={form.ecuacion}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="puntoDeInicio">
          Valor arbitrario (punto de partida)
        </label>

        <input
          name="puntoDeInicio"
          onChange={(e) => handleChange(e)}
          className="outline-emerald-300 border-2 p-1 rounded-lg"
          type="number"
          placeholder="1"
          value={form.puntoDeInicio}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="margenDeError">Margen de error %</label>

        <input
          name="margenDeError"
          onChange={(e) => handleChange(e)}
          className="outline-emerald-300 border-2 p-1 rounded-lg"
          type="number"
          placeholder="10"
          value={form.margenDeError}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          establecerDatos();
        }}
        className="bg-emerald-400 p-2 rounded-md text-white "
        type="submit"
      >
        Resolver
      </button>
    </form>
  );
};

/*
const FormMetodoNewton = ({ hacerIteraciones, setError }) => {
  const [form, setForm] = useState({
    ecuacion: "",
    valorInicial: "",
    error: "",
  });

  const convertirDatos = ({ ecuacion, error, valorInicial }) => {
    if (typeof error === "string") {
      error = Number.parseFloat(error);
    }

    if (typeof valorInicial === "string") {
      valorInicial = Number.parseFloat(valorInicial);
    }

    return {
      ecuacion,
      error,
      valorInicial,
    };
  };

  return (
    <form className="border-4 border-emerald-300 rounded-lg p-4 flex flex-col gap-2 text-lg bg-gray-300">
      <div className="flex flex-col">
        <label htmlFor="ecuacion">Ingrese la ecuacion problema</label>

        <input
          name="ecuacion"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          className="outline-emerald-300 border-2 p-1 rounded-lg"
          type="text"
          placeholder="x^2 + x - 1"
          value={form.ecuacion}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="valorInicial">
          Valor arbitrario (punto de partida)
        </label>

        <input
          name="valorInicial"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          className="outline-emerald-300 border-2 p-1 rounded-lg"
          type="number"
          placeholder="1"
          value={form.valorInicial}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="Escriba la ecuacion">Margen de error %</label>

        <input
          name="error"
          onChange={(e) =>
            setForm({ ...form, [e.target.name]: e.target.value })
          }
          className="outline-emerald-300 border-2 p-1 rounded-lg"
          type="number"
          placeholder="10"
          value={form.error}
        />
      </div>

      <button
        onClick={(e) => {
          e.preventDefault();
          setError("");

          if (!verificarExpresion(form.ecuacion)) {
            console.log("E");
            setError("La expresion esta mal escrita");
            return;
          }

          const data = convertirDatos(form);

          hacerIteraciones(data);
        }}
        className="bg-emerald-400 p-2 rounded-md text-white "
        type="submit"
      >
        Resolver
      </button>
    </form>
  );
};
*/

export default FormMetodoNewton;
