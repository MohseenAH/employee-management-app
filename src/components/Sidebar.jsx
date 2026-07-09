import {
  LayoutDashboard,
  Users,
  UserPlus,
  ClipboardCheck,
  CalendarDays,
  ClipboardList,
  FilePlus2,
  LogOut,
  Building2,
  ChevronRight,
  X,
} from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

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
  {
    title: "Daily Attendance",
    path: "/attendance",
    icon: ClipboardCheck,
  },
  {
    title: "Monthly Attendance",
    path: "/monthly-attendance",
    icon: CalendarDays,
  },
  {
    title: "Apply Leave",
    path: "/leave-form",
    icon: FilePlus2,
  },
  {
    title: "Leave Management",
    path: "/leave-management",
    icon: ClipboardList,
  },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const currentUser =
    JSON.parse(localStorage.getItem("currentUser")) || {};

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <aside
      className={`
        fixed top-0 left-0 z-50
        flex h-screen w-72 flex-col
        bg-gradient-to-b from-blue-700 via-blue-800 to-slate-900
        text-white shadow-2xl
        transform transition-transform duration-300 ease-in-out

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        lg:translate-x-0
      `}
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white/20 p-3">
            <Building2 size={28} />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              EmployeeHub
            </h1>

            <p className="text-sm text-blue-200">
              Employee Management
            </p>
          </div>
        </div>

        {/* Mobile Close Button */}

        <button
          onClick={closeSidebar}
          className="rounded-lg p-2 transition hover:bg-white/10 lg:hidden"
        >
          <X size={24} />
        </button>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 px-4 py-6">
        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-white font-semibold text-blue-700 shadow-lg"
                    : "hover:bg-white/10"
                }`
              }
            >
              <div className="flex items-center gap-3">
                <Icon size={20} />

                <span>{item.title}</span>
              </div>

              <ChevronRight
                size={16}
                className="opacity-50 transition group-hover:translate-x-1"
              />
            </NavLink>
          );
        })}
      </nav>

      {/* User */}

      <div className="border-t border-white/10 p-5">
        <div className="mb-4 rounded-xl bg-white/10 p-4 backdrop-blur">
          <h3 className="font-semibold">
            {currentUser.name || "Guest"}
          </h3>

          <p className="truncate text-sm text-blue-200">
            {currentUser.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-medium transition hover:bg-red-600"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;