import { Outlet } from "react-router-dom";

function AdminRecipes() {
  return (
    <>
      <h3>AdminRecipes</h3>
      <Outlet />
    </>
  );
}

export default AdminRecipes;
