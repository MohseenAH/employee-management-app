import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Send } from "lucide-react";

function LeaveForm() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  const [form, setForm] = useState({
    employeeId: "",
    employeeName: "",
    type: "Casual Leave",
    from: "",
    to: "",
    reason: "",
  });

  useEffect(() => {
    const employeeData =
      JSON.parse(localStorage.getItem("employees")) || [];

    setEmployees(employeeData);
  }, []);

  const handleEmployeeChange = (e) => {
    const employee = employees.find(
      (emp) => emp.id === Number(e.target.value)
    );

    if (!employee) return;

    setForm({
      ...form,
      employeeId: employee.id,
      employeeName: employee.name,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.employeeId ||
      !form.from ||
      !form.to ||
      !form.reason
    ) {
      alert("Please fill all fields.");
      return;
    }

    const leaves =
      JSON.parse(localStorage.getItem("leaves")) || [];

    const newLeave = {
      id: Date.now(),
      ...form,
      status: "Pending",
      appliedOn: new Date().toLocaleDateString(),
    };

    leaves.push(newLeave);

    localStorage.setItem(
      "leaves",
      JSON.stringify(leaves)
    );

    alert("Leave request submitted successfully.");

    navigate("/leave-management");
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Apply Leave
        </h1>

        <p className="mt-1 text-slate-500">
          Submit a leave request for approval.
        </p>

      </div>

      {/* Form */}

      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* Employee */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Employee
            </label>

            <select
              value={form.employeeId}
              onChange={handleEmployeeChange}
              className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
            >
              <option value="">
                Select Employee
              </option>

              {employees.map((employee) => (
                <option
                  key={employee.id}
                  value={employee.id}
                >
                  {employee.name}
                </option>
              ))}
            </select>

          </div>

          {/* Leave Type */}

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Leave Type
            </label>

            <select
              value={form.type}
              onChange={(e) =>
                setForm({
                  ...form,
                  type: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-300 p-3"
            >
              <option>Casual Leave</option>
              <option>Sick Leave</option>
              <option>Paid Leave</option>
              <option>Emergency Leave</option>
            </select>

          </div>

          {/* Dates */}

          <div className="grid gap-5 md:grid-cols-2">

            <div>

              <label className="mb-2 block font-medium">
                From Date
              </label>

              <input
                type="date"
                value={form.from}
                onChange={(e) =>
                  setForm({
                    ...form,
                    from: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-300 p-3"
              />

            </div>

            <div>

              <label className="mb-2 block font-medium">
                To Date
              </label>

              <input
                type="date"
                value={form.to}
                onChange={(e) =>
                  setForm({
                    ...form,
                    to: e.target.value,
                  })
                }
                className="w-full rounded-xl border border-slate-300 p-3"
              />

            </div>

          </div>
                    {/* Reason */}

          <div>
            <label className="mb-2 block font-medium text-slate-700">
              Reason
            </label>

            <textarea
              rows={5}
              placeholder="Enter reason for leave..."
              value={form.reason}
              onChange={(e) =>
                setForm({
                  ...form,
                  reason: e.target.value,
                })
              }
              className="w-full rounded-xl border border-slate-300 p-3 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Buttons */}

          <div className="flex flex-col-reverse gap-3 pt-4 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => navigate("/leave-management")}
              className="rounded-xl border border-slate-300 px-6 py-3 font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Send size={18} />
              Submit Request
            </button>
          </div>

        </form>

      </div>

      {/* Leave Policy */}

      <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
        <h2 className="mb-3 text-lg font-semibold text-blue-800">
          Leave Policy
        </h2>

        <ul className="list-disc space-y-2 pl-5 text-sm text-blue-700">
          <li>Submit your leave request before the leave start date.</li>
          <li>All requests require administrator approval.</li>
          <li>You can track the request status on the Leave Management page.</li>
          <li>Emergency leave should include an appropriate reason.</li>
        </ul>
      </div>

    </div>
  );
}

export default LeaveForm;