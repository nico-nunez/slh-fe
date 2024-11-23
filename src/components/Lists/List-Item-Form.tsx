import { useEffect, useState } from 'react';

interface ListItemFormProps {
    data?: NewListItem;
    onSubmit: (data: NewListItem | Error) => void;
}

const DEFAULT_ITEM: NewListItem = {
    description: '',
    link: '',
};

function ListItemForm({ data, onSubmit }: ListItemFormProps) {
    const [item, setItem] = useState({ ...DEFAULT_ITEM });

    useEffect(() => {
        if (!data) return;
        setItem({ ...data });
    }, [data]);

    const onSubmitForm = (evt: React.FormEvent) => {
        evt.preventDefault();

        if (!item.description) {
            onSubmit(new Error('Item description required.'));
        } else {
            onSubmit(item);
            setItem({ ...DEFAULT_ITEM });
        }
    };

    return (
        <form onSubmit={onSubmitForm} className="flex flex-col gap-4">
            <input
                type="text"
                placeholder="Description (required)"
                onChange={(evt) => {
                    const { value } = evt.currentTarget;
                    setItem((prev) => ({
                        ...prev,
                        description: value,
                    }));
                }}
                value={item.description}
                className="input input-bordered w-full max-w-xs"
            />
            <input
                type="text"
                placeholder="Link (optional)"
                onChange={(evt) => {
                    const { value } = evt.currentTarget;
                    setItem((prev) => ({
                        ...prev,
                        link: value,
                    }));
                }}
                value={item.link}
                className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="btn">
                {data ? 'Update' : 'Add'} Item
            </button>
        </form>
    );
}

export default ListItemForm;
