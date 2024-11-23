import { useMemo } from 'react';

// API REQUESTS
import { getPublicLists } from '../../../apis';
import { useQuery } from '@tanstack/react-query';

// COMPONENTS
import ListCard from '../../../components/Lists/List-Card';

// ROUTING
import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/lists/')({
    component: () => <Lists />,
});

// PUBLIC LISTS PAGE
function Lists() {
    const { data } = useQuery({
        queryKey: ['lists'],
        queryFn: getPublicLists,
    });

    const renderedLists = useMemo(
        () =>
            data?.lists.map((list) => (
                <ListCard data={list} key={list._id} openExpanded={true} />
            )),
        [data?.lists]
    );

    return (
        <div>
            <article className="prose mx-auto py-8 text-center">
                <div className="flex items-end justify-center gap-4">
                    <h1 className="mb-0">Christmas Lists</h1>
                    <Link to="/lists/new" className="btn btn-sm">
                        New
                    </Link>
                </div>
            </article>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:items-start">
                {renderedLists}
            </div>
        </div>
    );
}
