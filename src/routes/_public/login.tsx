import {
    useRouter,
    useRouterState,
    createFileRoute,
} from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import { DEFAULT_ROUTE } from '../../constants';

// STATE
import { useAuth } from '../../contexts';

// UTILS
import { z } from 'zod';

type LoginFormState = {
    email: string;
    password: string;
};

const DEFAULT_STATE: LoginFormState = {
    email: '',
    password: '',
};

// ROUTING
export const Route = createFileRoute('/_public/login')({
    validateSearch: z.object({
        redirect: z.string().optional().catch(''),
    }),
    component: LoginForm,
});

// LOGIN PAGE
function LoginForm() {
    const router = useRouter();
    const { isAuthenticated, login } = useAuth();
    const navigate = Route.useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const isLoading = useRouterState({ select: (s) => s.isLoading });

    const search = Route.useSearch();
    const [state, setState] = useState<LoginFormState>({ ...DEFAULT_STATE });

    useEffect(() => {
        if (isAuthenticated) {
            navigate({ to: search.redirect || DEFAULT_ROUTE });
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
            const email = data.get('email')?.toString();
            const password = data.get('password')?.toString();

            if (!email || !password) return;

            await login(email, password);

            await router.invalidate();

            await navigate({ to: search.redirect || DEFAULT_ROUTE });
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
            <form
                className="form-control"
                onSubmit={onFormSubmit}
                id="landing-form"
            >
                <fieldset disabled={isLoggingIn} className="flex flex-col">
                    <div className="flex flex-col">
                        <label className="label" htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="input input-bordered"
                            name="email"
                            type="email"
                            placeholder="santa@northpole.com"
                            onChange={onChange}
                            value={state.email}
                            required
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="label" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="input input-bordered"
                            placeholder="********"
                            type="password"
                            name="password"
                            onChange={onChange}
                            value={state.password}
                            required
                        />
                    </div>
                </fieldset>
                <div className="flex flex-col gap-4 pt-4">
                    <div className="flex justify-between">
                        <a className="link" onClick={onClickRegister}>
                            register
                        </a>
                        <a className="link" onClick={onClickForgotPassword}>
                            forgot password
                        </a>
                    </div>
                    <div className="flex justify-center gap-4">
                        <button
                            form="landing-form"
                            type="submit"
                            className="btn"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
