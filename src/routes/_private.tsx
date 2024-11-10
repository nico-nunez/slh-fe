import { useEffect } from 'react';
import { APP_ROUTES } from '../constants';
import { Outlet, createFileRoute } from '@tanstack/react-router';

// STATE
import { useAuthContext } from '../contexts';

// UTILS
import { z } from 'zod';

// ROUTING
export const Route = createFileRoute('/_private')({
    validateSearch: z.object({
        redirect: z.string().optional().catch(''),
    }),
    component: PrivateLayout,
});

// PRIVATE LAYOUT (PATHLESS)
function PrivateLayout() {
    const search = Route.useSearch();
    const navigate = Route.useNavigate();
    const { isAuthenticated } = useAuthContext();

    // Check auth and redirect to login if necessary
    useEffect(() => {
        if (!isAuthenticated) {
            navigate({
                to: '/login',
                search: {
                    redirect: search.redirect || APP_ROUTES.DEFAULT_ROUTE,
                },
            });
        }
    }, [isAuthenticated]);

    // JSX
    return (
        <div>
            <section className="p-4">
                <Outlet />
            </section>
        </div>
    );
}
