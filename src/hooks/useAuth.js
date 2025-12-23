import { useState } from 'react';
function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    return { isAuthenticated, setIsAuthenticated };
}

export default useAuth;
