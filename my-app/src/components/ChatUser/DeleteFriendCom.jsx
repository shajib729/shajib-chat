import React from 'react'
import { Delete,ErrorOutline } from '@material-ui/icons';
import { Button, IconButton } from '@material-ui/core';

const DeleteFriendCom = ({props:{ setFriendDelete, friendDelete, chatUser }}) => {
    
    console.log(chatUser);

    return (
    <section className={friendDelete?"deleteFriendCom active":'deleteFriendCom'}>
        <div className="showPopup">
            <h1>Confirm to delete you friend</h1>
            <div className="button">
                <Button onClick={()=>setFriendDelete(false)} variant="outlined" color="secondary">Cancel</Button>
                <Button variant="contained" color="secondary">Delete</Button>
            </div>
        </div>
    </section>
    )
}

export default DeleteFriendCom