import {
    Link,
    Outlet,
    useRouter,
    createFileRoute,
} from '@tanstack/react-router';
import { useEffect } from 'react';
import { DEFAULT_ROUTE } from '../constants';

// STATE
import { useAuth } from '../contexts';

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
    const router = useRouter();
    const search = Route.useSearch();
    const navigate = Route.useNavigate();
    const { isAuthenticated, logout } = useAuth();

    // Check auth and redirect to login if necessary
    useEffect(() => {
        if (!isAuthenticated) {
            navigate({
                to: '/login',
                search: {
                    redirect: search.redirect || DEFAULT_ROUTE,
                },
            });
        }
    }, [isAuthenticated]);

    // Handle logout
    const handleLogout = async () => {
        if (window.confirm('Are you sure you want to logout?')) {
            await logout();

            await router.invalidate();

            await navigate({ to: '/' });
        }
    };

    // JSX
    return (
        <div className="h-full p-2">
            <h1>Authenticated Route</h1>
            <p>This route's content is only visible to authenticated users.</p>
            <ul className="flex gap-2 py-2">
                <li>
                    <Link
                        to={DEFAULT_ROUTE}
                        className="hover:underline data-[status='active']:font-semibold"
                    >
                        Dashboard
                    </Link>
                </li>
                <li>
                    <button
                        type="button"
                        className="hover:underline"
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </li>
            </ul>
            <hr />
            <Outlet />
        </div>
    );
}
