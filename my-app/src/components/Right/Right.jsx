import { Send } from '@material-ui/icons'
import React, { useEffect, useRef, useState } from 'react'
import Message from '../Message/Message'
import './Right.css'
import { useDispatch, useSelector } from 'react-redux';
import RightTopBar from './RightTopBar/RightTopBar';
import { useParams } from 'react-router-dom';
import { Skeleton } from '@material-ui/lab';
import io from 'socket.io-client'

let socket;
    
let URL = 'localhost:5000/'

const Right = ({ currentConversation }) => {
    const { user, conversationUser, scrollBottom,currentChatUser } = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch()
    
    const mobile = useParams()
    // console.log(mobile);

    const [messages,setMessages]=useState()
    const [newMessage,setNewMessage]=useState()

    const getMessages = async () => {
        const res = await fetch(`/api/message/${currentConversation}`, {
            method:"get"
        })
        const data = await res.json()
        // console.log(data);
        setMessages(data.message)
        if (res.status === 200) {
            setTimeout(() => {
                dispatch({type:"SCROLL_BOTTOM"})
            },500)
        }
    }

    useEffect(() => {        
        // socket = io(URL)
        getMessages()

    }, [currentConversation])

    const handleSubmit =async (e) => {
        e.preventDefault()
        
        if (newMessage?.trim()) {
            const message={
                senderId: user._id,
                text: newMessage,
                conversationId:currentConversation
            }
             
            const res = await fetch('/api/newMessage', {
                method: "post",
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(message)
            })
            const data = await res.json()
            // console.log(res);
            // console.log(data); 
            setMessages([...messages,data.message])
            setTimeout(() => {
                dispatch({type:"SCROLL_BOTTOM"})
            },100)
            setNewMessage('')
        }
    }

    const scrollToBottom = useRef()
    
    useEffect(() => {
        scrollToBottom.current?.scrollIntoView({ behavior: "auto" })
    }, [messages, scrollBottom]);
    
    return (
        <section className={mobile.id?"RightContainer mobileActive":"RightContainer"}>
        {
            currentConversation?
            conversationUser?.some(e=>e._id===currentConversation) ? <>
            {/* Right Top Bar */}
            <div className="rightTopBar">
                <RightTopBar/>
            </div>
            
            {/* Right Middle(Messages) Bar */}
            <div className="rightMiddle">
                <div className="messages">
                    <div className="message">
                    {
                        messages?
                        messages.length?(messages.map((m,i)=>

                            <div ref={scrollToBottom} >
                                <Message currentChatUser={currentChatUser?.profilePicture} key={i} message={m} own={m?.senderId===user._id?'own':''}/>
                            </div>

                        )):<h1 style={{alignSelf:"center",top:'50%',position:"absolute"}}>No message😪</h1>
                        : <h1 style={{alignSelf:"center",top:'50%',position:"absolute"}}>Loading...</h1>
                    }
                    </div>
                </div>
            </div>
            
            {/* Right Bottom(Input)) Bar */}
            <div className="rightBottom">
                <form onSubmit={handleSubmit} className="messageForm">
                    <input value={newMessage} onChange={e=>setNewMessage(e.target.value)} placeholder="Type Message..." type="text" className="messageInput" />
                    <button className="submitButton" type="submit"><Send/></button>
                </form>
            </div>
            </>
            :<h1 style={{display: 'flex', justifyContent: "center", alignItems:'center',height:'100%'}}>Nothis is found🤷‍♂️🤦‍♂️...</h1>
            :
            <h1 style={{display: 'flex', justifyContent: "center", alignItems:'center',height:'100%'}}>Select Your Friend To Chat💬👏</h1>
        }
            
        </section>
    )
}

export default Right
