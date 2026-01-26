import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <ul className={`${styles.menuContainer} card p-20`}>
      <li>Whishlist</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
