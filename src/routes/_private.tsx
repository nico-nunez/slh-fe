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
import Navbar from '../components/Navbar';

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
        <div>
            <Navbar />
            <section className="p-4">
                <Outlet />
            </section>
        </div>
    );
}
