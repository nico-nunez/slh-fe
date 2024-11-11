import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/parties/new')({
    component: () => <CreateParty />,
});

function CreateParty() {
    return (
        <div>
            <article className="prose">
                <h2>This is the route to create a party!!!</h2>
            </article>
        </div>
    );
}
