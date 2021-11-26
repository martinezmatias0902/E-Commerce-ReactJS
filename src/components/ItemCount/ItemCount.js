import React, { useState } from "react";
//<></> {}

const ItemCount = ({initial, productName, stock }) => {
  console.log(productName)

  let [itemCount, setState] = useState(Number(initial))

  const addItem = () => {
    if (stock === undefined) {
      return console.log("error en el stock")
    } else {
      if (itemCount === stock) {
        return itemCount
      } else if (itemCount < stock) {
        setState(itemCount + 1)
      }
    }
  }
  const eliminateItem = () => {
    if (stock === undefined) {
      return console.log("error en el stock")
    } else {
      if (itemCount === 0) {
        return itemCount
      } else {
        setState(itemCount - 1)
      }
    }
  }

  return (
    <div>
      <h5>
        T-shirt {productName}
      </h5>
      <div>
        <button onClick={eliminateItem}>-</button>
        <span>{itemCount}</span>
        <button onClick={addItem}>+</button>
      </div>
    </div>
  )
}
export default ItemCount;