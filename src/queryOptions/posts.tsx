import { queryOptions } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'

export type PostType = {
  id: string
  title: string
  body: string
}

class PostNotFoundError extends Error {}

const fetchPost = async (postId: string) => {
  console.info(`Fetching post with id ${postId}...`)
  await new Promise((r) => setTimeout(r, 500))

  const post = await axios
    .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((res) => res.data)
    .catch((err) => {
      if (err instanceof AxiosError && err.response?.status === 404) {
        throw new PostNotFoundError(`Post with id "${postId}" not found!`)
      }
      throw err
    })

  return post
}

const fetchPosts = async () => {
  console.info('Fetching posts...')
  await new Promise((r) => setTimeout(r, 500))

  return axios
    .get<Array<PostType>>('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data.slice(0, 10))
}

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: () => fetchPosts(),
})

export const postQueryOptions = (postId: string) =>
  queryOptions({
    queryKey: ['posts', { postId }],
    queryFn: () => fetchPost(postId),
  })
