import React from 'react'

const Search = () => {  // comes under the chatbox logo, you know ..
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder='Find A User'/>
      </div>
      <div className="userChat">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwPAieQjFuAcdeSGbi4kUNplPR4vAJ_314Og&usqp=CAU" alt="" />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>
      </div>
    </div>
  )
}

export default Search
