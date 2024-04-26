import { useContext, useEffect, useState } from "react";
import { redondearMultiplo } from "../libs/redondear";
import { abs } from "mathjs";
import { resolverEcuacion } from "../libs/math/basicos";
import NewtonContext from "../context/Newton/NewtonContext";

const useGrafica = ({ ecuacion }) => {
  const { grafica, setGrafica, formMetodo } = useContext(NewtonContext);

  const [form, setForm] = useState({
    rangoXL: "",
    rangoXR: "",
  });

  useEffect(() => {
    actualizarGrafica();
  }, [formMetodo]);

  const [valorMinY, setvalorMinY] = useState(5);

  function calcularGrafica({ rangoXL, rangoXR }) {
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
      //console.log("x:" + valoresX[contador] + "  y:" + valoresY[contador]);
      contador++;
    }

    return {
      valoresX,
      valoresY,
      valorMinimoY: redondearMultiplo(valorMaximoX),
    };
  }

  const actualizarGrafica = () => {
    let rangoXL = 0;
    let rangoXR = 0;

    if (form.rangoXL !== "" && form.rangoXR !== "") {
      if (typeof form.rangoXL == "string" && typeof form.rangoXR == "string") {
        rangoXL = parseFloat(form.rangoXL);
        rangoXR = parseFloat(form.rangoXR);
      }
    }

    if (rangoXL === 0 && rangoXR === 0) {
      rangoXL = -2;
      rangoXR = 2;
    }

    const { valorMinimoY, valoresX, valoresY } = calcularGrafica({
      rangoXL,
      rangoXR,
    });
    setvalorMinY(valorMinimoY);

    setGrafica({ valoresX, valoresY });
  };

  useEffect(() => {
    actualizarGrafica();
  }, []);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    handleChange,
    dataForm: form,
    valorMinY,
    grafica,
    actualizarGrafica,
  };
};

export default useGrafica;
