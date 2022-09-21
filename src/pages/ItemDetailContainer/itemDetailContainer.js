import { useEffect, useState } from "react";
import "./itemDetailContainer.css";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/itemDetail.js";

const ItemDetailContainer = ({ Counter }) => {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState();

  const getProduct = async () => {
    await fetch(`https://63235c0a5c1b4357279454e9.mockapi.io/anm/${id}`)
      .then((resp) => resp.json())
      .then((resp) => {
        setProduct(resp)
        console.log(product)
      });
  };
  useEffect(() => {
    getProduct();
  });
  return (
    <div className="itemDetailContainer">
      {/* <ItemDetail product={product} Counter={Counter} /> */}
    </div>
  );
};

export default ItemDetailContainer;
