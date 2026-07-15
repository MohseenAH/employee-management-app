import { Link } from "react-router-dom";
import {
  UserPlus,
  Users,
  Building2,
  FileText,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Add Employee",
    description: "Register a new employee",
    icon: UserPlus,
    color: "bg-blue-600",
    hover: "hover:bg-blue-700",
    path: "/add-employee",
  },
  {
    title: "Employees",
    description: "View all employees",
    icon: Users,
    color: "bg-green-600",
    hover: "hover:bg-green-700",
    path: "/employees",
  },
  {
    title: "Departments",
    description: "Manage departments",
    icon: Building2,
    color: "bg-purple-600",
    hover: "hover:bg-purple-700",
    path: "/departments",
  },
  {
    title: "Leave Management",
    description: "Approve leave requests",
    icon: FileText,
    color: "bg-orange-500",
    hover: "hover:bg-orange-600",
    path: "/leave-management",
  },
];

function QuickActions() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold text-slate-800">
        Quick Actions
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Frequently used shortcuts
      </p>

      <div className="mt-6 space-y-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              to={action.path}
              className="group flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`${action.color} ${action.hover} rounded-2xl p-3 text-white transition`}
                >
                  <Icon size={22} />
                </div>

                <div>

                  <h3 className="font-semibold text-slate-800">
                    {action.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {action.description}
                  </p>

                </div>

              </div>

              <ArrowRight
                size={18}
                className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600"
              />

            </Link>
          );
        })}

      </div>

    </div>
  );
}

export default QuickActions;