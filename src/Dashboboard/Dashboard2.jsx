import React from "react";

const Dashboard2 = () => {
  return (
    <div className="drawer lg:drawer-open">
      {/* checkbox */}
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Drawer Content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar bg-base-300">
          {/* Mobile toggle button only */}
          <label
            htmlFor="my-drawer-4"
            className="btn btn-square btn-ghost lg:hidden"
          >
            ☰
          </label>
          <span className="px-4 font-semibold">Navbar Title</span>
        </nav>

        <div className="p-4">Page Content</div>
      </div>

      {/* Drawer Side */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <aside className="w-64 bg-base-200 min-h-full">
          <ul className="menu p-4">
            <li>
              <a>Homepage</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Dashboard2;
