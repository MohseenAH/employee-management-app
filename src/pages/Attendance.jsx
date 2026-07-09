import { useEffect, useMemo, useState } from "react";
import {
  CalendarCheck,
  Users,
  CheckCircle,
  XCircle,
  Clock,
  Search,
  Edit,
} from "lucide-react";

function Attendance() {
  const today = new Date().toISOString().split("T")[0];

  const [employees, setEmployees] = useState([]);
  const [attendance, setAttendance] = useState([]);
  const [search, setSearch] = useState("");

  const [showModal, setShowModal] = useState(false);

  const [form, setForm] = useState({
    employeeId: "",
    employeeName: "",
    department: "",
    status: "Present",
    checkIn: "09:00",
    checkOut: "18:00",
    remarks: "",
  });

  useEffect(() => {
    const savedEmployees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const savedAttendance =
      JSON.parse(localStorage.getItem("attendance")) || [];

    setEmployees(savedEmployees);
    setAttendance(savedAttendance);
  }, []);

  const saveAttendance = (data) => {
    setAttendance(data);
    localStorage.setItem(
      "attendance",
      JSON.stringify(data)
    );
  };

  const openModal = (employee) => {
    const existing = attendance.find(
      (item) =>
        item.employeeId === employee.id &&
        item.date === today
    );

    if (existing) {
      setForm(existing);
    } else {
      setForm({
        employeeId: employee.id,
        employeeName: employee.name,
        department: employee.department,
        status: "Present",
        checkIn: "09:00",
        checkOut: "18:00",
        remarks: "",
      });
    }

    setShowModal(true);
  };

  const handleSave = () => {
    const existingIndex = attendance.findIndex(
      (item) =>
        item.employeeId === form.employeeId &&
        item.date === today
    );

    let updatedAttendance = [...attendance];

    const newRecord = {
      ...form,
      id:
        existingIndex >= 0
          ? attendance[existingIndex].id
          : Date.now(),
      date: today,
    };

    if (existingIndex >= 0) {
      updatedAttendance[existingIndex] = newRecord;
    } else {
      updatedAttendance.push(newRecord);
    }

    saveAttendance(updatedAttendance);
    setShowModal(false);
  };

  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) =>
      emp.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [employees, search]);

  const todayAttendance = attendance.filter(
    (item) => item.date === today
  );

  const presentCount = todayAttendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absentCount = todayAttendance.filter(
    (item) => item.status === "Absent"
  ).length;

  const leaveCount = todayAttendance.filter(
    (item) => item.status === "Leave"
  ).length;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Attendance
          </h1>

          <p className="mt-1 text-slate-500">
            Mark employee attendance for today.
          </p>
        </div>

        <div className="rounded-xl bg-blue-600 px-5 py-3 text-white">
          {today}
        </div>
      </div>

      {/* Stats */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <Users className="mb-3 text-blue-600" />
          <h2 className="text-3xl font-bold">
            {employees.length}
          </h2>
          <p className="text-slate-500">
            Total Employees
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <CheckCircle className="mb-3 text-green-600" />
          <h2 className="text-3xl font-bold">
            {presentCount}
          </h2>
          <p className="text-slate-500">
            Present
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <XCircle className="mb-3 text-red-600" />
          <h2 className="text-3xl font-bold">
            {absentCount}
          </h2>
          <p className="text-slate-500">
            Absent
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <CalendarCheck className="mb-3 text-orange-500" />
          <h2 className="text-3xl font-bold">
            {leaveCount}
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
          className="absolute left-4 top-4 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search employee..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 outline-none focus:border-blue-500"
        />
      </div>
            {/* Attendance Table */}

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-6 py-4 text-left">Employee</th>
                <th className="px-6 py-4 text-left">Department</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-center">Check In</th>
                <th className="px-6 py-4 text-center">Check Out</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredEmployees.map((employee) => {
                const record = attendance.find(
                  (item) =>
                    item.employeeId === employee.id &&
                    item.date === today
                );

                return (
                  <tr
                    key={employee.id}
                    className="border-t hover:bg-slate-50"
                  >
                    <td className="px-6 py-4 font-medium">
                      {employee.name}
                    </td>

                    <td className="px-6 py-4">
                      {employee.department}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {record ? (
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            record.status === "Present"
                              ? "bg-green-100 text-green-700"
                              : record.status === "Absent"
                              ? "bg-red-100 text-red-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {record.status}
                        </span>
                      ) : (
                        <span className="text-slate-400">
                          Not Marked
                        </span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {record?.checkIn || "--"}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {record?.checkOut || "--"}
                    </td>

                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => openModal(employee)}
                        className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                      >
                        <Edit size={16} />

                        {record ? "Edit" : "Mark"}
                      </button>
                    </td>
                  </tr>
                );
              })}

              {filteredEmployees.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-10 text-center text-slate-500"
                  >
                    No employees found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="mb-6 text-2xl font-bold text-slate-800">
              Mark Attendance
            </h2>

            <div className="space-y-4">
              <div>
                <label className="mb-2 block font-medium">
                  Employee
                </label>

                <input
                  value={form.employeeName}
                  readOnly
                  className="w-full rounded-xl border bg-slate-100 p-3"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Status
                </label>

                <select
                  value={form.status}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      status: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border p-3"
                >
                  <option>Present</option>
                  <option>Absent</option>
                  <option>Leave</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-medium">
                    Check In
                  </label>

                  <input
                    type="time"
                    value={form.checkIn}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        checkIn: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border p-3"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-medium">
                    Check Out
                  </label>

                  <input
                    type="time"
                    value={form.checkOut}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        checkOut: e.target.value,
                      })
                    }
                    className="w-full rounded-xl border p-3"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Remarks
                </label>

                <textarea
                  rows={3}
                  value={form.remarks}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      remarks: e.target.value,
                    })
                  }
                  className="w-full rounded-xl border p-3"
                  placeholder="Optional remarks..."
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="rounded-xl border px-5 py-3 font-medium hover:bg-slate-100"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSave}
                  className="rounded-xl bg-blue-600 px-5 py-3 font-medium text-white hover:bg-blue-700"
                >
                  Save Attendance
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Attendance;