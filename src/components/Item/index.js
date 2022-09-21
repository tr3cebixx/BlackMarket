import "./index.css"
const Item = ( { available, img, name, price, stock, type, key, lista, Counter, description } ) => {
  return (
    <div className="itemCard">
      <h3 className="itemTitle">{name}</h3>
      <h4 className="itemType">{type}</h4>
      <img src={img} alt={name} className="itemImg" />
      <p className="itemDescription">{description}</p>
      <Counter itemArr={lista} id={key} />
      <p className="itemAvailable">{available}</p>
      <p className="itemStock">Stock: {stock}</p>
      <h3 className="itemPrice">{price}M Berries</h3>
    </div>
  )
}

export default Item