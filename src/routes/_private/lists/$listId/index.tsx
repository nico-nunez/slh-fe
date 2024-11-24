import { getListData } from '../../../../apis';

import { createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/_private/lists/$listId/')({
    component: () => <ViewList />,
    loader: async ({ params }) => {
        console.log(params);
        return getListData(params.listId);
    },
});

function ViewList() {
    const data = Route.useLoaderData();

    console.log(data);

    return (
        <div>
            <article className="prose">
                <h2>This is the route to view a list!!!</h2>
            </article>
        </div>
    );
}
