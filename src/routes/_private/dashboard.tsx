import { createFileRoute, Link } from '@tanstack/react-router';
import { useAuthContext } from '../../contexts';
import { useQuery } from '@tanstack/react-query';
import { getDashboardData } from '../../apis';

export const Route = createFileRoute('/_private/dashboard')({
    component: () => <Dashboard />,
});

function Dashboard() {
    const { user } = useAuthContext();
    const { data } = useQuery({
        queryKey: [user?.id],
        queryFn: getDashboardData,
    });

    return user ? (
        <section>
            <div className="flex flex-col gap-4 md:flex-row md:justify-between">
                <section>
                    <div className="flex flex-col gap-4">
                        <div className="max-h-42 max-w-42 m-auto">
                            {user.avatar ? <img src={user.avatar} /> : null}
                        </div>
                        <article className="prose text-center">
                            <h2>{user.displayName}</h2>
                        </article>
                        <div className="divider"></div>
                    </div>
                    <article className="prose mb-0">
                        <h4>Notifications</h4>
                    </article>
                    <ul>
                        {user.notifications.map((notification) => (
                            <li className="card">
                                <div className="card-body rounded">
                                    {notification.content}
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="flex-1 md:border-l md:px-8">
                    {/* --- LISTS --- */}
                    <div className="flex flex-col">
                        <div className="divider mb-0"></div>
                        <article className="prose flex max-w-none items-center justify-between">
                            <h4>My Lists</h4>
                            <button className="btn btn-ghost">New</button>
                        </article>
                        <ul>
                            {data?.lists.map((list) => (
                                <Link key={list._id}>{list.title}</Link>
                            ))}
                        </ul>
                    </div>

                    {/* --- PARTIES --- */}
                    <div className="flex flex-col">
                        <div className="divider mb-0"></div>
                        <article className="prose flex max-w-none items-center justify-between">
                            <h4>My Parties</h4>
                            <button className="btn btn-ghost">New</button>
                        </article>
                        <ul>
                            {data?.parties.map((party) => (
                                <Link key={party._id}>{party.title}</Link>
                            ))}
                        </ul>
                    </div>

                    {/* --- SELECTIONS --- */}
                    <div className="flex flex-col">
                        <div className="divider mb-0"></div>
                        <article className="prose flex max-w-none items-center justify-between">
                            <h4>My Selections</h4>
                            <button className="btn btn-ghost">New</button>
                        </article>
                        <ul>
                            <li>...selections</li>
                        </ul>
                    </div>
                </section>
            </div>
        </section>
    ) : null;
}
