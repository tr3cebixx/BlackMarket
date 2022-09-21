import logoSunny from "../../assets/png/thousand-sunny.png";
import "./navbar.css";
import logoBelly from "../../assets/png/belly.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  return (
    <nav className="navbar">
      <NavLink to={'/'}><img alt="logo" src={logoSunny} className="logo" /></NavLink>
      <NavLink to={'/'} className="btn">Inicio</NavLink>
      <NavLink to={'/products'} className="btn">Tienda</NavLink>
      <NavLink to={'/purchase'} className="btn">Terminar compra</NavLink>
      {/* logoBelly es el "chart", aqui ira la compra total */}
      <NavLink to={'/cart'}><img alt="cart" src={logoBelly} className="belly" /></NavLink>
    </nav>
  );
};

export default Navbar;
