import './index.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ToastContainer, toast } from 'react-toastify';
import { AuthProvider, useAuthContext } from './contexts';

// Import the generated route tree
import { routeTree } from './routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import axios from 'axios';

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

// HANDLE REQUEST SUCCESS MESSAGES (SUCCESS TOAST)
const onSuccess = (data: any) => {
    if (typeof data?.message === 'string') {
        toast.success(data.message);
    }
};

// HANDLE REQUEST ERRORS (ERROR TOAST)
const onError = (error: Error) => {
    let message =
        error.message ||
        'An unexpected error occurred.  Please contact support.';

    if (axios.isAxiosError<{ errorMessage: string }>(error)) {
        message = error.response?.data.errorMessage || message;
    }
    toast.error(message);
};

const queryClient = new QueryClient({
    queryCache: new QueryCache({
        onSuccess,
        onError,
    }),
    mutationCache: new MutationCache({
        onSuccess,
        onError,
    }),
});

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
        <QueryClientProvider client={queryClient}>
            <App />
            <ToastContainer theme="colored" />
        </QueryClientProvider>
    </StrictMode>
);
