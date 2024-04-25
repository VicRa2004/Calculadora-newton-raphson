import React from 'react'
import { Link } from 'react-router-dom';

const LinkNav = ({to, className = "", children}) => {
  return (
    <Link to={to} className={`text-white font-light bg-emerald-800 p-2 rounded-md flex justify-between items-center` + className}>
        {children}
    </Link>
  )
}

export default LinkNav;