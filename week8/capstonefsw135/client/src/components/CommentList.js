import React, {useContext} from 'react'
import {UserContext} from "../context/UserProvider"
import Comment from './Comment.js'

export default function CommentList(props) {
  const { comments } = useContext(UserContext)

  return (
   <div>
       {comments.map(comment => 
        <Comment 
          {...comment} 
          key={comment._id} 
        />
      )}
   </div>
  )
}



