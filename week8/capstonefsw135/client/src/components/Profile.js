import React, {useContext} from 'react'
import {UserContext} from "../context/UserProvider"
import IssueForm from "./IssueForm"
import IssueList from "./IssueList"
import Issue from "./Issue"


export default function Profile(){
  const {user: {username}, addIssue, issues } = useContext(UserContext)

  return (
    <div>
      <h1>Welcome @${username}!</h1>
      <h3>Add An Issue</h3>
      <Issue /> 
      <IssueForm addIssue={addIssue} /> 
      <h3>Your Issues</h3>
      <IssueList issues={issues} /> 
    </div>
  )
}
