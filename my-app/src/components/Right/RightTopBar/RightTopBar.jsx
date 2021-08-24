import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowBack } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const RightTopBar = () => {
    const {id}=useParams()
    const { user, conversationUser } = useSelector(state => state.AuthReducer)
    const dispatch=useDispatch()

    const [currentChatUser,setCurrentChatUser]=useState()

    // console.log(conversationUser.find(e=>e._id===id).members.find(f=>f!==user._id));

    const getUser = async () => {
        const res = await fetch(`/api/user/${conversationUser.find(e => e._id === id)?.members.find(f => f !== user._id)}`, {
            method:"get"
        })
        const data = await res.json()
        if (res.status === 200) {
            setCurrentChatUser(data.message);
            dispatch({ type: "CURRENT_CHAT_USER", payload: data.message })
        } else {
            dispatch({ type: "CURRENT_CHAT_USER", payload: null })
        }
    }

    useEffect(() => {
        getUser()
    },[id])
    

    return (
        <div className="profile">
            <Link to="/"><ArrowBack className="backMobileButton"/></Link>
            <img className="profileImage" src={currentChatUser?.profilePicture} alt="" />
            <div className="profileName">{currentChatUser?.username}</div>
        </div>
    )
}

export default RightTopBar
