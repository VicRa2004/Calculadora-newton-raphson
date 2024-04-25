import React from 'react'

const Button = ({type, children, event, form, }) => {
  return (
    <button
        onClick={(e) => {
          e.preventDefault();
          event(form);
        }}
        className='bg-emerald-400 p-2 rounded-md text-white '
        type={type} >
            {children}
    </button>
  )
}

export default Button;