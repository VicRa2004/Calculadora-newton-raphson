import {resolverEcuacion, calcularDerivada} from './math/basicos'
import {abs} from "mathjs"

/**
 * Metedo que resulve las formulas para obtener la iteracion y el error
 * @param {{f:String, x0:number}} datos
 * @returns {{x1: number, x0:number, err:number, fx: number, derivadaFx:number}}
 */
function ecuacionIteracion({ecuacionProblema: f, x1: x0}) {
    // Resuelvo las ecuaciones
    let fx = resolverEcuacion(f, x0);
    let derivadaFx = resolverEcuacion(calcularDerivada(f), x0);

    // El resultado de estos es x1
    let x1 = x0 - (fx / derivadaFx); // Sirve para calcular la primera iteracion
    
    let err = abs(((x1 - x0) / x1) * 100);

    return {x0, x1, err, fx, derivadaFx};
}

/**
 * 
 * @param {{ecuacionProblema:string, err:number, puntoDeInicio:number}} param
 * @returns 
 */
function metodoNewtonRaphson({ecuacionProblema, err, puntoDeInicio}) {
    try {
        let x1 = puntoDeInicio;
        let errIteracion = 100;
        let iteraciones = [];
        let i = 0;

        while (err < errIteracion) {
            const datosIteracion = ecuacionIteracion({
                ecuacionProblema, x1
            });

            errIteracion = datosIteracion.err;
            x1 = datosIteracion.x1;

            iteraciones.push(datosIteracion);
            i++;
            }
        return iteraciones;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export {metodoNewtonRaphson};