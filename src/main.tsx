import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AuthProvider, useAuthContext } from './contexts';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

// Create a new router instance
const router = createRouter({
    routeTree,
    context: {
        auth: null,
    },
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router;
    }
}

function InnerApp() {
    const auth = useAuthContext();
    return <RouterProvider router={router} context={{ auth }} />;
}

function App() {
    return (
        <AuthProvider>
            <InnerApp />
        </AuthProvider>
    );
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
);
