import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <header className='bg-black text-white flex items-baseline px-4 py-2 justify-between'>

    <h1 className='text-3xl'>Tail Web</h1>

   <nav className=''>
   <NavLink to='/about-page' className={(e) => {
return e.isActive ? 'hover:bg-white hover:text-black px-2 py-2 text-red-600' : 'hover:bg-white hover:text-black px-2 py-2';
}}>About</NavLink>
     <NavLink to='/contact-pa' className={(e) => {
return e.isActive ? 'hover:bg-white hover:text-black px-2 py-2 text-yellow-400' : 'hover:bg-white hover:text-black px-2 py-2';
}}>Contact</NavLink>
   </nav>
   </header>
  )
}

export default Header