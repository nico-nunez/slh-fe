import { APP_ROUTES } from '../constants';
import { useAuthContext } from '../contexts';
import { Link } from '@tanstack/react-router';

const DEFAULT_AVATAR =
    'https://santas-lil-helper-app.s3.us-east-2.amazonaws.com/images/avatars/profile/penguin-min.png';

const NAV_LINKS = [
    { label: 'Home', to: APP_ROUTES.DASHBOARD },
    { label: 'Lists', to: APP_ROUTES.LISTS },
];

const renderedLinks = NAV_LINKS.map(({ to, label }) => (
    <li key={to}>
        <Link to={to} activeProps={{ className: 'bg-none' }}>
            {label}
        </Link>
    </li>
));

function Navbar() {
    const { user, logout } = useAuthContext();

    // JSX
    return (
        <nav className="navbar bg-base-300">
            <div className="flex-1">
                <Link className="text-2xl font-bold" to="/dashboard">
                    Santa's Lil Helper
                </Link>
            </div>

            {user ? (
                <div className="flex gap-3">
                    <div className="relative hidden md:block">
                        <i className="icon-notification -translate-x-2 translate-y-1" />
                        {user.notifications.length ? (
                            <span className="absolute -right-1 -top-1 block h-6 w-6 rounded-full bg-white text-center text-sm">
                                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    {user.notifications.length}
                                </span>
                            </span>
                        ) : null}
                    </div>

                    <div className="dropdown dropdown-end pe-4">
                        <div
                            className="flex flex-row items-center gap-4"
                            role="button"
                            tabIndex={0}
                        >
                            <img
                                className="h-12 w-12"
                                src={user?.avatar || DEFAULT_AVATAR}
                                alt="avatar"
                            />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                        >
                            {renderedLinks}
                            <li>
                                <a onClick={logout}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            ) : null}
        </nav>
    );
}

export default Navbar;
