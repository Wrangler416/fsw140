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
        todos: [], // (don't think you're using the todos ..)
        // Todd - Added the following lines:
        issues: JSON.parse(localStorage.getItem('issues')) || [],
        publicIssues: JSON.parse(localStorage.getItem('publicIssues')) || [],
        // end Add
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
            getUserIssues()
            getPublicIssues()
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
        // Todd - Added the following lines:
        localStorage.removeItem('issues')
        localStorage.removeItem('publicIssues')
        // end Add
        setUserState({
            user: {},
            token: "",
            todos: [], // // (don't think you're using the todos ..)
            // Todd - Added the following lines:
            issues: [],
            publicIssues: []
            // end Add
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

    function getUserIssues(){
        userAxios.get("/api/issue/user")
        .then(res => {

            // Todd - Added the following line:
            localStorage.setItem('issues', JSON.stringify(res.data))
            // end Add

            setUserState(prevState => ({
                ...prevState, 
                // Todd - Added the following line:
                issues: res.data,
                // end Add
                comments: res.data
        }))
    })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function getPublicIssues(){
        userAxios.get("/api/issue")
        .then(res => {

            // Todd - Added the following line:
            localStorage.setItem('publicIssues', JSON.stringify(res.data))
            // end Add

            setUserState(prevState => ({
                ...prevState, 
                // Todd - Added the following line:
                publicIssues: res.data,
                // end Add
                comments: res.data
        }))
    })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function addIssue(newIssue){
        userAxios.post("/api/issue", newIssue)
        .then(res => {
            setUserState(prevState => ({
                ...prevState, 
                // Todd - modified the following line:
                issues: [...prevState.issues, res.data]
                // end Mod
            }))
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
    resetAuthErr 
    }}>
    {props.children}
</UserContext.Provider>
    )
}

