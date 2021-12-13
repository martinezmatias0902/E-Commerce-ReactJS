import React, { useState, useEffect } from "react";
import axios from "axios";
import ItemDetail from "../ItemDetail/ItemDetail"
import Container from "@mui/material/Container"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';

export default function ItemDetailContainer() {

  const [Item, setItem] = useState()
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  const getItem = async () => {
    try{
      const request = await axios.get(`https://api.mercadolibre.com/items/${id}`)
      const data = await request.data
      return data
    }
    catch (err) {
      console.log("Error al realizar request en GetItem: " + err)
      return err
    }
  }

  useEffect(() => {
    setTimeout(() => {
      getItem().then(res => {
        setItem(res)
        setLoading(false)
      })
  }, 2000)
  }, [])

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Typography variant="h4" component="div" gutterBottom align="center" mt={5} >
        Item Detail Container
      </Typography>
      <Box  sx={{ p: 2, boxShadow: 10, border: 1, borderRadius: 8, borderColor: 'grey.500', textAlign: 'center' }} >
        {
          loading
          ?
          <CircularProgress
            color='success'
            timeout={3000}
          />
          :
          <ItemDetail data={Item} />
        }
      </Box>
    </Container>
  );
}