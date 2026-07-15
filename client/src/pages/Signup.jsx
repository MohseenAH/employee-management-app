import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  UserPlus,
  ArrowRight,
} from "lucide-react";
import AuthLayout from "../components/AuthLayout";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const users =
      JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.find(
      (user) => user.email === formData.email
    );

    if (emailExists) {
      alert("Email already registered.");
      return;
    }

    if (
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: formData.name,
      email: formData.email,
      password: formData.password,
    };

    users.push(newUser);

    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );

    alert("Account created successfully!");

    navigate("/");
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Create your Employee Management account"
      icon={<UserPlus size={34} />}
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-6"
      >
        {/* Full Name */}

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Full Name
          </label>

          <div className="relative">
            <User
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Email */}

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Email Address
          </label>

          <div className="relative">
            <Mail
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Password */}

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Password
          </label>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 outline-none transition focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password */}

        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Confirm Password
          </label>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              name="confirmPassword"
              required
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm password"
              className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 outline-none transition focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-600"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>
          </div>
        </div>

        {/* Terms */}

        <label className="flex items-start gap-3 text-sm text-slate-600">
          <input
            type="checkbox"
            required
            className="mt-1"
          />

          <span>
            I agree to the{" "}
            <span className="font-semibold text-blue-600">
              Terms of Service
            </span>{" "}
            and{" "}
            <span className="font-semibold text-blue-600">
              Privacy Policy
            </span>
          </span>
        </label>

        {/* Button */}

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-700 to-sky-500 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-300"
        >
          Create Account

          <ArrowRight size={18} />
        </button>
      </form>

      <p className="mt-8 text-center text-slate-600">
        Already have an account?

        <Link
          to="/"
          className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
        >
          Login
        </Link>
      </p>
    </AuthLayout>
  );
}

export default Signup;