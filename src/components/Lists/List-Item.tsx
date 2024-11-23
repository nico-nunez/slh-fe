interface ListItemProps {
    data: NewListItem;
    onEdit?: (item: NewListItem) => void;
    onDelete?: (id?: string) => void;
}

function ListItem({ data, onEdit, onDelete }: ListItemProps) {
    // Jsx
    return (
        <li
            key={data._id}
            className="flex max-w-full justify-between overflow-hidden"
        >
            {data.link ? (
                <a className="link flex-1" href={data.link} target="_blank">
                    {data.description}
                </a>
            ) : (
                <span title={data.description} className="flex-1">
                    {data.description}
                </span>
            )}
            <div className="flex items-start gap-2 pt-1">
                {onEdit ? (
                    <i className="icon-edit" onClick={() => onEdit(data)} />
                ) : null}
                {onDelete ? (
                    <i
                        className="icon-delete"
                        onClick={() => onDelete(data._id)}
                    />
                ) : null}
            </div>
        </li>
    );
}

export default ListItem;
