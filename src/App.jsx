import Login from './pages/Login';
import useAuth from './hooks/useAuth';

function App() {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Login />;
    }
    return <div>Dashboard</div>;
}

export default App;
