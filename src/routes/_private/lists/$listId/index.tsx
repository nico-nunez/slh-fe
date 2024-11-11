import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/lists/$listId/')({
    component: () => <ViewList />,
});

function ViewList() {
    return (
        <div>
            <article className="prose">
                <h2>This is the route to view a list!!!</h2>
            </article>
        </div>
    );
}
