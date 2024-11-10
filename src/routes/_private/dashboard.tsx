import { createFileRoute } from '@tanstack/react-router';
import { useAuthContext } from '../../contexts';

export const Route = createFileRoute('/_private/dashboard')({
    component: () => <Dashboard />,
});

function Dashboard() {
    const { user } = useAuthContext();

    return user ? (
        <section>
            <div className="flex flex-col gap-8 md:flex-row md:justify-between">
                <section>
                    <div className="flex flex-col gap-4">
                        <div className="max-h-42 max-w-42">
                            {user.avatar ? <img src={user.avatar} /> : null}
                        </div>
                        <article className="prose text-center">
                            <h1>{user.displayName}</h1>
                        </article>
                        <div className="divider"></div>
                    </div>
                    <article className="prose mb-0">
                        <h4>Notifications</h4>
                    </article>
                    <ul>
                        <li>...Notifications</li>
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
                            <li>...lists</li>
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
                            <li>...parties</li>
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
