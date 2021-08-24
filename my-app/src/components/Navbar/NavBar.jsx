import React, { useEffect, useState } from 'react'
import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'
import { KeyboardBackspace, Search } from '@material-ui/icons';
import { Button } from '@material-ui/core';
import { useDispatch,useSelector } from 'react-redux'
import SearchResult from '../SearchResult/SearchResult';

const NavBar = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.AuthReducer)

    const [searchInput,setSearchInput]=useState()
    const [showSerachMobile,setShowSerachMobile]=useState(false)
    
    const logoutHandle = () => {
       dispatch({type:"LOGOUT"})
    }

    const { pathname } = useLocation()
    
    useEffect(() => {
        setSearchInput('')
    },[pathname])

    return (
        <header>
            <nav>
            {/* header left  */}
            <div className="headerLeft">
                <Search onClick={()=>{
                    setShowSerachMobile(true) 
                    setSearchInput()}} className="searchIconFormMobile"/>
                <Link to='/'><img src="../images/logo.png" alt="" /></Link>
            </div>

            {/* hader middle  */}
            <div className={showSerachMobile?"headerMiddle active":"headerMiddle"}>
                <div className="searchBar">
                    {/* icon for only mobile  */}
                        <KeyboardBackspace onClick={() => setShowSerachMobile(false)} className="searchCancelMobile"/>
                    {/* search input in pc */}
                    <input onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder="Search A User" className="searchInput" type="text" />
                    
                    {/* search input in pc */}
                    {/* <input onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} placeholder="Search A User" className="searchInputForMobile" type="text" /> */}
                    
                    {/* Show search result */}
                    <SearchResult searchInput={searchInput} setSearchInput={setSearchInput}/>
                </div>
            </div>

            {/* hader right  */}
            <div className="headerRight">
                <div className="profile">
                    <img src={user.profilePicture} alt="" className="profileImage" />
                        <sapn className="profileName">{user.username.split(' ')[0]}</sapn>
                </div>
                <Button className="logoutButton" onClick={logoutHandle} variant="contained" color="primary">
                    Logout
                </Button>             
            </div>
            </nav>
        </header>
    )
}

export default NavBar
