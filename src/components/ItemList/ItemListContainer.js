import React from "react";
import ListElements from "./ListElements.js";
//<></>
const ItemListContainer = ({ greeting }) => {
  return (
    <ListElements>
      <h2>
        Hello {greeting}
      </h2>
    </ListElements>
  )
}
export default ItemListContainer;