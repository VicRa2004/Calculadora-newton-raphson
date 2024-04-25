import React from 'react'

const CardList = ({children, nombre, url = "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png", correo = "Sin correo"}) => {
  return (
    <section className='border-4 border-emerald-300 p-3 rounded-2xl flex flex-col md:flex-row items-center justify-between'>
        <div className='flex flex-col gap-1'>
            <h2 className='text-xl font-medium'>{nombre}</h2>
            <h3 className='font-light'>{correo}</h3>
            <p className='font-thin'>{children}</p>
        </div>
        <img className='w-full md:w-1/6 rounded-full' src={url} alt="" />
    </section>
  )
}

export default CardList;