import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Building2,
  Sparkles,
} from "lucide-react";

function WelcomeBanner({
  user,
  employeeCount,
  departmentCount,
}) {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 p-8 text-white shadow-xl">

      {/* Background decoration */}

      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-white/10" />

      <div className="absolute bottom-0 right-40 h-24 w-24 rounded-full bg-white/10" />

      <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}

        <div>

          <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">

            <Sparkles size={18} />

            <span className="text-sm font-medium">
              Employee Management System
            </span>

          </div>

          <h1 className="mt-6 text-3xl font-bold sm:text-4xl">

            {greeting},

            <span className="ml-2">
              {user?.name || "Admin"} 👋
            </span>

          </h1>

          <p className="mt-3 max-w-2xl text-blue-100 leading-7">
            Here's an overview of your organization.
            Monitor employees, departments and
            workforce activity from one place.
          </p>

          {/* Stats */}

          <div className="mt-8 flex flex-wrap gap-6">

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm">

              <div className="rounded-xl bg-white/20 p-3">

                <Users size={22} />

              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  {employeeCount}
                </h3>

                <p className="text-sm text-blue-100">
                  Employees
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-sm">

              <div className="rounded-xl bg-white/20 p-3">

                <Building2 size={22} />

              </div>

              <div>

                <h3 className="text-2xl font-bold">
                  {departmentCount}
                </h3>

                <p className="text-sm text-blue-100">
                  Departments
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="flex flex-col gap-4 lg:items-end">

          <Link
            to="/add-employee"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-blue-700 shadow-lg transition-all duration-300 hover:scale-105"
          >
            Add Employee

            <ArrowRight size={18} />

          </Link>

          <p className="text-sm text-blue-100">
            Start growing your team today.
          </p>

        </div>

      </div>

    </section>
  );
}

export default WelcomeBanner;