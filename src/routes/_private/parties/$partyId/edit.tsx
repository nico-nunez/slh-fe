import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/parties/$partyId/edit')({
    component: () => <EditParty />,
});

function EditParty() {
    return (
        <div>
            <article className="prose">
                <h2>This is the route to edit a party!!!</h2>
            </article>
        </div>
    );
}
