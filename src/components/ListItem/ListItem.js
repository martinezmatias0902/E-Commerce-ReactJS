import React, { useState, useEffect } from "react";
import Item from "../Item/Item";
import Container from './ListStyles';
import Grid from '@mui/material/Grid';
import axios from 'axios'

const productsFallback = [{
  id: 1,
  type: 'Remera',
  nombre: 'Nirvana',
  initial: 1,
  stock: 5,
  price: '2,500'
}, {
  id: 2,
  type: 'Pantalon',
  nombre: 'Levis',
  initial: 3,
  stock: 10,
  price: '3,000'
}
]

const ListItem = () => {
  const [ProductsList, setProduct] = useState(productsFallback)

  const requestData = async () => {
    try{
      const request = await axios.get('https://api.mercadolibre.com//sites/MLA/search?q=notebookasus&limit=10')
      const data = await request.data
      const products = data.results
      return products
    }
    catch (err) {
      console.log("Error al realizar request en ListItem: " + err)
      return err
    }
  }

  useEffect(() => {
    requestData().then(res => {
      console.log("Respuesta de RequestData: ", res)
      setProduct(res)
    })
  }, [])

  return (
    <>
      <Container>
        <Grid container justifyContent="center" spacing={2} >
          {
            ProductsList.map( (product) => {
              return (
                <Grid item xs={3} key={product.id}>
                  <Item data={product} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </>
  )
}
export default ListItem;