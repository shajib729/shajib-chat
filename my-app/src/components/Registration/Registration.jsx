import React, { useState } from 'react'
import './Registration.css'
import {TextField,FormControlLabel,Checkbox,Button } from '@material-ui/core'
import { Facebook,Close,VisibilityOff,Visibility } from '@material-ui/icons'
import FacebookLogin from 'react-facebook-login';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector,useDispatch } from 'react-redux'


const Registration = ({ setHandlePopup,handlePopup }) => {
    const dispatch=useDispatch()

    const [showPasword,setShowPassword]=useState(true)
    const [values,setValues]=useState({username:'',email:'',password:'',cpassword:''})
    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
      
    const responseFacebook =async (response) => {
        
        if (response.name && response.email && response.id) {
            const res = await fetch("/api/registration", {
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({username:response.name,email:response.email,password:response.id,cpassword:response.id})
            })
            const data = await res.json()
            // console.log(res);
            // console.log(data);
            if (res.status === 400) {
                toast.error(data.error.username || data.error.email || data.error.password || data.error.cpassword || data.error, {
                    style: {
                      padding: '10px',
                      color: '#fff',
                      fontSize:"16px",
                      background:"red"
                    },
                    iconTheme: {
                      primary: 'white',
                      secondary: 'red',
                    },
                  })
            } else {
                toast.success(data.message, {
                    style: {
                        padding: '10px',
                        color: '#fff',
                        fontSize:"16px",
                        background:"#62D346"
                    },
                    iconTheme: {
                      primary: 'white',
                      secondary: '#62D346'
                    }
                })
                dispatch({type:"LOGIN",payload:data.token})
            }
        }

    }
    
    const handleSubmit =async (e) => {
        e.preventDefault()
        
        const res = await fetch("/api/registration", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(values)
        })
        const data = await res.json()
        // console.log(res);
        // console.log(data);
        if (res.status === 400) {
            toast.error(data.error.username || data.error.email || data.error.password || data.error.cpassword || data.error, {
                style: {
                  padding: '10px',
                  color: '#fff',
                  fontSize:"16px",
                  background:"red"
                },
                iconTheme: {
                  primary: 'white',
                  secondary: 'red',
                },
              })
        } else {
            toast.success(data.message, {
                style: {
                    padding: '10px',
                    color: '#fff',
                    fontSize:"16px",
                    background:"#62D346"
                },
                iconTheme: {
                  primary: 'white',
                  secondary: '#62D346'
                }
            })
            dispatch({type:"LOGIN",payload:data.token})
            setValues({username:'',email:'',password:'',cpassword:''})
        }
    }

    return (
        <div className={handlePopup ? "signupContainer" : "hide signupContainer"}>
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
            <div className="signupBox">
                <Close className="hideSignup" onClick={()=>setHandlePopup(false)}/>
                <h4 className="signupTitle">Sign Up</h4>
                <p className="signupDesc">It's quick and easy</p>
                <hr />
                <form onSubmit={handleSubmit} autoComplete="off" className="signupForm">
                    <TextField
                        className="fields" 
                        id="outlined-basic"
                        label="Full Name"
                        type="text"
                        autoComplete="off"
                        variant="outlined"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    <TextField
                        className="fields" 
                        id="outlined-basic"
                        label="Email"
                        type="email"
                        autoComplete="off"
                        variant="outlined"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    <div className="fields">
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type={showPasword?'text':'password'}
                            autoComplete="off"
                            variant="outlined"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                        <FormControlLabel onClick={()=>setShowPassword(!showPasword)} control={<Checkbox icon={<VisibilityOff />} checkedIcon={<Visibility />} />} />
                    </div>
                    <div className="fields">
                        <TextField
                            id="outlined-password-input"
                            label="Confirm Password"
                            type={showPasword?'text':'password'}
                            autoComplete="off"
                            variant="outlined"
                            name="cpassword"
                            value={values.cpassword}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <input className="signupButton" type="submit" value="Sign Up" />

                </form>


                {/* REGISTER WITH FACEBOOK  */}
                <div className="alternateLogin">
                    <span className="signupWth">Or</span>
                    <Button className="facebookButton" variant="contained" color="primary">
                        <FacebookLogin
                            appId="324210142742626"
                            autoLoad={false}
                            fields="name,email,picture"
                            callback={responseFacebook}
                            icon={<Facebook className="facebookIcon" />}
                            textButton="Sign up with Facebook"                            
                        /> 
                    </Button>                        
                </div>
            </div>
        </div>
    )
}

export default Registration
