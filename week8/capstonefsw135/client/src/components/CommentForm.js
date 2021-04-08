import React, { useState } from 'react'

const initInput = {
  comment: []
}

export default function CommentForm(props){
  const [input, setInput] = useState(initInput)
  const {_id, comment} = props

  function handleChange(e){
    const {name, value} = e.target
    setInput(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function sendComment(e){
    e.preventdefault()
    sendComment(input, _id)
    setInput(initInput)
  }

  return (
    <form>
      <input 
        type="text" 
        name="comment" 
        value={input.comment} 
        onChange={handleChange} 
        placeholder="Comment"/>
      
      <button onClick={sendComment}>Add Your Comment</button>
    </form>
  )
}


