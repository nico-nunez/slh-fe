// API REQUESTS
import { publishNewList } from '../../../apis';
import { useMutation } from '@tanstack/react-query';

// COMPONENTS
import ListForm, { ListFormState } from '../../../components/Lists/List-Form';

// ROUTING
import { useRouter, createFileRoute } from '@tanstack/react-router';
export const Route = createFileRoute('/_private/lists/new')({
    component: () => <CreateList />,
});

// CREATE NEW LIST FORM
function CreateList() {
    const router = useRouter();

    const mutate = useMutation({
        mutationKey: ['lists'],
        mutationFn: (newList: PublishListBody) => publishNewList(newList),
        onSuccess: () => {
            router.history.back();
        },
    });

    // Handle new list form submission
    const onSubmit = (data: ListFormState) => {
        mutate.mutate(data);
    };

    // Handle discarding of new list
    const onDiscard = () => {
        router.history.back();
    };

    // JSX
    return <ListForm onCancel={onDiscard} onSubmit={onSubmit} />;
}
