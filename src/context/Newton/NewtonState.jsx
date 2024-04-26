import { useEffect, useReducer } from "react";
import NewtonContext from "./NewtonContext";
import NewtonReducer from "./NewtonReducer";
import {
  SET_ERRORS,
  SET_FORM_GRAFICA,
  SET_FORM_METODO,
  SET_GRAFICA,
  SET_ITERACIONES,
} from "../types";
import { verificarExpresion } from "../../libs/math/basicos";
import { metodoNewtonRaphson } from "../../libs/metodoNewton";

const NewtonState = ({ children }) => {
  const initialState = {
    formMetodo: {
      ecuacion: "",
      margenDeError: "",
      puntoDeInicio: "",
    },
    formGrafica: {
      valorInicialX: -2,
      valorFinalX: 2,
    },
    grafica: {
      valoresX: [],
      valoresY: [],
    },
    iteraciones: [],
    errors: "",
  };

  const [state, dispatch] = useReducer(NewtonReducer, initialState);

  useEffect(() => {
    if (state.formMetodo.ecuacion) {
      setIteraciones();
      setErrors("");
    }
  }, [state.formMetodo]);

  useEffect(() => {
    if (state.errors) {
      resetIteraciones();
    }
  }, [state.errors]);

  // Metodos para poder modificar el estado

  const setErrors = ({ errorMessage }) => {
    dispatch({ type: SET_ERRORS, payload: errorMessage });
  };

  const setFormNewton = ({ ecuacion, margenDeError, puntoDeInicio }) => {
    try {
      if (typeof margenDeError == "string") {
        margenDeError = parseFloat(margenDeError);
      }

      if (typeof puntoDeInicio == "string") {
        puntoDeInicio = parseFloat(puntoDeInicio);
      }
    } catch (error) {
      setErrors({ errorMessage: "Error al combertir los tipos de datos" });
      return;
    }

    if (!verificarExpresion(ecuacion)) {
      //resetIteraciones(); // No se poque solo me permit eresetar esto solo aqui
      setErrors({ errorMessage: "La ecuacion tiene errores de sintaxis" });
      return;
    }

    dispatch({
      type: SET_FORM_METODO,
      payload: { ecuacion, margenDeError, puntoDeInicio },
    });
  };

  const setFormGrafica = ({ valorInicialX, valorFinalX }) => {
    try {
      if (typeof valorInicialX == "string") {
        valorInicialX = parseFloat(valorInicialX);
      }

      if (typeof valorFinalX == "string") {
        valorFinalX = parseFloat(valorFinalX);
      }
    } catch (error) {
      setErrors({
        errorMessage:
          "Formulario Grafica: Error al combertir los tipos de datos",
      });
      return;
    }

    dispatch({
      type: SET_FORM_GRAFICA,
      payload: { valorInicialX, valorFinalX },
    });
  };

  const resetIteraciones = () => {
    dispatch({
      type: SET_ITERACIONES,
      payload: initialState.iteraciones,
    });
  };

  const setIteraciones = () => {
    try {
      const { formMetodo } = state;

      const it = metodoNewtonRaphson({
        ecuacionProblema: formMetodo.ecuacion,
        err: formMetodo.margenDeError,
        puntoDeInicio: formMetodo.puntoDeInicio,
      });

      if (!it) {
        setErrors({ errorMessage: "Algo salio mal en las iteraciones" });
        return;
      }

      dispatch({
        type: SET_ITERACIONES,
        payload: [...it],
      });
    } catch (error) {
      setErrors({ errorMessage: "Algo salio mal en las iteraciones." });
    }
  };

  const setGrafica = ({ valoresX, valoresY }) => {
    try {
      dispatch({
        type: SET_GRAFICA,
        payload: { valoresX, valoresY },
      });
    } catch (error) {
      setErrors("Error al cargar la grafica");
    }
  };

  return (
    <NewtonContext.Provider
      value={{
        initialState,
        formMetodo: state.formMetodo,
        formGrafica: state.formGrafica,
        grafica: state.grafica,
        iteraciones: state.iteraciones,
        errors: state.errors,
        setIteraciones,
        setFormNewton,
        setFormGrafica,
        setErrors,
        setGrafica,
      }}
    >
      {children}
    </NewtonContext.Provider>
  );
};

export default NewtonState;
