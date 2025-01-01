import { Navigate, NavLink, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation();

    if (location.pathname === '/dashboard') {
        return <Navigate to="/dashboard/cart" />;
    }

    return (
        <div>
            <div className='bg-[#9538E2] text-center p-4 text-3xl font-bold text-white rounded-xl my-3'>
                <h3>Dashboard</h3>
                <p className='text-sm font-normal text-gray-50 my-4'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
                    the coolest accessories, we have it all!
                </p>
                <div>
                    <NavLink
                        to="/dashboard/cart"
                        className={({ isActive }) =>
                            `btn rounded-full px-10 ${isActive ? 'bg-white text-[#9538E2]' : ''}`
                        }
                    >
                        Cart
                    </NavLink>
                    <NavLink
                        to="/dashboard/wishlist"
                        className={({ isActive }) =>
                            `btn rounded-full px-10 ml-5 ${isActive ? 'bg-white text-[#9538E2]' : ''}`
                        }
                    >
                        Wishlist
                    </NavLink>
                </div>
            </div>
            <div className="mt-5">
                <Outlet />
            </div>
        </div>
    );
};

export default Dashboard;
