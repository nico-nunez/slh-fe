import { useAuth } from '../contexts';

function Navbar() {
    const { logout } = useAuth();

    // JSX
    return (
        <nav className="navbar bg-base-300">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">Santa's Lil Helper</a>
            </div>
            <div className="dropdown dropdown-end pe-4">
                <div role="button" tabIndex={0}>
                    <img
                        className="h-12 w-12"
                        src="https://santas-lil-helper-app.s3.us-east-2.amazonaws.com/images/avatars/profile/penguin-min.png"
                        alt="avatar"
                    />
                </div>
                <ul
                    tabIndex={0}
                    className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"
                >
                    <li>
                        <a onClick={logout}>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
