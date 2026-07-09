import dummyEmployees from "./dummyEmployees";

export function initializeData() {
  if (!localStorage.getItem("employees")) {
    localStorage.setItem(
      "employees",
      JSON.stringify(dummyEmployees)
    );
  }

  if (!localStorage.getItem("departments")) {
    localStorage.setItem(
      "departments",
      JSON.stringify([
        {
          id: 1,
          name: "Engineering",
          manager: "John Anderson",
          budget: 5000000,
        },
        {
          id: 2,
          name: "Human Resources",
          manager: "Sarah Williams",
          budget: 1200000,
        },
        {
          id: 3,
          name: "Finance",
          manager: "Michael Brown",
          budget: 2200000,
        },
        {
          id: 4,
          name: "Marketing",
          manager: "Emily Davis",
          budget: 1500000,
        },
        {
          id: 5,
          name: "Sales",
          manager: "William Martinez",
          budget: 2500000,
        },
        {
          id: 6,
          name: "Operations",
          manager: "James Moore",
          budget: 3000000,
        },
        {
          id: 7,
          name: "Customer Support",
          manager: "Olivia Martin",
          budget: 1000000,
        },
      ])
    );
  }

  if (!localStorage.getItem("attendance")) {
    localStorage.setItem("attendance", JSON.stringify([]));
  }

  if (!localStorage.getItem("leaves")) {
    localStorage.setItem("leaves", JSON.stringify([]));
  }
}