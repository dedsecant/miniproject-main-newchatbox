import React from 'react'

const Register = () => {
  return (
    <div className='formContaner'>

        <div className='formWrapper'>

            <span className="logo">Our Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="text" placeholder="display name" />
                <input type="email"  placeholder="email" />
                <input type="password"  placeholder="password" />
                <input type="file"  />
                <button>Sign Up</button>
            </form>
            <p>Do you have an account?</p>
        </div>
    </div>
  )
}

export default Register
