import React from 'react'

export default function Comment(props) {
    const { comments } = props
    return (
        <h5>
            {props.comments}
        </h5>
    )
}

