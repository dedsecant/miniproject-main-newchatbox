import React from 'react'

const Chats = () => {
  return (
    // here to.. 
    <div className='chats'> 
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPAieQjFuAcdeSGbi4kUNplPR4vAJ_314Og&usqp=CAU" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          {/* here gives me another chat profile on my left bar */}
          {/* below says the last message on the profile  */}
          <p>hello</p>    
        </div>
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPAieQjFuAcdeSGbi4kUNplPR4vAJ_314Og&usqp=CAU" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>    
        </div>
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPAieQjFuAcdeSGbi4kUNplPR4vAJ_314Og&usqp=CAU" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
          <p>hello</p>    
        </div>
      </div>
    </div>
  )
}

export default Chats
