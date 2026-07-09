import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

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

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold">Employee Management System</h1>

        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      <div className="max-w-5xl mx-auto p-8">
        <h2 className="text-3xl font-bold">
          Welcome, {user?.name}
        </h2>

        <p className="text-gray-600 mt-2">
          {user?.email}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

  <div
    onClick={() => navigate("/employees")}
    className="bg-white p-6 rounded-xl shadow cursor-pointer hover:shadow-lg"
  >
    <h3 className="text-xl font-semibold">
      Manage Employees
    </h3>

    <p className="text-gray-500 mt-2">
      View, Add, Edit and Delete Employees
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow">
    <h3 className="text-xl font-semibold">
      Logged In User
    </h3>

    <p className="mt-2">{user?.name}</p>
    <p>{user?.email}</p>
  </div>

</div>
      </div>
    </div>
  );
}

export default Dashboard;