import { useEffect, useState } from 'react';
import ListItem from './List-Item';
import ListItemForm from './List-Item-Form';

export type ListFormState = {
    title: string;
    public: boolean;
    items: NewListItem[];
};

interface ListFormProps {
    data?: ListData;
    onCancel: () => void;
    onSubmit: (state: ListFormState) => void;
}

const DEFAULT_STATE: ListFormState = {
    title: '',
    public: true,
    items: [],
};

function ListForm({ data, onCancel, onSubmit }: ListFormProps) {
    // Form state
    const [formState, setFormState] = useState<ListFormState>({
        ...DEFAULT_STATE,
    });

    // Item currently editing
    const [editItem, setEditItem] = useState<NewListItem>();

    // Form error message
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    useEffect(() => {
        if (!data) return;
        setFormState({
            title: data.title,
            items: data.items.map(({ description, link }) => ({
                description,
                link,
            })),
            public: data.public,
        });
    }, [data]);

    console.log(formState);

    // HANDLE ADD ITEM TO LIST
    const onAddItem = (item: NewListItem | Error) => {
        if (item instanceof Error) {
            setErrorMsg(item.message);
        } else {
            setFormState((prev) => {
                const items = [...prev.items];
                if (item._id) {
                    items[parseInt(item._id)] = { ...item };
                    setEditItem(undefined);
                } else {
                    items.push(item);
                }
                return { ...prev, items };
            });
        }
    };

    // HANDLE TITLE INPUT
    const onChangeTitle = ({
        currentTarget: { value },
    }: React.ChangeEvent<HTMLInputElement>) => {
        setFormState((prev) => ({ ...prev, title: value }));
    };

    // HANDLE IS_PUBLIC TOGGLE
    const onChangePublic = ({
        currentTarget: { checked },
    }: React.FormEvent<HTMLInputElement>) => {
        setFormState((prev) => ({ ...prev, public: checked }));
    };

    // HANDLE EDITING OF ITEM
    const onEditItem = (item: NewListItem) => {
        setEditItem(item);
    };

    // HANDLE UPDATING OF ITEM
    const onDeleteItem = (itemId?: string) => {
        if (!itemId) return;
        setFormState((prev) => ({
            ...prev,
            items: prev.items.filter(
                (_item, index) => index.toString() !== itemId
            ),
        }));
    };

    const onPreventSubmitOnEnter = (
        evt: React.KeyboardEvent<HTMLFormElement>
    ) => {
        if (evt.key === 'Enter') {
            evt.preventDefault();
        }
    };

    // Handle new list form submission
    const onSubmitForm = (evt: React.FormEvent) => {
        evt.preventDefault();

        onSubmit(formState);
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
                    onSubmit={onSubmitForm}
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
                            value={formState.title}
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
                                    checked={formState.public}
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
                            {formState.items.map((item, index) => (
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
                    <button className="btn btn-ghost btn-sm" onClick={onCancel}>
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

export default ListForm;
