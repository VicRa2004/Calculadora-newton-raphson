import {
  SET_ERRORS,
  SET_FORM_GRAFICA,
  SET_FORM_METODO,
  SET_GRAFICA,
  SET_ITERACIONES,
} from "../types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case SET_FORM_METODO:
      return {
        ...state,
        formMetodo: payload,
      };
    case SET_FORM_GRAFICA:
      return {
        ...state,
        formGrafica: payload,
      };
    case SET_ITERACIONES:
      return {
        ...state,
        iteraciones: payload,
      };

    case SET_GRAFICA:
      return {
        ...state,
        grafica: payload,
      };

    case SET_ERRORS:
      return {
        ...state,
        errors: payload,
      };
    default:
      return state;
  }
};
