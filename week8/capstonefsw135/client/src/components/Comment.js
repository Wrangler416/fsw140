import React, {useContext} from 'react'
import {UserContext} from "../context/UserProvider"


export default function Comment(props) {

    const { comments } = useContext(UserContext)
    // const { comments } = props
    return (
        <h5>
            {props.comments}
        </h5>
    )
}

