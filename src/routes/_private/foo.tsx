import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_private/foo')({
  component: () => <div>Hello /_private/foo!</div>,
})
