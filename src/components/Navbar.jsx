function Navbar() {
  const user =
    JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="bg-white shadow px-8 py-4 flex justify-between">

      <h2 className="text-xl font-semibold">
        Employee Management
      </h2>

      <div>
        Welcome, {user?.name}
      </div>

    </div>
  );
}

export default Navbar;