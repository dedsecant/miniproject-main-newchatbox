// import React, { useState, useContext } from 'react';
// import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
// import { db } from '../firebase';
// import { v4 as uuid } from 'uuid';
// import { uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
// import { AuthContext } from '../context/AuthContext';
// import { ChatContext } from '../context/ChatContext';
// import { Timestamp } from 'firebase/firestore';
// import more from '../img/more.png'; // Import the image

// const Input = () => {
//   const [text, setText] = useState('');
//   const [img, setImg] = useState(null);
//   const { currentUser } = useContext(AuthContext);
//   const { data } = useContext(ChatContext);

//   const handleSend = async () => {
//     if (!data.chatId) {
//       console.error('No chatId available');
//       return;
//     }

//     const documentPath = `chats/${data.chatId}`;
//     console.log('Document path:', documentPath);

//     if (img) {
//       const storageRef = ref(storage, uuid());
//       const uploadTask = uploadBytesResumable(storageRef, img);

//       uploadTask.on(
//         'state_changed',
//         (snapshot) => {
//           // Progress monitoring
//         },
//         (error) => {
//           console.error('Error uploading file:', error);
//         },
//         async () => {
//           try {
//             const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//             console.log('Download URL:', downloadURL);
//             await updateDoc(doc(db, 'chats', data.chatId), {
//               messages: arrayUnion({
//                 id: uuid(),
//                 text,
//                 senderId: currentUser.uid,
//                 date: Timestamp.now(),
//                 img: downloadURL,
//               }),
//             });
//           } catch (error) {
//             console.error('Error getting download URL:', error);
//           }
//         }
//       );
//     } else {
//       try {
//         console.log('Updating document without image');
//         await updateDoc(doc(db, 'chats', data.chatId), {
//           messages: arrayUnion({
//             id: uuid(),
//             text,
//             senderId: currentUser.uid,
//             date: Timestamp.now(),
//           }),
//         });
//       } catch (error) {
//         console.error('Error updating document without image:', error);
//       }
//     }
//   };

//   return (
//     <div className='input'>
//       <input type='text' placeholder='Type Something' onChange={(e) => setText(e.target.value)} />
//       <div className='send'>
//         <img src={img} alt='' />
//         <input type='file' style={{ display: 'none' }} id='file' onChange={(e) => setImg(e.target.files[0])} />
//         <label htmlFor='file'>
//           <img src={more} alt='' />
//         </label>
//         <button onClick={handleSend}>Send</button>
//       </div>
//     </div>
//   );
// };

// export default Input;

import React, { useContext, useState } from "react";
import Img from "../img/img.png";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(
        (error) => {
          //TODO:Handle Error
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImg(null);
  };
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="send">
        <img src={img} alt="" />
        <input
          type="file"
          style={{ display: "none" }}
          id="file"
          onChange={(e) => setImg(e.target.files[0])}
        />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Input;