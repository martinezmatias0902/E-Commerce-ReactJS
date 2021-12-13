import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
//<></> {}

const ItemCount = ({initial, stock }) => {
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
      <Box component="div" sx={{ 
        bgcolor: '#fff',
        fontWeight: 'medium',
        boxShadow: 9,
        borderRadius: 2,
        color: '#04293A',
        display: 'flex', flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        '& button': { m: 1, minWidth: 50 }
        }}>
        <Button size="small" variant="outlined" color="error" onClick={eliminateItem}>-</Button>
        {itemCount}
        <Button size="small" variant="outlined" color="success" onClick={addItem}>+</Button>
      </Box>
  )
}
export default ItemCount;