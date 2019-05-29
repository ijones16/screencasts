import React from 'react'
import CommentInput from './components/CommentInput'
import CommentList from './components/CommentList'
import {useSubscription} from 'urql'

const commentSubscriptionQuery = `
  subscription subscribeToComments($course_slug: String!) {
    comments(where: {course_slug: {_eq: $course_slug}}){
      text
    }
  }
`

function App() {
  const course_slug = 'usesubscription-example'
  const [result] = useSubscription({
    query: commentSubscriptionQuery,
    variables: {course_slug},
  })

  if (result.data === undefined) {
    return <div>No comments</div>
  }

  return (
    <div>
      <CommentList comments={result.data.comments} />
      <CommentInput />
    </div>
  )
}

export default App
