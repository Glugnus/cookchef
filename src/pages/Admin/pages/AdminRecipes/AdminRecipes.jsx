import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import AdminRecipesNav from "./components/AdminRecipesNav/AdminRecipesNav";

function AdminRecipes() {
  return (
    <div className="d-flex flex-column flex-fill">
      <h3 className="mb-20">Gestion des recettes</h3>
      <AdminRecipesNav></AdminRecipesNav>
      <div className="flex-fill d-flex flex-column">
        <div className="flex-fill d-flex flex-column">
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default AdminRecipes;
