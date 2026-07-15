import {
  Bell,
  Search,
  ChevronDown,
  Settings,
  Menu,
} from "lucide-react";

function Navbar({ setSidebarOpen }) {
  const user =
    JSON.parse(localStorage.getItem("currentUser")) || {};

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-lg">
      <div className="flex h-16 items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex items-center gap-3">
          {/* Mobile Hamburger */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
          >
            <Menu size={24} className="text-slate-700" />
          </button>

          <div>
            <h2 className="text-xl font-bold text-slate-800 sm:text-2xl">
              Dashboard
            </h2>

            <p className="hidden text-sm text-slate-500 sm:block">
              Welcome back, {user.name || "Admin"}
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
          {/* Search */}
          <div className="hidden lg:flex w-80 items-center rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100">
            <Search size={18} className="text-slate-400" />

            <input
              type="text"
              placeholder="Search employees..."
              className="ml-3 w-full bg-transparent outline-none placeholder:text-slate-400"
            />
          </div>

          {/* Settings */}
          <button className="hidden rounded-xl p-3 transition hover:bg-slate-100 sm:flex">
            <Settings size={20} className="text-slate-600" />
          </button>

          {/* Notifications */}
          <button className="relative rounded-xl p-3 transition hover:bg-slate-100">
            <Bell size={20} className="text-slate-600" />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-xl p-2 transition hover:bg-slate-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 font-bold text-white shadow-md sm:h-11 sm:w-11">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            <div className="hidden text-left md:block">
              <h4 className="font-semibold text-slate-800">
                {user.name || "Administrator"}
              </h4>

              <p className="text-sm text-slate-500">
                Administrator
              </p>
            </div>

            <ChevronDown
              size={18}
              className="hidden text-slate-500 md:block"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;