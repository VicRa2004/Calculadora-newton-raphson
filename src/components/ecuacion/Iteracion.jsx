import React from 'react'
import {derivative} from "mathjs";

const Iteracion = ({i, valorInicial, ecuacionProblema, x0, x1, error, fx, derivadaFx}) => {

    const derivada = derivative(ecuacionProblema, "x").toString();

  return (
    <div className='border-2 border-emerald-300 p-2 rounded-lg flex flex-col gap-1 text-lg'>
        <h3 className='text-xl font-bold'>Iteracion {i + 1}</h3>
        <h4 className='font-medium'>X({i}): <span className='font-normal'>{x0}</span></h4>

        <h4 className='font-medium'>f(x{i}) = <span className='font-normal'>{ecuacionProblema} = {fx}</span></h4>

        <h4 className='font-medium'>f '(x{i}) = <span className='font-normal'>{derivada} = {derivadaFx}</span></h4>

        <h4 className='font-medium'>F(x{i + 1}) = <span className='font-normal'>{x0} - ({fx} / {derivadaFx}) = {x1}</span></h4>

        <h4 className='font-medium'>Error: <span className='font-normal'>((x({x1}) - x({x0})) / x{x1}) / 100 = {error}%</span></h4>
    </div>
  )
}

export default Iteracion;