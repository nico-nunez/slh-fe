import { useState } from 'react';

// COMPONENTS
import ListItem from './List-Item';

interface ListCardProps {
    data: ListData;
    openExpanded?: boolean;
}

function ListCard({ data: list, openExpanded = false }: ListCardProps) {
    const [showContent, setShowContent] = useState(openExpanded);

    // JSX
    return (
        <div
            className="card collapse collapse-arrow w-96 bg-base-100 shadow-xl"
            key={list._id}
        >
            <input
                type="checkbox"
                onChange={() => setShowContent((prev) => !prev)}
                checked={showContent}
            />
            <div className="collapse-title bg-base-200 px-5 py-7">
                <h2 className="card-title">{list.title}</h2>
                <p className="italic">{list.creator.displayName}</p>
                <span
                    className={`${showContent ? 'hidden' : 'text-xs italic'}`}
                >
                    {list.items.length} items
                </span>
            </div>
            <div className="card-body collapse-content py-0">
                <ul className="py-6 text-left">
                    {list.items.map((item) => (
                        <ListItem data={item} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListCard;
