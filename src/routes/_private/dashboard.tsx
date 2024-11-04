import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/dashboard')({
    component: () => <Dashboard />,
});

function Dashboard() {
    return (
        <article className="prose max-w-none">
            <div className="flex justify-between">
                <h1>Dashboard</h1>
                <h4 className="h4">Notifcations</h4>
            </div>
        </article>
    );
}
