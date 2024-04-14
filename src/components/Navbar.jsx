import React from 'react'

const Navbar = () => {
  return (
    <nav className='p-2 fixed w-full bg-slate-600 flex justify-around items-center'>
      <h2>E commerce</h2>
      <ul className='list-none flex justify-center gap-3 items-center'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar

