import React from 'react'
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"

export default function Issue(props){
  const {title, description, _id} = props
  return (
    <div>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <CommentForm />
      <CommentList />
    </div>
  )
}

