import React, { useEffect, useState } from 'react'
import './Left.css'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ChatUser from '../ChatUser/ChatUser'

const Left = ({currentConversation}) => {
    const { user } = useSelector(state => state.AuthReducer)
    const dispatch=useDispatch()

    const [conversations, setConversations] = useState()

    const getConversation = async () => {
        const res = await fetch(`/api/conversation/${user._id}`, {
            method:"get"
        })
        const data = await res.json()
        // console.log(res);
        setConversations(data.message);
        dispatch({type:"ADD_CONVERSATIONS_USER",payload:data.message})
    }

    useEffect(() => {
        getConversation()
    }, [currentConversation])

    // console.log(currentConversation);

    return (
        <section className={currentConversation?"leftContainer":"leftContainer mobileLeftActive"}>
            {/* Header Bar */}
            <div className="leftHeader">
                <div className="leftHeaderTitle">Chat</div>
            </div>

            {/* Chat User Bar */}
            <div className="leftChatUsers">
                {
                    conversations?
                    conversations.length>=1?conversations.map((conversation) =>(
                    <NavLink onClick={ ()=>setTimeout(()=>{dispatch({type:"SCROLL_BOTTOM"})},500)} activeClassName="active" to={`/message/${conversation._id}`}>
                        <ChatUser conversation={conversation}/>
                    </NavLink>
                    )):<h2 style={{color:'gray',userSelect:'none'}}>No user found! Search Your Friends...🤷‍♀️</h2>
                    :<h1>Loading...</h1>
                }  
            </div>
            
        </section>
    )
}

export default Left


