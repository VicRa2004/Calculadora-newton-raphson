import { useContext, useState } from "react";
import NewtonContext from "../context/Newton/NewtonContext";

const useNewton = () => {
  const { setFormNewton, initialState, iteraciones, formMetodo } =
    useContext(NewtonContext);

  const [form, setForm] = useState(initialState.formMetodo);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const establecerDatos = () => {
    setFormNewton(form);
  };

  return {
    form,
    establecerDatos,
    handleChange,
    iteraciones,
    dataForm: formMetodo,
  };
};

export default useNewton;
