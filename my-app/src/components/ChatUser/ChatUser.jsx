import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'

const ChatUser = ({ conversation }) => {
    const { user,conversationUser } = useSelector(state => state.AuthReducer)
    // const dispatch = useDispatch()
    
    const friendId = conversation.members.find((m) => m !== user._id) 

    // console.log(conversationUser);

    const [chatUser, setChatUser] = useState([])
    
    const getUser = async () => {
        try {
            const res = await fetch(`/api/user/${friendId}`, {
                method: "get"
            })
            const data = await res.json()
            setChatUser(data.message);

        } catch (err) {
            console.log(err.message);
        }
    }

    useState(() => {
        getUser()
    },[user,friendId])
      
    return (
        <div className="leftChatUser">
            <img className="profileImage" src={user?.profilePicture} alt="" />
            <div className="profileName">{chatUser?.username}</div>
        </div>
    )
}

export default ChatUser
