import React from 'react'
import Navbar from '/src/components/Navbar'
import Search from '/src/components/Search'
const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar/>
      <Search/>
    </div>
  )
}

export default Sidebar
