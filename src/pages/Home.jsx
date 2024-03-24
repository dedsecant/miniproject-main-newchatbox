import React from 'react'
import Sidebar from '/src/components/Sidebar'
import Chat from '/src/components/Chat'

const Home = () => {
  return (
    // home has single inverted comma watch out
    <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
  )
}

export default Home
