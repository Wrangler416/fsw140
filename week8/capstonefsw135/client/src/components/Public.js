import React from "react"
import IssueList from "./IssueList"
import Issue from "./Issue"

export default function Public(){
    return (
        <div className="public">
            <h1>Public Page</h1>
            <IssueList />
        </div>
    )
}

