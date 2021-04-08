import React from 'react'
import Issue from './Issue.js'

export default function IssueList(props) {
  const { issues, comments } = props

  return (
    <div className="issue-list">
      {issues.map(issue => 
        <Issue 
          {...issue} 
          key={issue._id} 
          comments={comments}
           />
      )}
    </div>
  )
}




// {issues.map(issues => <Issue key={issues._id} {...issues}/>)}

    /* {Issue.map((Issue) => {
        return (   <Issue 
          key={Issue._id}
          {...Issue}
          /> )
      })} */


