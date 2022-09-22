import { useState } from "react";

const Cart = () => {
  const [cartInventory, setCartInventory] = useState([]);

  return <div>{cartInventory.map((item) =>{
    return <li>item.name</li>
  })}</div>;
};

export default Cart;
