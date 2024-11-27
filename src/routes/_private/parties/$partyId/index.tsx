import { createFileRoute } from '@tanstack/react-router';
import { getPartyData } from '../../../../apis';

export const Route = createFileRoute('/_private/parties/$partyId/')({
    component: () => <ViewParty />,
    loader: async ({ params }) => getPartyData(params.partyId),
});

function ViewParty() {
    const data = Route.useLoaderData();
    console.log(data);

    return (
        <div>
            <article className="prose">
                <h2>This is the route to view a party!!!</h2>
            </article>
        </div>
    );
}
