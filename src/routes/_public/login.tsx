import { useEffect, useState } from 'react';
import {
    useRouter,
    useRouterState,
    createFileRoute,
} from '@tanstack/react-router';

import { z } from 'zod';
import { useAuth } from '../../contexts';

type LoginFormState = {
    email: string;
    password: string;
};

const DEFAULT_STATE: LoginFormState = {
    email: '',
    password: '',
};

export const Route = createFileRoute('/_public/login')({
    validateSearch: z.object({
        redirect: z.string().optional().catch(''),
    }),
    component: LoginForm,
});

function LoginForm() {
    const router = useRouter();
    const { isAuthenticated, login } = useAuth();
    const navigate = Route.useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isLoading = useRouterState({ select: (s) => s.isLoading });

    const search = Route.useSearch();
    const [state, setState] = useState<LoginFormState>({ ...DEFAULT_STATE });

    console.log('[/login] isAuthenticated:', isAuthenticated);
    useEffect(() => {
        if (isAuthenticated) {
            console.log('navigating to:', search.redirect);
            navigate({ to: search.redirect || '/dashboard' });
        }
    }, [isAuthenticated]);

    // Handle form input changes
    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = evt.currentTarget;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    // Handle register click
    const onClickRegister = () => {
        navigate({ to: '/registration' });
    };

    // Handle forgot password click
    const onClickForgotPassword = () => {
        navigate({ to: '/forgot-password' });
    };

    // Handle login form submission
    const onFormSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
        setIsSubmitting(true);

        try {
            evt.preventDefault();
            const data = new FormData(evt.currentTarget);
            const fieldValue = data.get('email');

            if (!fieldValue) return;
            const email = fieldValue.toString();
            await login(email);

            await router.invalidate();

            await navigate({ to: search.redirect || '/dashboard' });
        } catch (error) {
            console.error('Error logging in: ', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const isLoggingIn = isLoading || isSubmitting;

    // JSX
    return (
        <div>
            <form className="px-8" onSubmit={onFormSubmit} id="landing-form">
                <fieldset
                    disabled={isLoggingIn}
                    className="flex flex-col gap-4 border-gray-400 text-left"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-500" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="h-10 rounded-lg px-2"
                            name="email"
                            type="email"
                            placeholder="santa@northpole.com"
                            onChange={onChange}
                            value={state.email}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-gray-500" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="h-10 rounded-lg px-2"
                            placeholder="********"
                            type="password"
                            name="password"
                            onChange={onChange}
                            value={state.password}
                            required
                        />
                    </div>
                </fieldset>
                <div className="flex justify-between">
                    <a
                        className="text-sm italic text-blue-500"
                        onClick={onClickRegister}
                    >
                        register
                    </a>
                    <a
                        className="text-sm italic text-blue-500"
                        onClick={onClickForgotPassword}
                    >
                        forgot password
                    </a>
                </div>
            </form>
            <div className="flex justify-center gap-4">
                <button
                    form="landing-form"
                    type="submit"
                    className="text-lg text-gray-600"
                >
                    Login
                </button>
            </div>
        </div>
    );
}
