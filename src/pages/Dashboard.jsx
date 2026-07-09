import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeBanner from "../dashboard/WelcomeBanner";
import StatCard from "../dashboard/StatCard";
import RecentEmployees from "../dashboard/RecentEmployees";
import QuickActions from "../dashboard/QuickActions";
import DepartmentOverview from "../dashboard/DepartmentOverview";
import ActivityCard from "../dashboard/ActivityCard";
import AttendanceAnalytics from "../dashboard/AttendanceAnalytics";

import {
  Users,
  UserCheck,
  Calendar,
  Building,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  const employees =
    JSON.parse(localStorage.getItem("employees")) || [];

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (!currentUser) {
      navigate("/");
      return;
    }

    setUser(currentUser);
  }, [navigate]);

  const activeEmployees = employees.filter(
    (emp) => emp.status === "Active"
  ).length;

  const onLeaveEmployees = employees.filter(
    (emp) => emp.status === "On Leave"
  ).length;

  const departments = [
    ...new Set(
      employees.map((emp) => emp.department)
    ),
  ].length;

  const stats = [
    {
      title: "Employees",
      value: employees.length,
      subtitle: "+12% this month",
      icon: Users,
      color: "bg-blue-600",
    },
    {
      title: "Active",
      value: activeEmployees,
      subtitle: "Currently Working",
      icon: UserCheck,
      color: "bg-green-600",
    },
    {
      title: "On Leave",
      value: onLeaveEmployees,
      subtitle: "Leave Requests",
      icon: Calendar,
      color: "bg-orange-500",
    },
    {
      title: "Departments",
      value: departments,
      subtitle: "Organization",
      icon: Building,
      color: "bg-purple-600",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}

      <WelcomeBanner
        user={user}
        employeeCount={employees.length}
        departmentCount={departments}
      />

      {/* Statistics */}

      <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            subtitle={item.subtitle}
            icon={item.icon}
            color={item.color}
          />
        ))}
      </section>

      {/* Dashboard Content */}

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-12">

        {/* Left Column */}

        <div className="space-y-6 xl:col-span-8">

          <RecentEmployees employees={employees} />

          <AttendanceAnalytics />

        </div>

        {/* Right Column */}

        <div className="space-y-6 xl:col-span-4">

          <QuickActions />

          <DepartmentOverview
            employees={employees}
          />


        </div>

      </section>
    </div>
  );
}

export default Dashboard;