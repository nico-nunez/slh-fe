import { createFileRoute } from '@tanstack/react-router';
import { getPartyData } from '../../../../apis';

export const Route = createFileRoute('/_private/parties/$partyId/')({
    component: () => <ViewParty />,
    loader: async ({ params }) => getPartyData(params.partyId),
});

function ViewParty() {
    const data = Route.useLoaderData();

    return (
        <div>
            <div className="card mx-auto bg-base-100 shadow-xl md:w-96">
                <div className="card-body">
                    <div>
                        <span className="card-title justify-center text-2xl">
                            {data.party.title}
                        </span>
                        <div className="text-center text-sm italic">
                            Creator: {data.party.creator.displayName}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
