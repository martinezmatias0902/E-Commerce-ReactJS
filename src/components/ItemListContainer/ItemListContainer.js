import React from "react";
import ItemList from "../ItemList/ItemList"
import axios from 'axios'
import { useState, useEffect } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import Container from "@mui/material/Container";


export default function ItemListContainer() {

  const [ProductsList, setProduct] = useState()
  const [loading, setLoading] = useState(true)

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
    setTimeout(() => {
      requestData().then(res => {
        setProduct(res)
        setLoading(false)
      })
  }, 1000)
  }, [])

  return (
    <>
      {
        loading
        ?
        <Container sx={{
          display:'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <CircularProgress
              color='success'
              timeout={1000}
              sx={{mt:10}}
          />
        </Container>
        :
        <ItemList data={ProductsList}/>
      }
    </>
  );
}
