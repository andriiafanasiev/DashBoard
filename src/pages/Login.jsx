import React from 'react';
import useAuth from '../hooks/useAuth';
function Login() {
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const handleSubmit = () => {
        setIsAuthenticated(true);
    };
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
