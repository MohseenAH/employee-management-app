import {
  LayoutDashboard,
  Users,
  UserPlus,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Employees",
    path: "/employees",
    icon: Users,
  },
  {
    title: "Add Employee",
    path: "/add-employee",
    icon: UserPlus,
  },
];

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-linear-to-b from-blue-700 to-blue-900 text-white shadow-2xl flex flex-col">

      <div className="border-b border-blue-600 p-7">

        <h1 className="text-3xl font-bold tracking-wide">
          EMS
        </h1>

        <p className="text-blue-200 text-sm mt-1">
          Employee Management
        </p>

      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200
                ${
                  isActive
                    ? "bg-white text-blue-700 font-semibold shadow-lg"
                    : "hover:bg-blue-600"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon size={20} />
                {item.title}
              </div>

              <ChevronRight size={16} />
            </NavLink>
          );
        })}

      </nav>

      <div className="p-5 border-t border-blue-600">

        <div className="rounded-xl bg-blue-800 p-4">

          <p className="font-semibold">
            Employee System
          </p>

          <p className="text-sm text-blue-200">
            Version 1.0
          </p>

        </div>

      </div>

    </aside>
  );
}

export default Sidebar;