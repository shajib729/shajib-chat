import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './SearchResult.css'
import {useSelector} from 'react-redux'

const SearchResult = ({ searchInput,setSearchInput }) => {
    const {user,conversationUser} = useSelector(state => state.AuthReducer)
    const history=useHistory()

    const [users, setUsers] = useState([])

    const handleClickedUser = async (handleUser) => {
        
        setSearchInput("")
        if (conversationUser.some((e)=>e.members.some(s=>s===handleUser._id))) {
            history.push(`/message/${conversationUser.find((e)=>e.members.some(s=>s===handleUser._id))._id}`)
        } else {
            const res = await fetch('/api/conversation', {
                method: "post",
                headers: {
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({senderId:handleUser._id})
            })
            const data = await res.json()
            // console.log(res);
            // console.log(data.message);
            history.push("/message/"+data.message._id)
        }

    }
    
    const getUsers = async () => {
        const res = await fetch('/api/users', {
            method:"get"
        })
        const data = await res.json()
        // console.log(res);
        setUsers(data.message);
    }

    useEffect(() => {
        getUsers()
    }, [])
    
    return (
        <div className="searchResultComponent">
            {
                searchInput? (
                <div className="searchUsers">
                    {users?.filter((user1) =>user1._id!==user._id && user1.username.toLowerCase().includes(searchInput?.trim().toLowerCase())).length?
                    users?.filter((user1) =>user1._id!==user._id && user1.username.toLowerCase().includes(searchInput?.trim().toLowerCase()))
                    .map((use,i) => (
                    <div onClick={()=>handleClickedUser(use)} key={i+100} className="searchUser">
                        <img className="userProfile" src="../images/noAvatar.png" alt="" />
                        <span className="userName">{use.username}</span>
                    </div>
                    )) : <div className="noUserFound">No User is Found</div>}
                </div>
                ):null
             }
           
        </div>
    )
}

export default SearchResult
