import React, { useEffect,useState } from 'react'
import moment from 'moment'
import './Message.css'
import ScrollToBottom from 'react-scroll-to-bottom';
import { useSelector } from 'react-redux';

const Message = ({ message, own,currentChatUser}) => {
    const { user, newUserData } = useSelector(state => state.AuthReducer)
    
    return (
        <ScrollToBottom>
        <div className={`message ${own}`}>
            <div class  Name="messageTop">
                {own?<img className="messageImg" src={newUserData.profilePicture || '../images/noAvatar.png'} alt="" />:<img className="messageImg" src={currentChatUser || '../images/noAvatar.png'} alt="" />}
                <p className="messageText">{message?.text}</p>
            </div>
            <div className="messageBottom">{moment(message?.createdAt).fromNow()}</div>
        </div>
        </ScrollToBottom>
    )
}

export default Message
