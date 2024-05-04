
// import { db } from "../firebase";
// import React, { useState } from 'react';
// import Add from "../img/add_avatar.webp";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore"; 
// import {useNavigate,Link} from "react-router-dom"

// const Register = () => {

//   const navigate = useNavigate()

//   const handleSubmit = async (e) =>{
//     e.preventDefault();
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

//     try {
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       const storageRef = ref(storage, displayName);
//       const uploadTask = uploadBytesResumable(storageRef, file);

//       uploadTask.on(
//         (error) => {
//           console.error('Error uploading file:', error);
//         }, 
//         () => {
//           getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
//             await updateProfile(res.user, {
//               displayName,
//               photoURL: downloadURL,
//             });
            
//             await setDoc(doc(db, "users", res.user.uid), {
//               uid: res.user.uid,
//               displayName,
//               email,
//               photoURL: downloadURL,
//             });

//             await setDoc(doc(db,"userChats",res.user.uid),{});
//             navigate("/");
            

//           });
//         }
//       );
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

//   return (
//     <div className='formContaner'>
//       <div className='formWrapper'>
//         <span className="logo">Chat Box</span>
//         <span className="title">Register</span>
//         <form onSubmit={handleSubmit}>
//           <input type="text" placeholder="display name" />
//           <input type="email"  placeholder="email" />
//           <input type="password"  placeholder="password" />
//           <input style={{ display: "none" }} type="file" id="file" />
//           <label htmlFor="file">
//             <img src={Add} alt="" />
//             <span>Add an avatar</span>
//           </label> 
//           <button>Sign Up</button>
//         </form>
//         <p>Do you have an account? <Link to="/login">Login</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Register;




// import Add from "../img/add_avatar.webp";
// please watch out ===========================

import { db } from "../firebase";
import React, { useState } from 'react';
import Add from "../img/add_avatar.webp";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.error('Error uploading file:', error);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db,"userChats",res.user.uid),{});
            navigate("/");
          });
        }
      );
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("This email is already in use. Please use a different email address.");
      } else if (error.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        console.error('Error during registration:', error);
      }
    }
  };

  return (
    <div className='formContaner'>
      <div className='formWrapper'>
        <span className="logo">Chat Box</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label> 
          <button>Sign Up</button>
          {error && <span className="error">{error}</span>}
        </form>
        <p>Do you have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
};

export default Register;

