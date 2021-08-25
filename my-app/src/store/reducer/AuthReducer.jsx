import jwtDecode from "jwt-decode";

const initialState = {
    loading: false,
    user: '',
    token: "",
    conversationUser: [],
    currentChatUser:null,
    newUserData:''
}

const verifyToken = (token) => {
    const decodeToken = jwtDecode(token);
    const expiresIn = new Date(decodeToken.exp * 1000)
    if (new Date() > expiresIn) {
        localStorage.removeItem("myTokenChat")
    } else {
        localStorage.setItem("myTokenChat",token)
        return decodeToken
    }
}

const token = localStorage.getItem("myTokenChat")
// console.log(token);
if (token) {
    const decoded = verifyToken(token)
    initialState.token = token;
    // console.log(decoded);
    if (decoded) {
        initialState.user = decoded;
    }
} else {
    initialState.user=''
}

const AuthReducer = (state=initialState,action) => {
    if (action.type === 'LOGIN') {
        // verifyToken(action.payload)
        return {
            ...state,
            user:verifyToken(action.payload),
            newUserData:verifyToken(action.payload),
            token:action.payload
        }
    } else if (action.type === 'LOGOUT') {
        localStorage.removeItem('myTokenChat')
        return {
            ...state,
            user:"",
            token:""
        }
    }else if (action.type === 'ADD_CONVERSATIONS_USER') {
        return {
            ...state,
            conversationUser: action.payload
        }
    }else if (action.type === 'SCROLL_BOTTOM') {
        return {
            ...state,
            scrollBottom:Date.now()
        }
    }else if (action.type === 'CURRENT_CHAT_USER') {
        return {
            ...state,
            currentChatUser:action.payload
        }
    }else if (action.type === 'PROFILE_CHANGED') {
        return {
            ...state,
            newUserData:action.payload
        }
    }else {
        return state
    }
}

export default AuthReducer