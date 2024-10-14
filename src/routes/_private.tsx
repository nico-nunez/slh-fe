import {
    Link,
    Outlet,
    useRouter,
    createFileRoute,
} from '@tanstack/react-router';

import { z } from 'zod';

import { useAuth } from '../contexts';
import { useEffect } from 'react';

export const Route = createFileRoute('/_private')({
    validateSearch: z.object({
        redirect: z.string().optional().catch(''),
    }),
    component: AuthLayout,
});

function AuthLayout() {
    const router = useRouter();
    const search = Route.useSearch();
    const navigate = Route.useNavigate();
    const { isAuthenticated, logout } = useAuth();

    useEffect(() => {
        console.log('[/_private] isAuthenticated:', isAuthenticated);
        if (!isAuthenticated) {
            console.log('redirecting to login....');
            navigate({
                to: '/login',
                search: {
                    redirect: search.redirect || '/dashboard',
                },
            });
        }
    }, [isAuthenticated]);

    const handleLogout = async () => {
        if (window.confirm('Are you sure you want to logout?')) {
            await logout();

            await router.invalidate();

            await navigate({ to: '/' });
        }
    };

    console.log('private rendered...');

    return (
        <div className="h-full p-2">
            <h1>Authenticated Route</h1>
            <p>This route's content is only visible to authenticated users.</p>
            <ul className="flex gap-2 py-2">
                <li>
                    <Link
                        to="/dashboard"
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
