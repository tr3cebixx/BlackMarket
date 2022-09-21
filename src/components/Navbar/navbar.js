import logoSunny from "../../assets/png/thousand-sunny.png";
import "./navbar.css";
import logoBelly from "../../assets/png/belly.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to={"/"}>
        <img alt="logo" src={logoSunny} className="logo" />
      </NavLink>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? 'activeBtn'
            : 'btn'
        }
      >
        Inicio
      </NavLink>
      <NavLink to={"/products"} className={({ isActive }) =>
          isActive
            ? 'activeBtn'
            : 'btn'
        }>
        Tienda
      </NavLink>
      <NavLink to={"/purchase"} className={({ isActive }) =>
          isActive
            ? 'activeBtn'
            : 'btn'
        }>
        Terminar compra
      </NavLink>
      {/* logoBelly es el "chart", aqui ira la compra total */}
      <NavLink to={"/cart"}>
        <img alt="cart" src={logoBelly} className="belly" />
      </NavLink>
    </nav>
  );
};

export default Navbar;
