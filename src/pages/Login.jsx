// ------------- please dont remove this , as it is the backup simply made bcz if in error msg doesnt Work, we ll do without it as it in this code snippet---------

// import React from 'react'
// import {useNavigate} from "react-router-dom"
// import { signInWithEmailAndPassword } from "firebase/auth";

// const Login = () => {
//   const navigate = useNavigate()

//   const handleSubmit = async (e) =>{
//     e.preventDefault();

//     const email = e.target[0].value;
//     const password = e.target[1].value;


//     try {
//       await signInWithEmailAndPassword(auth, email, password)
//       navigate("/login");
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };
  
//   return (
//     <div className='formContaner'>

//         <div className='formWrapper'>

//             <span className="logo">Chat Box</span>
//             <span className="title">Login</span>
//             <form onSubmit={handleSubmit}>

//                 {/* in login page i need only email and password  */}
//                 <input type="email"  placeholder="Email" />
//                 <input type="password"  placeholder="Password" />
                

//                 <button>Sign in</button>
//                 {/* {err && <span>Something went Wrong</span>} */}
//             </form>
//             <p>Do you have an account? Register</p>
//         </div>
//     </div>
//   )
// }

// export default Login;



// ------------- please dont remove this , as it is the backup simply made bcz if in error msg doesnt Work, we ll do without it as it in this code snippet---------






import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Updated import statement

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const auth = getAuth(); // Initialize auth object
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error);
      setError('Something went wrong');
    }
  };

  return (
    <div className="formContaner">
      <div className="formWrapper">
        <span className="logo">Chat Box</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign in</button>
          {error && <span className="error">{error}</span>}
        </form>
        <p>Do you have an account? <Link to="/register">Register</Link> </p>
      </div>
    </div>
  );
};

export default Login;

