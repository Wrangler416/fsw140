import React, {useContext} from 'react'
import {UserContext} from "../context/UserProvider"
import IssueList from "./IssueList"

export default function Public(){
    const { publicIssues } = useContext(UserContext)

    return (
        <div className="public">
            <h1>Public Page</h1>
            <IssueList issues={publicIssues} />
        </div>
    )
}
