import "./cover.css";
import logoAshura from "../../assets/png/ashuraBM.png";

const Cover = ({ greeting }) => {
    return (
      <div className="cover">
        <img src={logoAshura} className="logoAshura" alt="logo" />
        <p className="p">{greeting}</p>
        <button className="btn" style={{ backgroundColor: "#388eb5", color: "#0F0F0F", border: "#0F0F0F groove 0.5rem", width: "100%",
      display: 	"block" }}>
          Ir al Mercado Negro
        </button>
      </div>
    );
  };
  export default Cover;