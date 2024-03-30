import React from 'react'
import img from '../img/addimg.webp'
import more from '../img/more.png'


const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Type Something' />
      <div className="send">
        <img src={img} alt="" />
        
        <input type="file" style={{display:"none"}} id="file" />
        <label htmlFor="file">
          <img src={more} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input
