import {
  Activity,
  UserPlus,
  UserCheck,
  Clock,
} from "lucide-react";

function ActivityCard() {
  const employees =
    JSON.parse(localStorage.getItem("employees")) || [];

  const activities = [];

  if (employees.length > 0) {
    employees
      .slice(-4)
      .reverse()
      .forEach((employee) => {
        activities.push({
          title: `${employee.name} was added`,
          time: "Recently",
          icon: UserPlus,
          color: "bg-blue-100 text-blue-600",
        });
      });
  }

  if (activities.length === 0) {
    activities.push(
      {
        title: "Welcome to EmployeeHub",
        time: "Now",
        icon: Activity,
        color: "bg-purple-100 text-purple-600",
      },
      {
        title: "Start by adding employees",
        time: "Getting Started",
        icon: UserCheck,
        color: "bg-green-100 text-green-600",
      }
    );
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center gap-3">

        <div className="rounded-2xl bg-blue-100 p-3">

          <Activity
            size={22}
            className="text-blue-600"
          />

        </div>

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Recent Activity
          </h2>

          <p className="text-sm text-slate-500">
            Latest system updates
          </p>

        </div>

      </div>

      {/* Timeline */}

      <div className="mt-8 space-y-6">

        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4"
            >

              {/* Timeline */}

              <div className="flex flex-col items-center">

                <div
                  className={`rounded-full p-3 ${activity.color}`}
                >
                  <Icon size={18} />
                </div>

                {index !== activities.length - 1 && (
                  <div className="mt-2 h-10 w-0.5 bg-slate-200" />
                )}

              </div>

              {/* Content */}

              <div className="flex-1">

                <h3 className="font-semibold text-slate-800">
                  {activity.title}
                </h3>

                <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">

                  <Clock size={14} />

                  {activity.time}

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default ActivityCard;