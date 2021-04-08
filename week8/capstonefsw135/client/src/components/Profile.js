import React, {useContext} from 'react'
import {UserContext} from "../context/UserProvider"
import IssueForm from "./IssueForm"
import IssueList from "./IssueList"
import CommentList from "./CommentList"
import Comment from "./Comment"


export default function Profile(){

  const {user: {username}, addIssue, issues, addComment } = useContext(UserContext)

  return (
    <div>
      <h1>Welcome {username}!</h1>
      <h3>Add An Issue</h3>
      <IssueForm addIssue={addIssue} /> 
      <h3>Your Issues</h3>
      <IssueList issues={issues} addComment={addComment} /> 
      <CommentList />
    </div>
  )
}


