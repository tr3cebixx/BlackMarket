import { useEffect, useState } from "react";
import * as AllItemImages from "../../assets/ANM/exportingImages";
const ItemListContainer = ({ ItemList, Item, Counter, compareFn }) => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const fnFetch = async () => {
    await fetch("https://63235c0a5c1b4357279454e9.mockapi.io/anm")
    .then(resp=>resp.json())
    .then(resp=>{
      resp.sort(compareFn)
      console.log(resp)
      setProductList(resp)
      setLoading(false)
      console.log(AllItemImages)
    })
    .catch(err=>console.log(err))
  }
  useEffect(() => {
    fnFetch()
    }, [])
      
  return (
    <>
      <ItemList imgs={AllItemImages} lista={productList} loading={loading} Item={Item} Counter={Counter} />
    </>
  );
};

export default ItemListContainer;