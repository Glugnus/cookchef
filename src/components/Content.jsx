import { useState } from "react";
import { data } from "../data/recipes";
import styles from "./Content.module.scss";
import Recipe from "./Recipe";

function Content() {
  const recipes = data;
  const [filter, setFilter] = useState("");

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  return (
    <div className={` flex-fill container`}>
      <h1 className="my-30">Découvrez nos nouvelles recettes</h1>
      <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
        <div
          className={`my-30 d-flex flex-row justify-content-center align-item-center ${styles.searchBar}`}
        >
          <i className="fa-solid fa-magnifying-glass mr-15"></i>
          <input
            onInput={handleInput}
            className="flex-fill"
            type="text"
            placeholder="Rechercher"
          />
        </div>

        <div className={styles.grid}>
          {recipes
            .filter((r) => r.title.toLowerCase().startsWith(filter))
            .map((r) => (
              <Recipe key={r._id} title={r.title} image={r.image} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Content;
