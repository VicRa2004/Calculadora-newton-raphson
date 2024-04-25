import React from 'react'

const InputGroup = ({labelText, inputName, inputPlaceholder, inputType = "text", valueInput, setValueInput, valueForm}) => {
  return (
    <div className='flex flex-col'>
        <label htmlFor="">{labelText}</label>
        <input name={inputName} onChange={(e) => setValueInput({[e.target.name]: e.target.value, ...valueForm})} className='outline-emerald-300 border-2 p-1 rounded-lg' type={inputType} placeholder={inputPlaceholder} value={valueInput} />

        <OtherInputGroup  />
    </div>
  )
}

/**
 * 
 * @param {{
 *  labelText:string,
 *  resto: import('react').ComponentProps<input>
 * }} param0 
 * @returns 
 */
const OtherInputGroup = ({labelText, ...resto}) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor="">{labelText}</label>
      
      <input {...resto}/>
    </div>
  )
}

export default InputGroup;