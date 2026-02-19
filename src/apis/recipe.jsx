import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

const RECIPE_API = useContext(ApiContext);

export async function getRecipes(queryParam) {
  const response = await fetch(
    `${RECIPE_API}${queryParam ? `?${queryParam}` : ""}`,
  );
  if (response.ok) {
    const body = await response.json();
    return Array.isArray(body) ? body : [body];
  } else {
    throw new Error("Error fetch recipes");
  }
}
export async function getRecipe(_id) {}
export async function deleteRecipe(_id) {}
export async function updateRecipe(updtaedRecipe) {}
export async function createRecipe(newRecipe) {}
