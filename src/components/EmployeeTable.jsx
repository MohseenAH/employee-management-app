function EmployeeTable({ employees, handleDelete }) {
  if (employees.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No Employees Found
      </div>
    );
  }

  return (
    <table className="w-full border border-gray-300">
      <thead className="bg-blue-600 text-white">
        <tr>
          <th className="p-3">Name</th>
          <th className="p-3">Email</th>
          <th className="p-3">Department</th>
          <th className="p-3">Role</th>
          <th className="p-3">Salary</th>
          <th className="p-3">Status</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((emp) => (
          <tr key={emp.id} className="border-b text-center">
            <td className="p-3">{emp.name}</td>
            <td className="p-3">{emp.email}</td>
            <td className="p-3">{emp.department}</td>
            <td className="p-3">{emp.role}</td>
            <td className="p-3">₹{emp.salary}</td>
            <td className="p-3">{emp.status}</td>

            <td className="p-3">
              <button
                onClick={() => handleDelete(emp.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;