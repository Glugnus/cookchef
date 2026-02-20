import styles from "./Search.module.scss";

function Search({ setFilter }) {
  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }
  return (
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
  );
}

export default Search;
