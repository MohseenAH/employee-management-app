import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

import {
  PieChart as PieChartIcon,
  CheckCircle2,
  XCircle,
  CalendarX,
} from "lucide-react";

const COLORS = [
  "#22c55e",
  "#ef4444",
  "#f59e0b",
];

function AttendanceAnalytics() {
  const attendance =
    JSON.parse(localStorage.getItem("attendance")) || [];

  const currentMonth = "2026-07";

  const monthlyAttendance = attendance.filter((item) =>
    item.date.startsWith(currentMonth)
  );

  const present = monthlyAttendance.filter(
    (item) => item.status === "Present"
  ).length;

  const absent = monthlyAttendance.filter(
    (item) => item.status === "Absent"
  ).length;

  const leave = monthlyAttendance.filter(
    (item) => item.status === "Leave"
  ).length;

  const total = present + absent + leave;

  const efficiency =
    total === 0
      ? 0
      : Math.round((present / total) * 100);

  let performance = "";
  let performanceColor = "";

  if (efficiency >= 90) {
    performance = "Excellent";
    performanceColor =
      "bg-green-100 text-green-700";
  } else if (efficiency >= 75) {
    performance = "Good";
    performanceColor =
      "bg-blue-100 text-blue-700";
  } else if (efficiency >= 60) {
    performance = "Average";
    performanceColor =
      "bg-yellow-100 text-yellow-700";
  } else {
    performance = "Needs Improvement";
    performanceColor =
      "bg-red-100 text-red-700";
  }

  const data = [
    {
      name: "Present",
      value: present,
    },
    {
      name: "Absent",
      value: absent,
    },
    {
      name: "Leave",
      value: leave,
    },
  ];

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Header */}

      <div className="mb-8 flex items-center gap-3">

        <div className="rounded-xl bg-blue-100 p-3">

          <PieChartIcon
            size={22}
            className="text-blue-600"
          />

        </div>

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Attendance Efficiency
          </h2>

          <p className="text-sm text-slate-500">
            Monthly workforce performance
          </p>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-2">

        {/* Donut */}

        <div className="relative h-[320px]">

          <ResponsiveContainer
            width="100%"
            height="100%"
          >

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                innerRadius={85}
                outerRadius={125}
                paddingAngle={4}
              >

                {data.map((item, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

          {/* Center */}

          <div className="absolute inset-0 flex flex-col items-center justify-center">

            <h2 className="text-5xl font-bold text-slate-800">
              {efficiency}%
            </h2>

            <p className="text-sm text-slate-500">
              Efficiency
            </p>

          </div>

        </div>

        {/* Right Side */}
                <div className="flex flex-col justify-center">

          <div className="space-y-5">

            <div className="flex items-center justify-between rounded-2xl bg-green-50 p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-green-100 p-3">
                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Present
                  </p>

                  <h3 className="text-2xl font-bold text-green-600">
                    {present}
                  </h3>
                </div>

              </div>

              <span className="text-sm font-semibold text-green-600">
                {total === 0
                  ? 0
                  : Math.round(
                      (present / total) * 100
                    )}
                %
              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl bg-red-50 p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-red-100 p-3">
                  <XCircle
                    size={22}
                    className="text-red-600"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Absent
                  </p>

                  <h3 className="text-2xl font-bold text-red-600">
                    {absent}
                  </h3>
                </div>

              </div>

              <span className="text-sm font-semibold text-red-600">
                {total === 0
                  ? 0
                  : Math.round(
                      (absent / total) * 100
                    )}
                %
              </span>

            </div>

            <div className="flex items-center justify-between rounded-2xl bg-yellow-50 p-4">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-yellow-100 p-3">
                  <CalendarX
                    size={22}
                    className="text-yellow-600"
                  />
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Leave
                  </p>

                  <h3 className="text-2xl font-bold text-yellow-600">
                    {leave}
                  </h3>
                </div>

              </div>

              <span className="text-sm font-semibold text-yellow-600">
                {total === 0
                  ? 0
                  : Math.round(
                      (leave / total) * 100
                    )}
                %
              </span>

            </div>

          </div>

          <div className="mt-8">

            <div className="mb-2 flex items-center justify-between">

              <span className="text-sm font-medium text-slate-600">
                Overall Efficiency
              </span>

              <span className="font-bold text-blue-600">
                {efficiency}%
              </span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-500"
                style={{
                  width: `${efficiency}%`,
                }}
              />

            </div>

          </div>

          <div
            className={`mt-6 rounded-2xl px-5 py-4 text-center font-semibold ${performanceColor}`}
          >
            {performance}
          </div>

        </div>

      </div>

    </div>
  );
}

export default AttendanceAnalytics;