import "./itemCounter.css";
const ItemCounter = ({ itemArr, id, setCount, count, product }) => {
  const suma = (event) => {
    event.stopPropagation();
    count < itemArr[id].stock
      ? setCount(count + 1)
      : alert("No hay más stock disponible");
  };
  const resta = (event) => {
    event.stopPropagation();
    count > 0 ? setCount(count - 1) : alert("No tienes nada en la bolsa");
  };
  const addToCart = () => {
    console.log(count)
    console.log(product)
  }
  return (
    <div className="counterDiv">
      <p className="counterP">LLevar: {count}</p>
      <div className="counterBtns">
        <button className="counterBtn" onClick={resta}>
          -
        </button>
        <button className="counterBtn" onClick={addToCart}>Añadir al carro</button>
        <button className="counterBtn" onClick={suma}>
          +
        </button>
      </div>
    </div>
  );
};
export default ItemCounter;
