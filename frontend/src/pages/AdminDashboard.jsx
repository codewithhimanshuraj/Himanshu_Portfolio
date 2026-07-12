import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            navigate('/login');
        } else {
            setIsAuthenticated(true);
        }
    }, [navigate]);

    if (!isAuthenticated) return null;

    return (
        <div className="min-h-screen p-8 bg-[var(--bg-secondary)]">
            <h1 className="text-4xl font-bold mb-8 gradient-text">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="glass p-6 rounded-xl">
                    <h2 className="text-2xl font-bold mb-4">Messages</h2>
                    <p>Manage contact form messages.</p>
                    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">View Messages</button>
                </div>
                {/* Additional Dashboard Widgets */}
            </div>
        </div>
    );
};

export default AdminDashboard;
