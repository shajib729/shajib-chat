import { Button } from '@material-ui/core'
import { ErrorOutline } from '@material-ui/icons'
import React from 'react'
import "./DeletePopup.css"

const DeletePopup = ({props:{ deletePopup, setDeletePopup, deleteUser }}) => {
    // console.log(deletePopup);
    return (
        <div className={deletePopup?"deletePopup active":"deletePopup"}>
            <div className="showPopup">
                <div className="icon-text">
                <ErrorOutline className="warningIcon"/>
                <h1>Want to Delete Your Account?</h1>
                </div>
                <div className="button">
                    <Button onClick={()=>setDeletePopup(false)} variant="outlined" color="secondary">Cancel</Button>
                    <Button onClick={()=>deleteUser()} variant="contained" color="secondary">Delete</Button>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup
