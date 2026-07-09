import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-5">

      <h1 className="text-2xl font-bold mb-8">
        EMS
      </h1>

      <nav className="flex flex-col gap-3">

        <Link
          to="/dashboard"
          className="hover:bg-blue-600 p-2 rounded"
        >
          Dashboard
        </Link>

        <Link
          to="/employees"
          className="hover:bg-blue-600 p-2 rounded"
        >
          Employees
        </Link>

        <Link
          to="/add-employee"
          className="hover:bg-blue-600 p-2 rounded"
        >
          Add Employee
        </Link>

      </nav>

    </div>
  );
}

export default Sidebar;