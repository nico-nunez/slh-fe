import { useQuery } from '@tanstack/react-query';
import { createFileRoute, Link } from '@tanstack/react-router';
import { getPublicLists } from '../../../apis';
import { useMemo } from 'react';

export const Route = createFileRoute('/_private/lists/')({
    component: () => <Lists />,
});

function Lists() {
    const { data } = useQuery({
        queryKey: ['lists'],
        queryFn: getPublicLists,
    });

    const renderedLists = useMemo(
        () =>
            data?.lists.map((list) => (
                <div className="card w-96 bg-base-100 shadow-xl" key={list._id}>
                    <div className="bg-base-200 px-5 py-7">
                        <h2 className="card-title">{list.title}</h2>
                        <p className="italic">{list.creator.displayName}</p>
                        <div className="card-actions justify-end">
                            <Link
                                to={`/lists/${list._id}`}
                                className="btn btn-primary btn-sm"
                            >
                                View
                            </Link>
                        </div>
                    </div>
                    <div className="card-body overflow-hidden">
                        <ul className="max-h-32 overflow-hidden text-left">
                            {list.items.slice(0, 4).map((item) => (
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
                            {list.items.length > 4 ? (
                                <li className="italic">...more</li>
                            ) : null}
                        </ul>
                    </div>
                </div>
            )),
        [data?.lists]
    );

    return (
        <div>
            <article className="prose mx-auto py-8 text-center">
                <h1>Christmas Lists</h1>
            </article>
            <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:flex-wrap md:items-start">
                {renderedLists}
            </div>
        </div>
    );
}
