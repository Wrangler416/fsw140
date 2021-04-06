import React from "react"
import Issue from "./Issue"

export default function IssueList(props){
  const {issues} = props
  return (
    <div>
     {issues.map(issues => <Issue key={issues._id} {...issues}/>)}
    </div>
  )
}



    /* {Issue.map((Issue) => {
        return (   <Issue 
          key={Issue._id}
          {...Issue}
          /> )
      })} */


