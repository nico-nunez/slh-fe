import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/lists/new')({
  component: () => <CreateList />,
})

function CreateList() {
  return (
    <div>
      <article className="prose">
        <h2>Create a new list here!!!</h2>
      </article>
    </div>
  )
}
