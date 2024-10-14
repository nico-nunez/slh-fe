import { redirect, createFileRoute } from '@tanstack/react-router';

const fallback = '/dashboard';

export const Route = createFileRoute('/_public/')({
    beforeLoad: ({ context, search }) => {
        console.log('got to home');
        console.log('[/] context:', context);
        const redirectPath = search.redirect || fallback;

        if (context.auth?.isAuthenticated) {
            throw redirect({ to: redirectPath });
        } else {
            throw redirect({
                to: '/login',
                search: {
                    redirect: search.redirect || fallback,
                },
            });
        }
    },
    component: () => <div />,
});
