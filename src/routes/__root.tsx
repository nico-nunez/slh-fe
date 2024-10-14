import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

import type { AuthContext } from '../contexts/auth';

interface MyRouterContext {
    auth: AuthContext | null;
}

const isDevelopment = import.meta.env.MODE === 'development';

export const Route = createRootRouteWithContext<MyRouterContext>()({
    component: () => (
        <main>
            <Outlet />
            {isDevelopment ? (
                <TanStackRouterDevtools
                    position="bottom-right"
                    initialIsOpen={false}
                />
            ) : null}
        </main>
    ),
    notFoundComponent: () => {
        return (
            <div className="text-center">
                <h1>Page not found :( </h1>
            </div>
        );
    },
});
