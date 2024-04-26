import React from "react";
import FormMetodoNewton from "../components/form/FormMetodoNewton";
import Iteracion from "../components/ecuacion/Iteracion";
import GraficaDeLaFuncion from "../components/grafica/GraficaDeLaFuncion";
import useNewton from "../hooks/useNewton";
import useErrors from "../hooks/useErrors";

const NewtonRaphson = () => {
  const { iteraciones, dataForm } = useNewton();

  const { messageError } = useErrors();

  return (
    <>
      <section className="flex flex-col gap-3 items-center w-full">
        <h2 className="text-2xl font-medium">Calculadora de Newton-Raphson</h2>
        <FormMetodoNewton />
      </section>

      {messageError && (
        <h1 className="text-center text-xl font-medium text-red-600">
          {messageError}
        </h1>
      )}

      <GraficaDeLaFuncion ecuacion={dataForm.ecuacion || "0"} />

      <div className="flex flex-col gap-3">
        {(iteraciones || error) &&
          iteraciones?.map((data, i) => (
            <Iteracion key={i} data={{ ...data, dataForm, i }} />
          ))}
      </div>
    </>
  );
};

/*

const NewtonRaphson = () => {
  const [iteraciones, setIteraciones] = useState([]);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState("");
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    if (error) {
      setFormData({});
      setIteraciones([]);
    }
  }, [error]);

  const hacerIteraciones = (form) => {
    setFormData(form);
    const it = metodoNewtonRaphson({
      ecuacionProblema: form.ecuacion,
      err: form.error,
      puntoDeInicio: form.valorInicial,
    });

    if (it != null) {
      setError("");
      setIteraciones(it);
    } else {
      setIteraciones([]);
      setError("A ocurrido un error");
    }
  };

  return (
    <>
      <section className="flex flex-col gap-3 items-center w-full">
        <h2 className="text-2xl font-medium">Calculadora de Newton-Raphson</h2>
        <FormMetodoNewton
          hacerIteraciones={hacerIteraciones}
          setError={setError}
        />
      </section>

      {error && (
        <h2 className="text-center text-xl font-medium text-red-600">
          {error}
        </h2>
      )}

      {errorState ||
        (formData.ecuacion && (
          <GraficaDeLaFuncion ecuacion={formData.ecuacion} />
        ))}

      <div className="flex flex-col gap-3">
        {(iteraciones || error) &&
          iteraciones.map((data, i) => (
            <Iteracion
              ecuacionProblema={formData.ecuacion}
              i={i}
              valorInicial={formData.valorInicial}
              key={i}
              error={data.err}
              x0={data.x0}
              x1={data.x1}
              fx={data.fx}
              derivadaFx={data.derivadaFx}
            />
          ))}
      </div>
    </>
  );
};

*/

export default NewtonRaphson;
