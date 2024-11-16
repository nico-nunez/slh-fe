import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/parties/')({
    component: () => <Parties />,
});

function Parties() {
    return (
        <>
            <div>
                <article className="prose">
                    <h2>View all parties!!!</h2>
                </article>
            </div>
        </>
    );
}
