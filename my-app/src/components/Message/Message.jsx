import React from 'react'
import moment from 'moment'
import './Message.css'
import ScrollToBottom from 'react-scroll-to-bottom';

const Message = ({ message, own }) => {
    // console.log(own,message);
    return (
        <ScrollToBottom>
        <div className={`message ${own}`}>
            <div className="messageTop">
                <img className="messageImg" src="../images/noAvatar.png" alt="" />
                <p className="messageText">{message?.text}</p>
            </div>
            <div className="messageBottom">{moment(message?.createdAt).fromNow()}</div>
        </div>
        </ScrollToBottom>
    )
}

export default Message
