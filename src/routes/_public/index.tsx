import { useEffect } from 'react';
import { DEFAULT_ROUTE } from '../../constants';
import { createFileRoute } from '@tanstack/react-router';

// STATE
import { useAuth } from '../../contexts';

// ROUTING
export const Route = createFileRoute('/_public/')({
    component: Home,
});

// HOME PAGE
function Home() {
    const { redirect } = Route.useSearch();
    const { isAuthenticated } = useAuth();
    const navigate = Route.useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate({
                to: '/login',
                search: {
                    redirect: redirect || DEFAULT_ROUTE,
                },
            });
        } else {
            navigate({ to: redirect || DEFAULT_ROUTE });
        }
    }, [isAuthenticated, redirect]);

    return null;
}
