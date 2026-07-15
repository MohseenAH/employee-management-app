import { Building2 } from "lucide-react";

function DepartmentOverview({ employees }) {
  const departmentData = employees.reduce((acc, employee) => {
    const department = employee.department || "Unassigned";

    acc[department] = (acc[department] || 0) + 1;

    return acc;
  }, {});

  const departments = Object.entries(departmentData);

  const maxEmployees =
    departments.length > 0
      ? Math.max(...departments.map((item) => item[1]))
      : 1;

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-purple-100 p-3">

          <Building2
            size={22}
            className="text-purple-600"
          />

        </div>

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Department Overview
          </h2>

          <p className="text-sm text-slate-500">
            Employee distribution
          </p>

        </div>

      </div>

      {/* Empty */}

      {departments.length === 0 ? (

        <div className="py-12 text-center">

          <Building2
            size={40}
            className="mx-auto text-slate-300"
          />

          <p className="mt-4 text-slate-500">
            No department data available.
          </p>

        </div>

      ) : (

        <div className="mt-8 space-y-6">

          {departments.map(([department, count]) => (

            <div key={department}>

              <div className="mb-2 flex items-center justify-between">

                <h3 className="font-medium text-slate-700">
                  {department}
                </h3>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                  {count}
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-100">

                <div
                  className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-700"
                  style={{
                    width: `${
                      (count / maxEmployees) * 100
                    }%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default DepartmentOverview;