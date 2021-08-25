import React,{useState } from 'react'
import './Login.css'
import FacebookLogin from 'react-facebook-login';
import {TextField,Button,FormControlLabel,Checkbox} from '@material-ui/core'
import { Facebook,Visibility,VisibilityOff } from '@material-ui/icons'
import Registration from '../../components/Registration/Registration';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'

const Login = () => {
    const dispatch=useDispatch()
    
    const [handlePopup,setHandlePopup]=useState(false)
    const [showPassword,setShowPassword]=useState(false)
    const [values,setValues]=useState({email:'',password:''})
    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const responseFacebook = async (response) => {
        
        if (response.email && response.id) {
            const res = await fetch("/api/login", {
                method: "post",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email:response.email,password:response.id})
            })
            const data = await res.json()
            // console.log(res);
            // console.log(data);
            if (res.status === 400) {
                toast.error(data.error.email || data.error.password || data.error, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.success(data.message, {
                    position: "top-center",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                dispatch({type:"LOGIN",payload:data.token})
            }
        }

    }
    
    const handleSubmit =async (e) => {
        e.preventDefault()

        const res = await fetch("/api/login", {
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
            toast.error(data.error.email || data.error.password || data.error, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.success(data.message, {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setValues({ email: '', password: '' })
            dispatch({type:"LOGIN",payload:data.token})
        }
    }
    
    return (
        <section className="loginContainer">
            <ToastContainer />
            <div className="loginWrapper">
                {/* Login Left Side */}
                <div className="loginLeft">
                    <div className="loginLeftTitle">
                        Chat-Box
                    </div>
                    <div className="loginLeftDesc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo magnam eum, atque sequi animi molestiae!
                    </div>
                </div>
    
                {/* Login Right Side */}
                <div className="loginRight">
                    {/* <div className="loginRightTitle">Login</div> */}
                <div className="loginBox">
                    <form onSubmit={handleSubmit} className="loginForm" noValidate autoComplete="off">
                        <TextField onChange={handleChange} value={values.email} name="email" id="outlined-basic" type="email" label="Email" variant="outlined" />
                        <div className="fields">
                        <TextField 
                        onChange={handleChange} 
                        value={values.password} 
                        name="password" 
                        id="outlined-basic" 
                        label="Password" 
                        variant="outlined" 
                        type={showPassword? 'text':'password'} />
                        <FormControlLabel onClick={()=>setShowPassword(!showPassword)} control={<Checkbox icon={<VisibilityOff />} checkedIcon={<Visibility />}/>} />
                        </div>
                        <Button className="loginButton" type="submit" variant="contained" color="primary">
                            Login
                        </Button>
                    </form>
                    
                    <div className="loginWith">or </div>
                    
                    {/* LOGIN WITH FACEBOOK  */}
                    <div className="alternateLogin">
                        <Button className="facebookButton" variant="contained" color="primary">
                           <FacebookLogin
                                appId="240379330783555"// TODO: appId="324210142742626"
                                autoLoad={false}
                                fields="id,email,picture"
                                callback={responseFacebook}
                                icon={<Facebook className="facebookIcon"/>}
                            /> 
                        </Button>                        
                    </div>
                    
                    <div className="dontAccount">Don't have any accont?</div>
                    
                    {/* SIGN UP BUTTON  */}
                    <Button onClick={()=>setHandlePopup(true)} className="RegisterButton" type="submit" variant="contained">
                       Create New Account
                    </Button>
                </div>
                </div>
            </div>

            <Registration handlePopup={handlePopup} setHandlePopup={setHandlePopup}/>
            
        </section>
    )
}

export default Login
