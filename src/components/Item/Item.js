import React, {useState, useEffect} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ItemCounter from '../ItemCounter/ItemCounter'
import CircularProgress from '@mui/material/CircularProgress';

const Item = ({ data }) => {
  
  const [loading, setLoading] = useState(true)
  const {  title, available_quantity, price, thumbnail } = data

  useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 2000)
  }, [])
  
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
          alt={title}
          height="220"
          image={thumbnail}
        />
      }
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {checkSellerNickName()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {title}
        </Typography>
        <Typography align="center" color="green" sx={{ fontWeight:'semiBold', pt:3 }}>
          Precio: $ {price}
        </Typography>
        <Typography align="center" sx={{ fontWeight:'semiBold', pt:3, pb:0, mb:0 }}>
          Cantidad:
        </Typography>
      </CardContent>
      <CardActions  sx={{ pt:0, mt:0 }}>
        <ItemCounter initial={0} stock={available_quantity}></ItemCounter>
      </CardActions>
    </Card>
  )
}
export default Item;