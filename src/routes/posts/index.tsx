import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/posts/')({
  component: PostsIndex,
})

function PostsIndex() {
  return <div>Select a post.</div>
}
