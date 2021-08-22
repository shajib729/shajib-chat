import React,{useState} from 'react'
import './Login.css'
import FacebookLogin from 'react-facebook-login';
import {TextField,Button,FormControlLabel,Checkbox} from '@material-ui/core'
import { Facebook,Visibility,VisibilityOff } from '@material-ui/icons'
import Registration from '../../components/Registration/Registration';
import toast, { Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux'

const Login = () => {
    // const { user } = useSelector(state => state.AuthReducer)
    const dispatch=useDispatch()
    
    const [handlePopup,setHandlePopup]=useState(false)
    const [showPassword,setShowPassword]=useState(false)
    const [values,setValues]=useState({email:'',password:''})
    
    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const responseFacebook =async (response) => {
        
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
            setValues({email:'',password:''})
        }
    }

    return (
        <section className="loginContainer">
            <Toaster
            position="top-center"
            reverseOrder={false}
            />
            
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
                    
                    <span className="loginWith">or </span>
                    
                    {/* LOGIN WITH FACEBOOK  */}
                    <div className="alternateLogin">
                        <Button className="facebookButton" variant="contained" color="primary">
                           <FacebookLogin
                                appId="324210142742626"
                                autoLoad={false}
                                fields="id,email,picture"
                                callback={responseFacebook}
                                icon={<Facebook className="facebookIcon"/>}
                            /> 
                        </Button>                        
                    </div>
                    
                    <span className="dontAccount">Don't have any accont?</span>
                    
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
