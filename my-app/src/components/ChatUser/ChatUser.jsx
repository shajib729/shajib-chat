import React, { useState,useEffect } from 'react'
import './ChatUser.css'
import { useSelector } from 'react-redux'
import { Skeleton } from '@material-ui/lab';
import { Delete,ErrorOutline } from '@material-ui/icons';
import { Button, IconButton } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
// import DeleteFriendCom from './DeleteFriendCom';

const ChatUser = ({ conversation }) => {
    const { user,conversationUser,newUserData } = useSelector(state => state.AuthReducer)
    // const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()
    
    const friendId = conversation.members.find((m) => m !== user._id) 

    // console.log(conversationUser);

    const [chatUser, setChatUser] = useState([])
    // const [friendDelete, setFriendDelete] = useState()
    
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

    // delet friend 
    const handleDeleteFriend =async (chatUser) => {
        // console.log(chatUser);
        const res = await fetch(`/api/delete/friendconversation/${chatUser._id}`, {
            method: "DELETE",
            headers: {
                'Content-Type':"application/json"
            }
        })
        const data = await res.json()
        // console.log(data.message);
        if (res.status === 200) {
            history.push('/')
        }
    }

    useEffect(() => {
        console.log("Location changed");
        getUser()
    }, [id])
      
    return (
        <>
        <div className="leftChatUser">
            {
                chatUser.username? (
                    <>
                    <div style={{display:'flex',alignItems:"center"}}>
                        <img className="profileImage" src={chatUser?.profilePicture} alt="" />
                        <div className="profileName">{chatUser?.username}</div>
                    </div>
                    <IconButton >
                        <Delete onClick={()=>handleDeleteFriend(chatUser)}/>
                    </IconButton>
                    </>
                ):(
                    <div style={{display:'flex',alignItems:"center",margin:"0px"}}>
                        <Skeleton variant="circle" width={40} height={40}  style={{background:"rgb(0 0 0 / 20%)"}} />
                        <Skeleton variant="text" width={100} height={30} style={{background:"rgb(0 0 0 / 20%)",marginLeft:"20px"}}/>
                    </div>
                )
            }
           
        </div>
        
        </>
    )
}

export default ChatUser