import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    salary: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !employee.name ||
      !employee.email ||
      !employee.department ||
      !employee.role ||
      !employee.salary
    ) {
      alert("Please fill all fields.");
      return;
    }

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    employees.push({
      id: Date.now(),
      ...employee,
    });

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    navigate("/employees");
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Add Employee
        </h1>

        <p className="text-slate-500 mt-1">
          Fill in the employee information below.
        </p>

      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">

        <EmployeeForm
          employee={employee}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Save Employee"
        />

      </div>

    </div>
  );
}

export default AddEmployee;