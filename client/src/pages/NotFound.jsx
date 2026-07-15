import { Link } from "react-router-dom";
import {
  Home,
  ArrowLeft,
  SearchX,
  LogIn,
} from "lucide-react";

function NotFound() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Background */}

      <img
        src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
        alt="Office"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/80 via-blue-800/70 to-sky-500/40" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">

        <div className="w-full max-w-xl rounded-3xl border border-white/20 bg-white/20 p-8 shadow-2xl backdrop-blur-xl sm:p-10">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/20 shadow-lg">

            <SearchX
              size={48}
              className="text-white"
            />

          </div>

          <h1 className="mt-8 bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-center text-7xl font-extrabold text-transparent">
            404
          </h1>

          <h2 className="mt-4 text-center text-3xl font-bold text-white">
            Page Not Found
          </h2>

          <p className="mx-auto mt-4 max-w-md text-center leading-7 text-blue-100">
            The page you're looking for doesn't exist,
            may have been moved, or the URL is incorrect.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <button
              onClick={() => window.history.back()}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <ArrowLeft size={18} />
              Go Back
            </button>

            <Link
              to="/"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-white backdrop-blur-md transition hover:bg-white/20"
            >
              <LogIn size={18} />
              Login
            </Link>

            <Link
              to="/dashboard"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              <Home size={18} />
              Dashboard
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default NotFound;