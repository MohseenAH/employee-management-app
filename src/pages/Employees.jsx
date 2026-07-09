import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search, UserPlus, Users } from "lucide-react";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(data);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    const updatedEmployees = employees.filter(
      (emp) => emp.id !== id
    );

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    setEmployees(updatedEmployees);
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [employees, search]);

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Employees
          </h1>

          <p className="text-slate-500 mt-1">
            Manage your company's employees.
          </p>

        </div>

        <Link
          to="/add-employee"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
        >
          <UserPlus size={18} />
          Add Employee
        </Link>

      </div>

      {/* Summary Card */}

      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-2xl p-6 text-white shadow-lg">

        <div className="flex items-center gap-4">

          <div className="bg-white/20 p-4 rounded-xl">
            <Users size={30} />
          </div>

          <div>

            <h2 className="text-lg font-medium">
              Total Employees
            </h2>

            <p className="text-4xl font-bold">
              {employees.length}
            </p>

          </div>

        </div>

      </div>

      {/* Search */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5">

        <div className="relative">

          <Search
            size={20}
            className="absolute left-4 top-3.5 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search employee by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-slate-300 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">

        <EmployeeTable
          employees={filteredEmployees}
          handleDelete={handleDelete}
        />

      </div>

    </div>
  );
}

export default Employees;