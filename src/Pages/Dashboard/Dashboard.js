import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user)
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold text-accent text-center my-8'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {!admin &&
                        <>
                            <li><Link to="/dashboard/myorder">My Orders</Link></li>
                            <li><Link to="/dashboard/review">Add A Review</Link></li>
                        </>}
                    {admin &&
                        <>
                            <li><Link to="/dashboard/manageorders">Manage All Orders</Link></li>
                            <li><Link to="/dashboard/addproduct">Add A Product</Link></li>
                            <li><Link to="alluser">Make Admin</Link></li>
                            <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>
                        </>}

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;