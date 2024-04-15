import React, { useState } from 'react'

const SideBar = () => {

  const [catgData, setCatgData] = useState([])
  return (
    <div className='bg-slate-400 relative w-[25vw] h-[90vh] '>
      <ul className='list-none flex flex-col justify-center gap-3 items-center'>
        <li>Electrocnics</li>
        <li>Faishon</li>
        <li>Beauty Products</li>
        <li>Gym</li>
        <li>Tools</li>
        <li>Technology </li>
      </ul>
    </div>
  )
}

export default SideBar
