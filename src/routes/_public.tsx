import { Outlet, createFileRoute } from '@tanstack/react-router';

// UTILS
import { z } from 'zod';
import Background from '../components/Snowflake-Animations/Background';

// ROUTING
export const Route = createFileRoute('/_public')({
    validateSearch: z.object({
        redirect: z.string().optional().catch(''),
    }),
    component: PublicLayout,
});

// PUBLIC LAYOUT (PATHLESS)
function PublicLayout() {
    return (
        <>
            <div className="prose absolute left-1/2 top-1/3 flex w-96 -translate-x-1/2 -translate-y-1/3 flex-col text-center">
                <h1 className="prose-h1: mb-4 capitalize">
                    santa's lil' helper
                </h1>
                <Outlet />
            </div>
            <Background />
        </>
    );
}
