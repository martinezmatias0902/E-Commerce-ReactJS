import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "../ItemDetail/ItemDetail"
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const getItem = async () => {
  try{
    const request = await axios.get('https://api.mercadolibre.com//sites/MLA/search?q=3070ti&limit=1')
    const data = await request.data
    const products = data.results
    return products
  }
  catch (err) {
    console.log("Error al realizar request en GetItem: " + err)
    return err
  }
}

export default function ItemDetailContainer() {

  const [Item, setItem] = useState([])

  useEffect(() => {
    setTimeout(() => {
      getItem().then(res => {
        console.log("Respuesta de GetItem: ", res)
        setItem(res)
    }, 2000)})
  }, [])

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Typography variant="h4" component="div" gutterBottom align="center" mt={5} >
        Item Detail Container
      </Typography>
      <Box sx={{ p: 2, boxShadow: 10, border: 1, borderRadius: 8, borderColor: 'grey.500' }} >
        {
          Item.map( (item) => {
            return (
              <ItemDetail data={item} />
            )
          })
        }
      </Box>
    </Container>
  );
}