import { Building2 } from "lucide-react";

function AuthLayout({
  title,
  subtitle,
  icon,
  children,
}) {
  return (
    <div className="min-h-screen flex bg-slate-100">

      {/* Left Section */}

      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
          alt="Office"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-700/60 to-sky-500/40" />

        <div className="relative z-10 flex flex-col justify-between h-full p-12 text-white">

          {/* Logo */}

          <div className="flex items-center gap-3">

            <div className="bg-white/20 backdrop-blur-md p-3 rounded-xl">

              <Building2 size={32} />

            </div>

            <div>

              <h2 className="text-3xl font-bold">
                EmployeeHub
              </h2>

              <p className="text-blue-100">
                HR Management Platform
              </p>

            </div>

          </div>

          {/* Content */}

          <div>

            <h1 className="text-5xl font-bold leading-tight">
              Manage your workforce
              <br />
              smarter.
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-lg">
              Track employees, departments, attendance,
              payroll and productivity with a modern HR
              management experience.
            </p>

            <div className="flex gap-10 mt-10 flex-wrap">

              <div>

                <h2 className="text-3xl font-bold">
                  500+
                </h2>

                <p className="text-blue-100">
                  Employees Managed
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  99.9%
                </h2>

                <p className="text-blue-100">
                  Uptime
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold">
                  24/7
                </h2>

                <p className="text-blue-100">
                  Secure Access
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Right Section */}

      <div className="flex-1 flex items-center justify-center p-4 sm:p-6">

        <div className="w-full max-w-md">

          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white shadow-2xl p-6 sm:p-8">

            <div className="flex justify-center mb-6">

              <div className="bg-gradient-to-r from-blue-600 to-sky-500 text-white p-4 rounded-2xl shadow-lg">

                {icon}

              </div>

            </div>

            <h1 className="text-3xl font-bold text-center text-slate-800">

              {title}

            </h1>

            <p className="text-center text-slate-500 mt-2 mb-8">

              {subtitle}

            </p>

            {children}

          </div>

        </div>

      </div>

    </div>
  );
}

export default AuthLayout;