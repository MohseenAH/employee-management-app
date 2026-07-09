import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Users,
  UserCheck,
  Building2,
  CalendarClock,
  ArrowRight,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const employees =
    JSON.parse(localStorage.getItem("employees")) || [];

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      navigate("/");
      return;
    }

    setUser(currentUser);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
  };

  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  const onLeaveEmployees = employees.filter(
    (emp) => emp.status === "On Leave"
  ).length;

  const departments = [
    ...new Set(employees.map((emp) => emp.department)),
  ].length;

  const stats = [
    {
      title: "Employees",
      value: employees.length,
      icon: <Users size={28} />,
      color: "bg-blue-600",
    },
    {
      title: "Active",
      value: activeEmployees,
      icon: <UserCheck size={28} />,
      color: "bg-green-600",
    },
    {
      title: "On Leave",
      value: onLeaveEmployees,
      icon: <CalendarClock size={28} />,
      color: "bg-orange-500",
    },
    {
      title: "Departments",
      value: departments,
      icon: <Building2 size={28} />,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Welcome */}

      <div className="bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl p-8 text-white shadow-lg">

        <h1 className="text-4xl font-bold">
          Welcome back, {user?.name} 👋
        </h1>

        <p className="mt-2 text-blue-100">
          Manage employees efficiently from your dashboard.
        </p>

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition p-6"
          >
            <div className="flex justify-between items-center">

              <div>

                <p className="text-slate-500">
                  {card.title}
                </p>

                <h2 className="text-3xl font-bold mt-2">
                  {card.value}
                </h2>

              </div>

              <div className={`${card.color} text-white p-4 rounded-xl`}>
                {card.icon}
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* Main Content */}

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Recent Employees */}

        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-semibold">
              Recent Employees
            </h2>

            <Link
              to="/employees"
              className="text-blue-600 flex items-center gap-1 font-semibold"
            >
              View All
              <ArrowRight size={18} />
            </Link>

          </div>

          {employees.length === 0 ? (
            <div className="text-center py-12">

              <p className="text-slate-500">
                No employees added yet.
              </p>

              <Link
                to="/add-employee"
                className="inline-block mt-4 bg-blue-600 text-white px-5 py-2 rounded-xl"
              >
                Add First Employee
              </Link>

            </div>
          ) : (
            <div className="space-y-4">

              {employees.slice(0, 5).map((employee) => (
                <div
                  key={employee.id}
                  className="flex items-center justify-between border rounded-xl p-4 hover:bg-slate-50 transition"
                >

                  <div className="flex items-center gap-4">

                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                      {employee.name?.charAt(0).toUpperCase()}
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

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
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
          )}

        </div>

        {/* Right Panel */}

        <div className="space-y-6">

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

            <h2 className="text-xl font-semibold mb-4">
              Quick Actions
            </h2>

            <Link
              to="/add-employee"
              className="block bg-blue-600 hover:bg-blue-700 text-center text-white rounded-xl py-3 font-semibold"
            >
              + Add Employee
            </Link>

            <Link
              to="/employees"
              className="block mt-3 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center rounded-xl py-3 font-semibold"
            >
              Manage Employees
            </Link>

          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

            <h2 className="text-xl font-semibold mb-4">
              Account
            </h2>

            <p className="font-semibold">
              {user?.name}
            </p>

            <p className="text-slate-500">
              {user?.email}
            </p>

            <button
              onClick={handleLogout}
              className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white rounded-xl py-3 font-semibold"
            >
              Logout
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;