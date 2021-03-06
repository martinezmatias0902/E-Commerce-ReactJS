import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCounter from '../ItemCounter/ItemCounter'
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom'

const Item = ({ data }) => {
  
  const {  id, title, available_quantity, price, thumbnail } = data
  
  const checkSellerNickName = () => {
    if (data.seller === undefined) {
      return "Eshop Online"
    } else if (data.seller.eshop === undefined) {
      return "Eshop Online"
    } else {
      return data.seller.eshop.nick_name
    }
  }

  return (
    <Card sx={{ 
      maxWidth: '345px', 
      p:1, 
      border: 2,
      boxShadow: 7, 
      borderRadius: 2 ,
      borderColor: '#04293A',
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <CardMedia
        component="img"
        alt={title}
        image={thumbnail}
        margin= 'auto'
        display= 'block'
        sx={{ borderBottom: 2, borderColor:'#064663' }}
      />
      <CardContent component='div' sx={{ pr:2, pl:2, m:0 }}>
        <Typography variant="h6" component="div" sx={{ borderTop: 2, borderColor:'#064663' }}>
          {checkSellerNickName()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography align="center" color="green" sx={{ fontWeight:'semiBold', pt:3 }}>
          Precio: $ {price}
        </Typography>
        <Typography align="center" sx={{ fontWeight:'semiBold', pt:3, pb:0, mb:0 }}>
          Stock: {available_quantity}
        </Typography>
      </CardContent>
      <CardActions>
        <ItemCounter initial={0} stock={available_quantity}></ItemCounter>
      </CardActions>
      <Button variant="outlined" color="primary" sx={{  color:'#041C32', mt:2}}>Agregar al Carrito</Button>
      <Link to={`/products/${id}`} style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="success" sx={{ bgcolor:'#041C32', color:'#ECB365', mb:2, mt:2}}>Ver Detalle</Button>
      </Link>
    </Card>
  )
}
export default Item;