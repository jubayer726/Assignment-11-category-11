import React from "react";
import { FaWpforms} from "react-icons/fa";
import { RiEBike2Fill } from "react-icons/ri";
import { FaUsersGear } from "react-icons/fa6";
import { PiStudentBold } from "react-icons/pi";
import { Link, NavLink, Outlet } from "react-router";
import { FaTasks } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import useAuth from "../hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineEditNotifications } from "react-icons/md";



const DashBoard = () => {
   const { logOut } = useAuth()
  //   const {role} = useRole()

  return (
    <div className="drawer lg:drawer-open w-7xl mx-auto">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar w-full bg-base-300">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            {/* Sidebar toggle icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
              className="my-1.5 inline-block size-4"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M9 4v16"></path>
              <path d="M14 10l2 2l-2 2"></path>
            </svg>
          </label>
          <div className="px-4 text-2xl font-bold">eTutionBd Dashboard</div>
        </nav>
        {/* Page content here */}

        <Outlet></Outlet>
      </div>

      <div className="drawer-side is-drawer-close:overflow-visible">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
          {/* Sidebar content here */}
          <ul className="menu w-full grow">
            {/* List item */}
            <li>
              <Link
                to="/"
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Homepage"
              >
                {/* Home icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="is-drawer-close:hidden">Homepage</span>
              </Link>
            </li>
            
            {/* Student Dashboard */}
            <NavLink  to="/dashboard/student-dashboard" className={({ isActive }) =>isActive? "bg-gray-300": "" }>
              <h2
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1 p-1 items-center hover:bg-gray-200"
                data-tip="Student Dashboard"
              >
                <PiStudentBold />
                <span className="is-drawer-close:hidden">Student Dashboard</span>
              </h2>
            </NavLink>

               {/* My Tuition  */}
             <NavLink to="/dashboard/my-tuition" className={({ isActive }) =>isActive? "bg-gray-300": "" }>
              
              <h2
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1 p-1 items-center hover:bg-gray-200"
                data-tip="My Tuition"
              >
                <MdOutlineEditNotifications />
                <span className="is-drawer-close:hidden">My Tuition</span>
              </h2>
            </NavLink>

            <NavLink to="/dashboard/student-form" className={({ isActive }) =>isActive? "bg-gray-300": "" }>
              
              <h2
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1 p-1 items-center hover:bg-gray-200"
                data-tip="Post New Tuition"
              >
                <FaWpforms />
                <span className="is-drawer-close:hidden">Post New Tuition</span>
              </h2>
            </NavLink>

             
            {/* Assign Rider Role */}
            {
              // role === 'rider' && <>
              <NavLink to="/dashboard/tutor-dashboard" className={({isActive})=> isActive? "bg-gray-300" : ""}>
                  
                <h2
                  className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1 p-1 items-center hover:bg-gray-200"
                  data-tip="Tutor-Dashboard"
                >
                  <FaTasks />
                  <span className="is-drawer-close:hidden">
                    Tutor-Dashboard
                  </span>
                </h2>
              </NavLink>
              // </>
            }

            {/* Admin Role */}
            {
            // role === "admin" && 
            (
              <>
                <NavLink to="/dashboard/tutor-form" className={({isActive})=> isActive? "bg-gray-300" : ""}>
                  <h2
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1 p-1 items-center hover:bg-gray-200"
                    data-tip="Tutor-Form"
                  >
                    <GiTeacher />
                    <span className="is-drawer-close:hidden">Tutor Form</span>
                  </h2>
                </NavLink>

                {/* <li>
                  <Link
                    to="/dashboard/assign-riders"
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                    data-tip="Assign-Riders"
                  >
                    <RiEBike2Fill />
                    <span className="is-drawer-close:hidden">
                      Assign Riders
                    </span>
                  </Link>
                </li> */}

                <NavLink to="/dashboard/admin-dashboard" className={({isActive})=> isActive? "bg-gray-300" : ""}>
                  <h2
                    
                    className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1 p-1 items-center hover:bg-gray-200"
                    data-tip="Users-Management"
                  >
                    <FaUsersGear />
                    <span className="is-drawer-close:hidden">
                      Users-Management
                    </span>
                  </h2>
                </NavLink>
              </>
            )}

            <NavLink to='/dashboard/profile' className={({isActive})=> isActive? "bg-gray-300" : ""}>
              <button
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                data-tip="Settings"
              >
                {/* Settings icon */}
                <h2 className="hover:bg-gray-200">
                    <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="my-1.5 inline-block size-4 "
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="is-drawer-close:hidden">Settings</span>
                </h2>
              </button>
            </NavLink>
              {/* Logout */}
              <li>
              <button  onClick={logOut}
                className="is-drawer-close:tooltip is-drawer-close:tooltip-right flex gap-1 p-1 items-center hover:bg-gray-200"
                data-tip="Log-Out"
              >
                <FiLogOut />
                <span className="is-drawer-close:hidden">Log-Out</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
