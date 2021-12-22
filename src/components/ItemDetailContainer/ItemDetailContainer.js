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
  }, 1000)
  }, [])

  return (
    <Container component="main" sx={{ mb: 4, display:'flex', flexDirection:'column', alignItems: 'center' }}>
      {
        loading
        ?
        <>
        <Typography variant="h6">Cargando...</Typography>
        <CircularProgress
            color='success'
            timeout={1000}
        />
        </>
        :
        <>
        <Typography align='center' variant="h6" sx={{pb:3}}	>{Item.title}</Typography>
        <Box sx={{ 
          display: 'flex', 
          p: 2, 
          boxShadow: 10, 
          border: 1, 
          borderRadius: 8, 
          height:'auto',
          borderColor: 'grey.500', 
          flexDirection: 'row',
          justifyContent: 'center'
          }} >
          <ItemDetail data={Item}/>
        </Box>
        </>
      }
    </Container>
  );
}