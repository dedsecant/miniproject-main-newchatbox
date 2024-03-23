import React from 'react'
import Add from "../img/add_avatar.webp"


const Login = () => {
  return (
    <div className='formContaner'>

        <div className='formWrapper'>

            <span className="logo">Chat Box</span>
            <span className="title">Login</span>
            <form>

                {/* in login page i need only email and password  */}
                <input type="email"  placeholder="email" />
                <input type="password"  placeholder="password" />
                

                <button>Sign in</button>
            </form>
            <p>Do you have an account? Register</p>
        </div>
    </div>
  )
}

export default Login;
