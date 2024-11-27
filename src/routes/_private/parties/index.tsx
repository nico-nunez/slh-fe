import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { getPublicParties } from '../../../apis';
import { useMemo } from 'react';
import PartyCard from '../../../components/Parties/Party-Card';

export const Route = createFileRoute('/_private/parties/')({
    component: () => <Parties />,
});

function Parties() {
    const { data } = useQuery({
        queryKey: ['public', 'parties'],
        queryFn: getPublicParties,
    });

    const renderedParties = useMemo(
        () => data?.map((partyData) => <PartyCard data={partyData} />),
        [data]
    );

    return (
        <div>
            <article className="prose mx-auto py-8 text-center">
                <div className="flex items-end justify-center gap-4">
                    <h1 className="mb-0">Secret Santa Parties</h1>
                    <Link to="/parties/new" className="btn btn-sm">
                        New
                    </Link>
                </div>
            </article>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:items-start">
                {renderedParties}
            </div>
        </div>
    );
}
