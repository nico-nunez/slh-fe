import { useState } from 'react';

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
            </div>
            <div className="card-body collapse-content py-0">
                <ul className="py-6 text-left">
                    {list.items.map((item) => (
                        <li key={item._id}>
                            {item.link ? (
                                <a
                                    className="link"
                                    href={item.link}
                                    target="_blank"
                                >
                                    {item.description}
                                </a>
                            ) : (
                                <span>{item.description}</span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ListCard;
