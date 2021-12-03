import React, {useState, useEffect} from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img from '../../images/descarga.jpg'
import ItemCount from '../ItemCount'
//import Loader from "react-loader-spinner"
import CircularProgress from '@mui/material/CircularProgress';



const ItemRowElement = ({ data }) => {
  const { type, nombre, initial, stock, price } = data

  const [loading, setLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setLoading(false)
      }, 2000)
  }, [])

  return (
    <Card sx={{ 
    minHeight: 450, 
    maxHeight: 500, 
    maxWidth: 300,
    p:1, 
    boxShadow: 1, 
    borderRadius: 2 ,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
    }}>
      {
        loading
        ?
        <CircularProgress
          color='success'
          timeout={3000}
        />
        :
        <CardMedia
          component="img"
          alt={nombre}
          height="220"
          image={img}
        />
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {type}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          No te lo pierdas! {type} {nombre}
        </Typography>
        <Typography align="center" color="green" sx={{ fontWeight:'semiBold', pt:3 }}>
          Precio: $ {price}
        </Typography>
        
      </CardContent>
      <CardActions>
        <ItemCount initial={initial} stock={stock}></ItemCount>
      </CardActions>
    </Card>
    
  )
}
export default ItemRowElement;