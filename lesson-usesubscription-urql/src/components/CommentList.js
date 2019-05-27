import React from 'react'

function CommentList({comments = []}) {
  return (
    <ul>
      {comments.map((comment, index) => (
        <li key={`${comment.text}-${index}`}>{comment.text}</li>
      ))}
    </ul>
  )
}

export default CommentList
