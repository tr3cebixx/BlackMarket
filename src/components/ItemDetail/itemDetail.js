import "./itemDetail.css";

const ItemDetail = ({ product, Counter }) => {
  return (
    <div className="detailContainer">
      <h3 className="itemDetailTitle">{product.name}</h3>
      <h4 className="itemDetailType">{product.type}</h4>
      <div className="flexItem">
      <img src={product.img} alt={product.name} className="itemDetailImg" />
      <p className="itemDetailDescription">{product.description}</p>
      </div>
      <p className="itemDetailStock">Stock: {product.stock}</p>
      {product.available ? (<p className="itemDetailAvailable">Disponible</p>) : (<p className="itemDetailAvailable">No disponible</p>)}
      <Counter />
      <h3 className="itemDetailPrice">{product.price}M Berries</h3>
    </div>
  );
};

export default ItemDetail;
