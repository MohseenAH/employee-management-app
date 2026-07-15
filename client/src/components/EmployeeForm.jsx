function EmployeeForm({
  employee,
  handleChange,
  handleSubmit,
  buttonText,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      {/* Personal Information */}

      <div>

        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Personal Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              placeholder="john@example.com"
              required
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div>

        </div>

      </div>

      {/* Work Information */}

      <div>

        <h2 className="text-xl font-semibold text-slate-800 mb-6">
          Work Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Department
            </label>

            <select
              name="department"
              value={employee.department}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Department</option>
              <option>Human Resources</option>
              <option>Information Technology</option>
              <option>Finance</option>
              <option>Sales</option>
              <option>Marketing</option>
              <option>Operations</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Role
            </label>

            <input
              type="text"
              name="role"
              value={employee.role}
              onChange={handleChange}
              placeholder="Software Engineer"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Salary
            </label>

            <div className="relative">

              <span className="absolute left-4 top-3 text-slate-500">
                ₹
              </span>

              <input
                type="number"
                name="salary"
                value={employee.salary}
                onChange={handleChange}
                placeholder="50000"
                className="w-full rounded-xl border border-slate-300 pl-8 pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

            </div>

          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Status
            </label>

            <select
              name="status"
              value={employee.status}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Active</option>
              <option>Inactive</option>
              <option>On Leave</option>
            </select>
          </div>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex justify-end gap-4 pt-4">

        <button
          type="reset"
          className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
        >
          Reset
        </button>

        <button
          type="submit"
          className="px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
        >
          {buttonText}
        </button>

      </div>

    </form>
  );
}

export default EmployeeForm;