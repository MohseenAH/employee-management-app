import { useEffect, useMemo, useState } from "react";
import {
  CalendarDays,
  CheckCircle,
  Clock,
  Search,
  Trash2,
  XCircle,
} from "lucide-react";

function LeaveManagement() {
  const [leaves, setLeaves] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadLeaves();
  }, []);

  const loadLeaves = () => {
    const data =
      JSON.parse(localStorage.getItem("leaves")) || [];

    setLeaves(data);
  };

  const saveLeaves = (updatedLeaves) => {
    setLeaves(updatedLeaves);

    localStorage.setItem(
      "leaves",
      JSON.stringify(updatedLeaves)
    );
  };

  const handleStatus = (id, status) => {
    const updated = leaves.map((leave) =>
      leave.id === id
        ? {
            ...leave,
            status,
          }
        : leave
    );

    saveLeaves(updated);
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Delete this leave request?"
    );

    if (!confirmDelete) return;

    const updated = leaves.filter(
      (leave) => leave.id !== id
    );

    saveLeaves(updated);
  };

  const filteredLeaves = useMemo(() => {
    return leaves.filter((leave) => {
      return (
        leave.employeeName
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        leave.type
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    });
  }, [leaves, search]);

  const pending = leaves.filter(
    (leave) => leave.status === "Pending"
  ).length;

  const approved = leaves.filter(
    (leave) => leave.status === "Approved"
  ).length;

  const rejected = leaves.filter(
    (leave) => leave.status === "Rejected"
  ).length;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Leave Management
          </h1>

          <p className="mt-1 text-slate-500">
            Review and manage employee leave
            requests.
          </p>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <CalendarDays
            className="mb-3 text-blue-600"
            size={32}
          />

          <h2 className="text-3xl font-bold">
            {leaves.length}
          </h2>

          <p className="text-slate-500">
            Total Requests
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <Clock
            className="mb-3 text-yellow-500"
            size={32}
          />

          <h2 className="text-3xl font-bold">
            {pending}
          </h2>

          <p className="text-slate-500">
            Pending
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <CheckCircle
            className="mb-3 text-green-600"
            size={32}
          />

          <h2 className="text-3xl font-bold">
            {approved}
          </h2>

          <p className="text-slate-500">
            Approved
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <XCircle
            className="mb-3 text-red-600"
            size={32}
          />

          <h2 className="text-3xl font-bold">
            {rejected}
          </h2>

          <p className="text-slate-500">
            Rejected
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
          placeholder="Search by employee or leave type..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Leave Requests Table */}

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-100">
              <tr>
                <th className="px-6 py-4 text-left">
                  Employee
                </th>

                <th className="px-6 py-4 text-left">
                  Leave Type
                </th>

                <th className="px-6 py-4 text-center">
                  From
                </th>

                <th className="px-6 py-4 text-center">
                  To
                </th>

                <th className="px-6 py-4 text-center">
                  Status
                </th>

                <th className="px-6 py-4 text-center">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
                              {filteredLeaves.map((leave) => (
                <tr
                  key={leave.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {leave.employeeName}
                      </h3>

                      <p className="text-sm text-slate-500">
                        {leave.reason}
                      </p>
                    </div>
                  </td>

                  <td className="px-6 py-4">
                    {leave.type}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {leave.from}
                  </td>

                  <td className="px-6 py-4 text-center">
                    {leave.to}
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        leave.status === "Approved"
                          ? "bg-green-100 text-green-700"
                          : leave.status === "Rejected"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {leave.status}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex flex-wrap justify-center gap-2">
                      <button
                        onClick={() =>
                          handleStatus(
                            leave.id,
                            "Approved"
                          )
                        }
                        disabled={
                          leave.status === "Approved"
                        }
                        className="rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-300"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          handleStatus(
                            leave.id,
                            "Rejected"
                          )
                        }
                        disabled={
                          leave.status === "Rejected"
                        }
                        className="rounded-lg bg-red-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:bg-red-300"
                      >
                        Reject
                      </button>

                      <button
                        onClick={() =>
                          handleDelete(leave.id)
                        }
                        className="rounded-lg bg-slate-700 p-2 text-white transition hover:bg-slate-900"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredLeaves.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="py-12 text-center text-slate-500"
                  >
                    No leave requests found.
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

export default LeaveManagement;