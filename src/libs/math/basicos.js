import { parse, derivative } from "mathjs";

/**
 * Funcion para resolver una formula
 * @param {string} ecuacion
 * @param {number} valorDeX
 * @returns {number}
 */
function resolverEcuacion(ecuacion, valorDeX) {
  const node = parse(ecuacion); // Hace algo ???
  return node.evaluate({ x: valorDeX }); // retorna el valor de x
}

/**
 * Funcion para obtener la derivada de la funcion
 * @param {string} f
 * @returns {string}
 */
function calcularDerivada(f) {
  const derivada = derivative(f, "x");
  return derivada.toString();
}

function verificarExpresion(expresion) {
  try {
    parse(expresion).evaluate({ x: "1" }); // Intenta compilar la expresión
    return true; // Si no hay errores, la expresión está bien escrita
  } catch (error) {
    return false; // Si hay errores, la expresión está mal escrita
  }
}

export { resolverEcuacion, calcularDerivada, verificarExpresion };
