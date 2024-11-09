import { useEffect } from 'react';
import { DEFAULT_ROUTE } from '../../constants';
import { createFileRoute } from '@tanstack/react-router';

// STATE
import { useAuthContext } from '../../contexts';

// ROUTING
export const Route = createFileRoute('/_public/')({
    component: Home,
});

// HOME PAGE
function Home() {
    const navigate = Route.useNavigate();
    const { redirect } = Route.useSearch();
    const { isAuthenticated } = useAuthContext();

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
