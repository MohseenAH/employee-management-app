import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Building2,
} from "lucide-react";

function RecentEmployees({ employees }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-100 p-6">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Recent Employees
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Latest employees added to your organization
          </p>

        </div>

        <Link
          to="/employees"
          className="flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blue-600 hover:text-white"
        >
          View All

          <ArrowRight size={16} />
        </Link>

      </div>

      {/* Empty State */}

      {employees.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20">

          <div className="rounded-full bg-blue-100 p-5">

            <Building2
              size={40}
              className="text-blue-600"
            />

          </div>

          <h3 className="mt-6 text-2xl font-bold text-slate-800">
            No Employees Yet
          </h3>

          <p className="mt-2 max-w-sm text-center text-slate-500">
            Start building your team by adding your
            first employee.
          </p>

          <Link
            to="/add-employee"
            className="mt-8 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Add Employee
          </Link>

        </div>
      ) : (

        <>
          {/* Desktop Table */}

          <div className="hidden overflow-x-auto lg:block">

            <table className="w-full">

              <thead>

                <tr className="border-b border-slate-100 text-left text-sm text-slate-500">

                  <th className="px-6 py-4">
                    Employee
                  </th>

                  <th className="px-6 py-4">
                    Department
                  </th>

                  <th className="px-6 py-4">
                    Email
                  </th>

                  <th className="px-6 py-4">
                    Status
                  </th>

                </tr>

              </thead>

              <tbody>

                {employees.slice(0, 5).map((employee) => (

                  <tr
                    key={employee.id}
                    className="border-b border-slate-100 transition hover:bg-slate-50"
                  >

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 font-bold text-white">

                          {employee.name
                            ?.charAt(0)
                            .toUpperCase()}

                        </div>

                        <div>

                          <h3 className="font-semibold text-slate-800">
                            {employee.name}
                          </h3>

                        </div>

                      </div>

                    </td>

                    <td className="px-6 py-5">
                      {employee.department}
                    </td>

                    <td className="px-6 py-5">

                      <div className="flex items-center gap-2 text-slate-500">

                        <Mail size={16} />

                        {employee.email}

                      </div>

                    </td>

                    <td className="px-6 py-5">

                      <span
                        className={`rounded-full px-3 py-1 text-sm font-semibold ${
                          employee.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {employee.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

          {/* Mobile Cards */}

          <div className="space-y-4 p-6 lg:hidden">

            {employees.slice(0, 5).map((employee) => (

              <div
                key={employee.id}
                className="rounded-2xl border border-slate-200 p-5"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-sky-500 font-bold text-white">

                    {employee.name
                      ?.charAt(0)
                      .toUpperCase()}

                  </div>

                  <div>

                    <h3 className="font-semibold">
                      {employee.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {employee.department}
                    </p>

                  </div>

                </div>

                <div className="mt-4 text-sm text-slate-500">

                  {employee.email}

                </div>

                <span
                  className={`mt-4 inline-block rounded-full px-3 py-1 text-sm font-semibold ${
                    employee.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {employee.status}
                </span>

              </div>

            ))}

          </div>

        </>
      )}

    </div>
  );
}

export default RecentEmployees;