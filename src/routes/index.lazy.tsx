import { createLazyFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createLazyFileRoute('/')({
  component: Index,
})

function Index() {
  const [state] = useState(0)

  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <div key={index}>{index}</div>
        ))}
    </div>
  )
}
