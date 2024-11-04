import {
    useState,
    useEffect,
    useContext,
    useCallback,
    createContext,
} from 'react';

import { loginUser, logoutUser } from '../apis';

export interface AuthContext {
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    user: string | null;
}

const AuthContext = createContext<AuthContext | null>(null);

const key = 'slh.auth.user';

function getStoredUser() {
    return localStorage.getItem(key);
}

function setStoredUser(user: string | null) {
    if (user) {
        localStorage.setItem(key, JSON.stringify(user));
    } else {
        localStorage.removeItem(key);
    }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<string | null>(getStoredUser());
    const isAuthenticated = !!user;

    const logout = useCallback(async () => {
        const res = await logoutUser();

        console.log(res);
        setStoredUser(null);
        setUser(null);
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        const user = await loginUser(email, password);
        console.log(user);
        setStoredUser(user);
        setUser(user);
    }, []);

    useEffect(() => {
        setUser(getStoredUser());
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}
