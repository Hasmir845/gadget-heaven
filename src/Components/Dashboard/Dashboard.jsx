import { NavLink } from "react-router-dom";


const Dashboard = () => {
    return (
        <div>
            <div className=' bg-[#9538E2] text-center p-4 text-3xl font-bold text-white rounded-xl my-3'>
                <h3>Dashboard</h3>
                <p className=' text-sm font-normal text-gray-50 my-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>
                <div>
                    <NavLink className={'btn rounded-full px-10'}>Cart</NavLink>
                    <NavLink className={'btn rounded-full px-10 ml-5'}>Wishlist</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;