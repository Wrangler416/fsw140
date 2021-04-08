import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function UserProvider(props){
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "", 
        issues: JSON.parse(localStorage.getItem("issues")) || [],
        comments: JSON.parse(localStorage.getItem("comments")) || [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    

function signup(credentials) {
        axios.post("/auth/signup", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => ({
                ...prevUserState, 
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }

function login(credentials) {
        axios.post("auth/login", credentials)
        .then(res => {
            const {user, token} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            getUserComments()
            getIssues()
            setUserState(prevUserState => ({
                ...prevUserState, 
                user,
                token
            }))
        })
        .catch(err => handleAuthErr(err.response.data.errMsg))
    }
function logout() {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("issues")
        localStorage.removeItem("comments")
        setUserState({
            user: {},
            token: "",
            issues: [],
            comments: []
        })
    }

function handleAuthErr(errMsg){
        setUserState(prevState => ({
            ...prevState,
            errMsg
        }))
    }

function resetAuthErr(){
        setUserState(prevState => ({
            ...prevState,
            errMsg: ""
        }))
    }

function getIssues(){
        userAxios.get("/api/issues")
        .then(res => {
            localStorage.setItem("issues", JSON.stringify(res.data))

            setUserState(prevState => ({
                ...prevState,
                issues: res.data
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }


function getUserComments(){
        userAxios.get("/api/comments")
        .then(res => {

            localStorage.setItem("comments", JSON.stringify(res.data))
            setUserState(prevState => ({
                ...prevState, 
                comments: res.data
        }))
    })
        .catch(err => console.log(err.response.data.errMsg))
    }

function addIssue(newIssue){
        userAxios.post("/api/issues", newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState, 
                issues: [...prevState.issues, res.data]
            }))
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

function addComment(newComment) {
        userAxios.post("/api/comments", newComment)
        .then(res => {
            setUserState(prevState => ({
                ...prevState, 
                comments: [...prevState.comments, res.data]
            }))
            getUserComments()
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

return (
<UserContext.Provider
    value={{
    ...userState, 
    signup, 
    login, 
    logout,
    addIssue,
    addComment,
    getUserComments,
    resetAuthErr 
    }}>
    {props.children}
</UserContext.Provider>
    )
}

