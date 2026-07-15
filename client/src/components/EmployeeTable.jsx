import { Link } from "react-router-dom";
import { Pencil, Trash2, Mail, Building2, Briefcase } from "lucide-react";

function EmployeeTable({ employees, handleDelete }) {
  if (employees.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
          👥
        </div>

        <h2 className="mt-5 text-2xl font-semibold text-slate-700">
          No Employees Found
        </h2>

        <p className="text-slate-500 mt-2">
          Start by adding your first employee.
        </p>

        <Link
          to="/add-employee"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
        >
          Add Employee
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[900px]">

        <thead className="bg-slate-100 border-b">
          <tr className="text-left text-slate-600">

            <th className="p-4">Employee</th>
            <th className="p-4">Email</th>
            <th className="p-4">Department</th>
            <th className="p-4">Role</th>
            <th className="p-4">Salary</th>
            <th className="p-4">Status</th>
            <th className="p-4 text-center">Actions</th>

          </tr>
        </thead>

        <tbody>

          {employees.map((emp) => (

            <tr
              key={emp.id}
              className="border-b hover:bg-slate-50 transition"
            >

              {/* Employee */}

              <td className="p-4">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {emp.name?.charAt(0).toUpperCase()}
                  </div>

                  <div>

                    <h3 className="font-semibold text-slate-800">
                      {emp.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      Employee ID #{emp.id}
                    </p>

                  </div>

                </div>

              </td>

              {/* Email */}

              <td className="p-4">

                <div className="flex items-center gap-2 text-slate-600">

                  <Mail size={16} />

                  {emp.email}

                </div>

              </td>

              {/* Department */}

              <td className="p-4">

                <div className="flex items-center gap-2">

                  <Building2
                    size={16}
                    className="text-blue-600"
                  />

                  {emp.department}

                </div>

              </td>

              {/* Role */}

              <td className="p-4">

                <div className="flex items-center gap-2">

                  <Briefcase
                    size={16}
                    className="text-slate-500"
                  />

                  {emp.role}

                </div>

              </td>

              {/* Salary */}

              <td className="p-4 font-semibold">
                ₹{Number(emp.salary).toLocaleString("en-IN")}
              </td>

              {/* Status */}

              <td className="p-4">

                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    emp.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {emp.status}
                </span>

              </td>

              {/* Actions */}

              <td className="p-4">

                <div className="flex justify-center gap-2">

                  <Link
                    to={`/edit-employee/${emp.id}`}
                    className="p-2 rounded-lg bg-blue-100 text-blue-700 hover:bg-blue-200 transition"
                  >
                    <Pencil size={18} />
                  </Link>

                  <button
                    onClick={() => handleDelete(emp.id)}
                    className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition"
                  >
                    <Trash2 size={18} />
                  </button>

                </div>

              </td>

            </tr>

          ))}

        </tbody>

      </table>
    </div>
  );
}

export default EmployeeTable;