import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './ProfileButton.css'
import { useDispatch, useSelector } from 'react-redux'
import DeletePopup from '../deletePopup/DeletePopup'
import ImagePopup from '../imagePopup/ImagePopup'

const ProfileButton = ({ props }) => {
  
  const { user,newUserData } = useSelector(state => state.AuthReducer)
  const dispatch=useDispatch()

  const [userProfile,setUserProfile]=useState()
  const [active, setActive] = useState(false)
  const [deletePopup, setDeletePopup] = useState(false)
  const [imagePopup, setImagePopup] = useState(false)
  
  const deleteUser =async () => {
    const res = await fetch("/api/deleteaccount", {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      },
    })
    const data = await res.json()
      
    const res2 = await fetch("/api/delete/conversation", {
      method: "DELETE",
      headers: {
        "Content-Type":"application/json"
      }
    })
    const data2 = await res2.json()
    console.log(res2)
    console.log(data2)

    props.logoutHandle()
    
  }

  const getAuthUser = async () => {
    const res = await fetch('/api/user/'+user._id, {
      method: 'get',
    })
    const data = await res.json()
    setUserProfile(data.message);
    dispatch({type:"PROFILE_CHANGED",payload:data.message})
  }

  useEffect(() => {
    getAuthUser()
  },[imagePopup])
  
  return (
    <>
      <Button onClick={()=>setActive(!active)} className="profile">
          <img src={userProfile?.profilePicture || '../images/noAvatar.png'} alt="" className="profileImage" />
          <sapn className="profileName">{user.username?.split(' ')[0]}</sapn>
      </Button>
    <div className={active?"profilePopup active":"profilePopup"}>
      <Button className="changeImage" onClick={()=>setImagePopup(true)}>
        <div onClick={()=>setActive(!active)}>Change Image</div>
      </Button>
      <Button onClick={()=>{
          setActive(!active)
          setDeletePopup(true)
      }} className="changeImage">
        Delete Account
      </Button>
      <Button
          onClick={() => {
            setActive(!active)
            props.logoutHandle()
          }}
          className="logoutButton">
        LOGOUT
      </Button>
    </div>
      <DeletePopup props={{deletePopup,setDeletePopup,deleteUser}}/>
      <ImagePopup props={{imagePopup,setImagePopup,deleteUser}}/>
    </>
  )
}

export default ProfileButton
