import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";

function Employees() {
  const [employees, setEmployees] = useState([]);

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-xl shadow">

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Employees
          </h1>

          <Link
            to="/add-employee"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + Add Employee
          </Link>
        </div>

        <EmployeeTable
          employees={employees}
          handleDelete={handleDelete}
        />

      </div>
    </div>
  );
}

export default Employees;