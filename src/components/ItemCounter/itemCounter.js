import React, {useState} from "react";
import "./itemCounter.css"
const ItemCounter = ({ itemArr, id })=>{
    const [items, setItems] = useState(0)
    const suma = ()=>{items < itemArr[id].stock ? setItems(items + 1) : alert("No hay más stock disponible")}
    const resta = ()=>{items > 0 ? setItems(items - 1) : alert("No tienes nada en la bolsa")}

    return(
        <div className="counterDiv">
            <p className="counterP">LLevar: {items}</p>
            <div className="counterBtns">
            <button className="counterBtn" onClick={resta}>-</button>
            <button className="counterBtn">Añadir</button>
            <button className="counterBtn" onClick={suma}>+</button>
            </div>

        </div>
    )
}
export default ItemCounter;