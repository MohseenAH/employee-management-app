import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

function NotFound() {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

      <div className="max-w-lg w-full bg-white rounded-3xl shadow-xl p-10 text-center border border-slate-200">

        <div className="mx-auto w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
          <SearchX size={48} className="text-blue-600" />
        </div>

        <h1 className="mt-8 text-7xl font-extrabold text-blue-600">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-slate-800">
          Page Not Found
        </h2>

        <p className="mt-3 text-slate-500 leading-relaxed">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <button
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 transition"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          <Link
            to="/dashboard"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <Home size={18} />
            Dashboard
          </Link>

        </div>

      </div>

    </div>
  );
}

export default NotFound;