import "./index.css";
const ItemList = ({ Item, lista, Counter, loading }) => {
  return (
    <div className="itemContainer">
      {loading ? <h2>Cargando productos...</h2>:
      lista.map((prod) => {
          return <Item
            Counter={Counter}
            lista={lista}
            key={prod.id}
            available={prod.available}
            img={prod.img}
            name={prod.name}
            price={prod.price}
            stock={prod.stock}
            type={prod.type}
            description={prod.description}
          />
      })}
    </div>
  );
};

export default ItemList;
