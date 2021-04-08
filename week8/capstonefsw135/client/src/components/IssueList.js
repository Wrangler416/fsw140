import React from 'react'
import Issue from './Issue.js'

export default function IssueList(props) {
  const { issues, addIssue } = props

  return (
    <div>
      {issues.map(issue => 
        <Issue 
          {...issue} 
          key={issue._id} 
          addIssue={addIssue}
        />
      )}
    </div>
  )
}




