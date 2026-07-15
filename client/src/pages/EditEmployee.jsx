import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeForm from "../components/EmployeeForm";

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    role: "",
    salary: "",
    status: "Active",
  });

  useEffect(() => {
    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const existingEmployee = employees.find(
      (emp) => emp.id === Number(id)
    );

    if (!existingEmployee) {
      alert("Employee not found.");
      navigate("/employees");
      return;
    }

    setEmployee(existingEmployee);
  }, [id, navigate]);

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const employees =
      JSON.parse(localStorage.getItem("employees")) || [];

    const updatedEmployees = employees.map((emp) =>
      emp.id === Number(id)
        ? employee
        : emp
    );

    localStorage.setItem(
      "employees",
      JSON.stringify(updatedEmployees)
    );

    alert("Employee updated successfully!");

    navigate("/employees");
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Edit Employee
        </h1>

        <p className="text-slate-500 mt-1">
          Update employee information.
        </p>

      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8">

        <EmployeeForm
          employee={employee}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Update Employee"
        />

      </div>

    </div>
  );
}

export default EditEmployee;