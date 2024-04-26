/**
 *
 * @param {number} numero
 */
function redondearMultiplo(numero) {
  if (numero >= 0) {
    while (numero % 10 !== 0) {
      numero++;
    }
  } else {
    while (numero % 10 !== 0) {
      numero--;
    }
  }

  return numero;
}

export { redondearMultiplo };
