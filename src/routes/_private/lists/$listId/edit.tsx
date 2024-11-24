import { useMutation } from '@tanstack/react-query';
import { getListData, updateList } from '../../../../apis';

// COMPONENTS
import ListForm, {
    ListFormState,
} from '../../../../components/Lists/List-Form';

// ROUTING
import { createFileRoute, useRouter } from '@tanstack/react-router';
export const Route = createFileRoute('/_private/lists/$listId/edit')({
    component: () => <EditList />,
    loader: async ({ params }) => {
        console.log('params', params);
        return getListData(params.listId);
    },
});

// EDIT LIST PAGE
function EditList() {
    const router = useRouter();
    const data = Route.useLoaderData();

    const mutatation = useMutation({
        mutationFn: ({ id, body }: { id: string; body: PublishListBody }) =>
            updateList(id, body),
    });

    const onDiscard = () => {
        router.history.back();
    };

    const onSubmit = (updatedData: ListFormState) => {
        mutatation.mutate({
            id: data._id,
            body: updatedData,
        });
    };

    // JSX
    return <ListForm data={data} onCancel={onDiscard} onSubmit={onSubmit} />;
}
