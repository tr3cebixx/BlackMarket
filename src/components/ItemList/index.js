import "./index.css";
import { Link } from "react-router-dom";
const ItemList = ({ Item, lista, Counter, loading }) => {
  return (
    <div className="itemContainer">
      {loading ? <h2>Cargando productos...</h2>:
      lista.map((prod) => {
          return <Link to={`/products/${prod.id}`} style={{textDecoration: 'none', color: 'black'}} key={prod.id}><Item
            Counter={Counter}
            lista={lista}
            id={prod.id}
            available={prod.available}
            img={prod.img}
            name={prod.name}
            price={prod.price}
            stock={prod.stock}
            type={prod.type}
            description={prod.description}
          /></Link>
      })}
    </div>
  );
};

export default ItemList;
