import { useState } from 'react';

// API REQUESTS
import { publishNewList } from '../../../apis';
import { useMutation } from '@tanstack/react-query';

// COMPONENTS
import ListItem from '../../../components/Lists/List-Item';

// ROUTING
import { useRouter, createFileRoute } from '@tanstack/react-router';
import ListItemForm from '../../../components/Lists/List-Item-Form';
export const Route = createFileRoute('/_private/lists/new')({
    component: () => <CreateList />,
});

// CREATE NEW LIST FORM
function CreateList() {
    const router = useRouter();

    // Form state
    const [title, setTitle] = useState('');
    const [isPublic, setIsPublic] = useState(true);
    const [items, setItems] = useState<NewListItem[]>([]);
    const [editItem, setEditItem] = useState<NewListItem>();

    // Form error message
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const mutate = useMutation({
        mutationKey: ['lists'],
        mutationFn: (newList: POSTPublishListBody) => publishNewList(newList),
        onSuccess: (data) => {
            console.log(data);
            setErrorMsg('');
            setTitle('');
            setItems([]);
        },
    });

    // HANDLE ADD ITEM TO LIST
    const onAddItem = (item: NewListItem | Error) => {
        if (item instanceof Error) {
            setErrorMsg(item.message);
        } else {
            setItems((prev) => {
                if (item._id) {
                    prev[parseInt(item._id)] = { ...item };
                    setEditItem(undefined);
                } else {
                    prev.push(item);
                }
                return [...prev];
            });
        }
    };

    // HANDLE TITLE INPUT
    const onChangeTitle = ({
        currentTarget: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(value);
    };

    // HANDLE IS_PUBLIC TOGGLE
    const onChangePublic = ({
        currentTarget: { checked },
    }: React.FormEvent<HTMLInputElement>) => {
        setIsPublic(checked);
    };

    // HANDLE EDITING OF ITEM
    const onEditItem = (item: NewListItem) => {
        console.log(item);
        setEditItem(item);
    };

    // HANDLE UPDATING OF ITEM
    const onDeleteItem = (itemId?: string) => {
        if (!itemId) return;
        setItems((prev) =>
            prev.filter((_item, index) => index.toString() !== itemId)
        );
    };

    const onPreventSubmitOnEnter = (
        evt: React.KeyboardEvent<HTMLFormElement>
    ) => {
        if (evt.key === 'Enter') {
            evt.preventDefault();
        }
    };

    // Handle new list form submission
    const onSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();

        mutate.mutate({ title, items, public: isPublic });
    };

    // Handle discarding of new list
    const onDiscard = () => {
        router.history.back();
    };

    // JSX
    return (
        <div className="card fixed left-1/2 top-1/2 w-96 -translate-x-1/2 -translate-y-1/2 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="card-title">New List</div>
                {errorMsg ? (
                    <div className="alert alert-error">
                        <span>{errorMsg}</span>
                    </div>
                ) : null}
                <form
                    id="new-list-form"
                    className="flex flex-col"
                    onSubmit={onSubmit}
                    onKeyDown={onPreventSubmitOnEnter}
                >
                    {/* --- TITLE --- */}
                    <div className="form-control">
                        <label className="label-text">Title:</label>
                        <input
                            type="text"
                            name="title"
                            placeholder="Title (required)"
                            className="input input-bordered w-full max-w-xs"
                            onChange={onChangeTitle}
                            value={title}
                            required
                        />

                        {/* --- IS PUBLIC --- */}
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start gap-4">
                                <input
                                    type="checkbox"
                                    name="public"
                                    className="toggle"
                                    onChange={onChangePublic}
                                    checked={isPublic}
                                />
                                <span className="label-text">Public</span>
                            </label>
                        </div>
                        <div className="divider" />
                    </div>

                    {/* --- LIST ITEMS --- */}
                    <div className="flex flex-col gap-4">
                        <label className="label-text">Items:</label>
                        <ul className="flex flex-col gap-1">
                            {items.map((item, index) => (
                                <ListItem
                                    key={index}
                                    data={{
                                        ...item,
                                        _id: index.toString(),
                                    }}
                                    onEdit={onEditItem}
                                    onDelete={onDeleteItem}
                                />
                            ))}
                        </ul>
                    </div>
                </form>

                <div className="divider" />

                {/* --- LIST ITEM FORM --- */}
                <ListItemForm data={editItem} onSubmit={onAddItem} />
                <div className="divider" />

                {/* --- SUBMIT / CANCEL --- */}
                <div className="card-actions items-baseline justify-between">
                    <button
                        className="btn btn-ghost btn-sm"
                        onClick={onDiscard}
                    >
                        Discard
                    </button>
                    <button
                        type="submit"
                        form="new-list-form"
                        className="btn btn-primary btn-sm"
                    >
                        Publish
                    </button>
                </div>
            </div>
        </div>
    );
}
