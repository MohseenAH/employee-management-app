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
      alert("Please fill all fields");
      return;
    }

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const newEmployee = {
      id: Date.now(),
      ...employee,
    };

    employees.push(newEmployee);

    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    );

    alert("Employee Added Successfully!");

    navigate("/employees");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6">
          Add Employee
        </h1>

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