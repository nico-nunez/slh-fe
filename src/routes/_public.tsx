import { Outlet, createFileRoute } from '@tanstack/react-router';

import { z } from 'zod';

export const Route = createFileRoute('/_public')({
    validateSearch: z.object({
        redirect: z.string().optional().catch(''),
    }),
    component: PublicLanding,
});

function PublicLanding() {
    return (
        <div className="absolute left-1/2 top-1/3 flex w-96 -translate-x-1/2 -translate-y-1/3 flex-col gap-4 text-center">
            <h1 className="capitalize">santa's lil' helper</h1>
            <Outlet />
        </div>
    );
}
