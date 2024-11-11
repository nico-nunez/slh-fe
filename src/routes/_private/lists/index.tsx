import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_private/lists/')({
    component: () => <Lists />,
});

function Lists() {
    return (
        <div>
            <article className="prose">
                <h1>This is the lists route!!!!!</h1>
            </article>
        </div>
    );
}
