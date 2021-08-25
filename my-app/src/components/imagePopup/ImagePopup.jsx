import { Button } from '@material-ui/core'
import { ErrorOutline } from '@material-ui/icons'
import React, { useState } from 'react'
import './ImagePopup.css'
import {useDispatch, useSelector} from 'react-redux'

const DeletePopup = ({props:{ imagePopup, setImagePopup, deleteUser }}) => {
    // console.log(deletePopup)
    const { user,newUserData } = useSelector(state => state.AuthReducer)
    const dispatch = useDispatch()
    // console.log(newUserData);

    const [image,setImage]=useState('')
    
    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

    const uploadImage = async () => {
        const formData=new FormData()
        formData.append('image',image)
        
        const res=await fetch('/api/user/profilpicture', {
            method: "PATCH",
            heades: {
              'Content-Type':"application/json"  
            },
            body:formData
        })
        const data= await res.json()
        // console.log(res);
        // console.log(data);
        if (res.status === 200) {
            setTimeout(() => {
                setImagePopup(false)
            },1000)
        }
    }
    
    return (
        <div className={imagePopup?"imagePopup active":"imagePopup"}>
            <div className="showPopup">
                <div className="icon-text">
                
                <label className="profileImage" htmlFor="profileImage">
                    <div className="image">
                       <img src={image?URL.createObjectURL(image):newUserData?.profilePicture} alt="" /> 
                    </div>                    
                </label>
                <input onChange={handleImage} accept='.png,.jpeg,.jpg' type="file" id="profileImage" style={{display:'none'}}/>
                
                <h1>Change Your Profile Picture</h1>
                </div>
                <div className="button">
                    <Button onClick={() => {
                        setImagePopup(false)
                        setImage('')
                    }} variant="outlined" color="secondary">Cancel</Button>
                    <Button onClick={()=>uploadImage()} variant="contained" color="secondary">Upload</Button>
                </div>
            </div>
        </div>
    )
}

export default DeletePopup
