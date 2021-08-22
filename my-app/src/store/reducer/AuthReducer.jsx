import jwtDecode from "jwt-decode";

const initialState = {
    loading: false,
    user: '',
    token:""
}

const verifyToken = (token) => {
    const decodeToken = jwtDecode(token);
    const expiresIn = new Date(decodeToken.exp * 1000)
    if (new Date() > expiresIn) {
        localStorage.removeItem("myToken")
    } else {
        localStorage.setItem("myToken",token)
        return decodeToken
    }
}

const token = localStorage.getItem("myToken")
// console.log(token);
if (token) {
    const decoded = verifyToken(token)
    initialState.token = token;
    // console.log(decoded);
    if (decoded) {
        initialState.user = decoded;
    }
}

const AuthReducer = (state=initialState,action) => {
    if (action.type === 'LOGIN') {
        // verifyToken(action.payload)
        return {
            ...state,
            user:verifyToken(action.payload),
            token:action.payload
        }
    } else if (action.type === 'LOGOUT') {
        return {
            ...state,
            user:"",
            token:""
        }
    }else {
        return state
    }
}

export default AuthReducer