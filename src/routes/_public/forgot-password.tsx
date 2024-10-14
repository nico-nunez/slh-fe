import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_public/forgot-password')({
    component: () => <div>Hello /_public/forgot-password!</div>,
});
