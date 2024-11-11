import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/lists/$listId/edit')({
    component: () => <EditList />,
});

function EditList() {
    return (
        <div>
            <article className="prose">
                <h2>This is the route to edit a list!!!</h2>
            </article>
        </div>
    );
}
