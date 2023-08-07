import { NavLink } from "react-router-dom";
import "./styles.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";

function Header() {

  const {theme, ToggleTheme} = useContext(ThemeContext);
  const {logout} = useContext(AuthContext);

  return (
    <nav className="menu-nav">
      <ul className="menu-header">
        <li className="menu-item">
          <NavLink to="/">Home</NavLink>
        </li>
        
        <li className="menu-item">
          <NavLink to={"noticias"}>Noticias</NavLink>
        </li>
        
        <li onClick={ToggleTheme} className="menu-item">
          Alterar Tema (Atual : {theme})
        </li>
        <li>
          <button onClick={logout}> Sair</button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
