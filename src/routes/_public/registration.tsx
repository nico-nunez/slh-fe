import { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';

type RegistrationFormState = {
    email: string;
    password: string;
    confirmPassword: string;
};

const DEFAULT_STATE: RegistrationFormState = {
    email: '',
    password: '',
    confirmPassword: '',
};

// ROUTING
export const Route = createFileRoute('/_public/registration')({
    component: Registration,
});

// REGISTRATION PAGE
function Registration() {
    const navigate = Route.useNavigate();
    const [state, setState] = useState<RegistrationFormState>({
        ...DEFAULT_STATE,
    });

    console.log(state);

    // Handle form input changes
    const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = evt.currentTarget;
        setState((prev) => ({ ...prev, [name]: value }));
    };

    // Handle cancel registration
    const onCancel = async () => {
        await navigate({ to: '/login' });
    };

    // Handle form submission - TODO
    const onSubmit = (evt: React.FormEvent) => {
        evt.preventDefault();
    };

    // JSX
    return (
        <div>
            <form className="px-8" onSubmit={onSubmit} id="registration-form">
                <fieldset className="flex flex-col gap-4 border-gray-400 text-left">
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
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label
                            className="text-gray-500"
                            htmlFor="confirm-password"
                        >
                            Confirm Password:
                        </label>
                        <input
                            className="h-10 rounded-lg px-2"
                            placeholder="********"
                            type="password"
                            name="confirm-password"
                            onChange={onChange}
                            required
                        />
                    </div>
                </fieldset>
            </form>
            <div className="flex flex-col items-center gap-2">
                <button
                    form="registration-form"
                    type="submit"
                    className="text-lg text-gray-600"
                >
                    Register
                </button>
                <button className="text-sm text-gray-600" onClick={onCancel}>
                    Back to login
                </button>
            </div>
        </div>
    );
}
