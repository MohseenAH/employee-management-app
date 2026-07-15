import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import AddEmployee from "./pages/AddEmployee";
import EditEmployee from "./pages/EditEmployee";
import ProtectedRoute from "./components/ProtectedRoute";
import Attendance from "./pages/Attendance";
import NotFound from "./pages/NotFound";
import LeaveManagement from "./pages/LeaveManagement"
import LeaveForm from "./pages/LeaveForm";
import MonthlyAttendance from "./pages/MonthlyAttendance"

import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
  element={
    <ProtectedRoute>
      <DashboardLayout />
    </ProtectedRoute>
  }
>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/edit-employee/:id" element={<EditEmployee />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/monthly-attendance" element={<MonthlyAttendance />} />
        <Route path="/leave-management" element={<LeaveManagement />} />
        <Route path="/leave-form" element={<LeaveForm />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;