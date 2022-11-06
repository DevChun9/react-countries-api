import React from 'react'
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import {Link} from 'react-router-dom'

function Header({style, setStyle}) {

  const handleClick = () => {
    setStyle(current => !current);
  }

  return (
    // <div className=''>
        <div style={{ backgroundColor : style ? '#1b1b1b' : null}} className='flex justify-between px-12 py-4 lg:py-8 shadow-lg'>
            <Link to={"/"}><div style={{color : style ? 'white' : ''}} className='font-bold text-xl'>Where in the world?</div></Link>
            <div className='font-bold flex items-center bg-gray-200 px-4 py-2 rounded-full' onClick={handleClick}>{style ? <FaRegSun className="mr-2"/> : <FaRegMoon className='mr-2'/> }Mode</div>
        </div>
    // {/* </div> */}
  )
}

export default Header