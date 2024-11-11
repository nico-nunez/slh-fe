import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/parties/$partyId/')({
    component: () => <ViewParty />,
});

function ViewParty() {
    return (
        <div>
            <article className="prose">
                <h2>This is the route to view a party!!!</h2>
            </article>
        </div>
    );
}
