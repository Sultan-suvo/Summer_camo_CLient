
import { FaBookOpen, FaCheck, FaClipboardList, FaPlus, FaStar, FaUser, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div>
            <Helmet>
                <title>Song Book | Dashboard</title>
            </Helmet>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-300 text-base-content">
                        {
                            isAdmin ? (
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold">Admin Dashboard</h3>
                                    <ul className="mt-2">
                                        <li>
                                            <NavLink
                                                to="/dashboard/manageclasses"
                                                className="text-blue-500 hover:underline"
                                            >
                                                <FaClipboardList></FaClipboardList>
                                                Manage Classes
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/manageusers"
                                                className="text-blue-500 hover:underline"
                                            >
                                                <FaUser></FaUser>
                                                Manage Users
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            ) : isInstructor ? (
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold">Instructor Dashboard</h3>
                                    <ul className="mt-2">
                                        <li>
                                            <NavLink
                                                to="/dashboard/addClasses"
                                                className="text-blue-500 hover:underline"
                                            >
                                                <FaPlus></FaPlus>
                                                Add a Class
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/myClasses"
                                                className="text-blue-500 hover:underline"
                                            >
                                                <FaBookOpen></FaBookOpen>
                                                My Classes
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            ) : (
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold">User Dashboard</h3>
                                    <ul className="mt-2">
                                        <li>
                                            <NavLink
                                                to="/dashboard/selectedClasses"
                                                className="text-blue-500 hover:underline"
                                            >
                                                <FaStar></FaStar>
                                                My Selected Classes
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/dashboard/enrolledClasses"
                                                className="text-blue-500 hover:underline"
                                            >
                                                <FaCheck></FaCheck>
                                                My Enrolled Classes
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                            )
                        }

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;