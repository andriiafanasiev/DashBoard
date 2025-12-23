import React from 'react';
import useAuth from '../hooks/useAuth';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
function Login() {
    const { setIsAuthenticated } = useAuth();
    const handleSubmit = () => {
        setIsAuthenticated(true);
    };
    return (
        <div className="flex flex-col max-w-lg mx-auto items-center justify-center h-screen">
            <h1 className="text-2xl font-bold">Login</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-2 w-full max-w-sm mt-4"
            >
                <Input type="text" placeholder="Username" />
                <Input type="password" placeholder="Password" />
                <Button className="mt-4 px-6 py-2 mx-auto" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;
