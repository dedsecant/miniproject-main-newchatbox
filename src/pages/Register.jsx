import React from 'react'
import Add from "../img/add_avatar.webp"


const Register = () => {
  return (
    <div className='formContaner'>

        <div className='formWrapper'>

            <span className="logo">Chat Box</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="display name" />
                <input type="email"  placeholder="email" />
                <input type="password"  placeholder="password" />
                <input style={{display:"none"}} type="file" id="file" />
                {/* display none hides the choose file button , also called as inner style */}

                {/* to display the input avatar from id=file */}
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add an avatar</span>
                </label> 

                <button>Sign Up</button>
            </form>
            <p>Do you have an account?Login</p>
        </div>
    </div>
  )
}

export default Register
