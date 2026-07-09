import {
  Bell,
  Search,
} from "lucide-react";

function Navbar() {
  const user =
    JSON.parse(localStorage.getItem("currentUser"));

  return (
    <header className="sticky top-0 z-20 bg-white border-b border-slate-200">

      <div className="h-20 px-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold text-slate-800">
            Dashboard
          </h2>

          <p className="text-slate-500 text-sm">
            Employee Management System
          </p>

        </div>

        <div className="flex items-center gap-6">

          <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-80">

            <Search
              size={18}
              className="text-slate-500"
            />

            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none ml-3 w-full"
            />

          </div>

          <button className="relative rounded-xl p-2 hover:bg-slate-100 transition">

            <Bell size={22} />

            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>

          </button>

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-blue-700 text-white flex items-center justify-center font-bold text-lg">
              {user?.name?.charAt(0)?.toUpperCase() || "A"}
            </div>

            <div>

              <h4 className="font-semibold text-slate-800">
                {user?.name}
              </h4>

              <p className="text-sm text-slate-500">
                Administrator
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;