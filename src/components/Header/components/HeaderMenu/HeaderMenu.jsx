import { NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <ul className={`${styles.menuContainer} card p-20`}>
      <li>
        <NavLink to="/admin">Ajouter une recette</NavLink>
      </li>
      <li>Whishlist</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
