import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  Search,
  Users,
  CheckCircle,
  XCircle,
} from "lucide-react";

function MonthlyAttendance() {
  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);

  const currentMonth = new Date().toISOString().slice(0, 7);

  const [selectedMonth, setSelectedMonth] =
    useState(currentMonth);

  const [search, setSearch] = useState("");

  useEffect(() => {
    const employeeData =
      JSON.parse(localStorage.getItem("employees")) || [];

    const attendanceData =
      JSON.parse(localStorage.getItem("attendance")) || [];

    setEmployees(employeeData);
    setAttendance(attendanceData);
  }, []);

  const monthlyAttendance = useMemo(() => {
    return attendance.filter((record) =>
      record.date.startsWith(selectedMonth)
    );
  }, [attendance, selectedMonth]);

  const filteredEmployees = useMemo(() => {
    return employees.filter((employee) =>
      employee.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [employees, search]);

  const totalPresent = monthlyAttendance.filter(
    (item) => item.status === "Present"
  ).length;

  const totalAbsent = monthlyAttendance.filter(
    (item) => item.status === "Absent"
  ).length;

  const totalLeave = monthlyAttendance.filter(
    (item) => item.status === "Leave"
  ).length;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        <div>

          <h1 className="text-3xl font-bold text-slate-800">
            Monthly Attendance
          </h1>

          <p className="mt-1 text-slate-500">
            Monthly attendance summary of employees.
          </p>

        </div>

        <input
          type="month"
          value={selectedMonth}
          onChange={(e) =>
            setSelectedMonth(e.target.value)
          }
          className="rounded-xl border border-slate-300 bg-white px-4 py-3"
        />

      </div>

      {/* Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <Users
            className="mb-3 text-blue-600"
            size={30}
          />

          <h2 className="text-3xl font-bold">
            {employees.length}
          </h2>

          <p className="text-slate-500">
            Employees
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <CheckCircle
            className="mb-3 text-green-600"
            size={30}
          />

          <h2 className="text-3xl font-bold">
            {totalPresent}
          </h2>

          <p className="text-slate-500">
            Present
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <XCircle
            className="mb-3 text-red-600"
            size={30}
          />

          <h2 className="text-3xl font-bold">
            {totalAbsent}
          </h2>

          <p className="text-slate-500">
            Absent
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">

          <CalendarDays
            className="mb-3 text-orange-500"
            size={30}
          />

          <h2 className="text-3xl font-bold">
            {totalLeave}
          </h2>

          <p className="text-slate-500">
            Leave
          </p>

        </div>

      </div>

      {/* Search */}

      <div className="relative">

        <Search
          size={20}
          className="absolute left-4 top-3.5 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 focus:border-blue-500 focus:outline-none"
        />

      </div>

      {/* Table */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-slate-100">

              <tr>

                <th className="px-6 py-4 text-left">
                  Employee
                </th>

                <th className="px-6 py-4 text-center">
                  Present
                </th>

                <th className="px-6 py-4 text-center">
                  Absent
                </th>

                <th className="px-6 py-4 text-center">
                  Leave
                </th>

                <th className="px-6 py-4 text-center">
                  Attendance %
                </th>

              </tr>

            </thead>

            <tbody>
                              {filteredEmployees.map((employee) => {
                const records = monthlyAttendance.filter(
                  (item) => item.employeeId === employee.id
                );

                const present = records.filter(
                  (item) => item.status === "Present"
                ).length;

                const absent = records.filter(
                  (item) => item.status === "Absent"
                ).length;

                const leave = records.filter(
                  (item) => item.status === "Leave"
                ).length;

                const total = present + absent + leave;

                const percentage =
                  total === 0
                    ? 0
                    : ((present / total) * 100).toFixed(1);

                return (
                  <tr
                    key={employee.id}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <h3 className="font-semibold text-slate-800">
                          {employee.name}
                        </h3>

                        <p className="text-sm text-slate-500">
                          {employee.department}
                        </p>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span className="font-semibold text-green-600">
                        {present}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span className="font-semibold text-red-600">
                        {absent}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span className="font-semibold text-yellow-600">
                        {leave}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <div className="flex flex-col items-center gap-2">
                        <span className="font-bold text-blue-600">
                          {percentage}%
                        </span>

                        <div className="h-2 w-24 overflow-hidden rounded-full bg-slate-200">
                          <div
                            className="h-full rounded-full bg-blue-600"
                            style={{
                              width: `${percentage}%`,
                            }}
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                );
              })}

              {filteredEmployees.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="py-12 text-center text-slate-500"
                  >
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default MonthlyAttendance;