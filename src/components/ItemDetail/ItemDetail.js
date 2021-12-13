import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button'
import React from "react";
import { Box } from '@mui/material';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import ItemCounter from '../ItemCounter/ItemCounter'
import Typography from '@mui/material/Typography';

export default function ItemDetail({ data }) {

  const { thumbnail, title, price, attributes, available_quantity } = data
  
  return (
    <Box sx={{ 
        width: 'auto', 
        maxHeight: '700px', 
        display: 'flex',
        flexDirection: 'row' ,
        justifyContent: 'center'
        }}>
        <Paper sx={{ boxShadow:0, 
        display:'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center', 
            alignContent: 'space-around' }}>
          <ImageList component="div" cols={1} 
            sx={{ 
              mt:1,
              width: 350, 
              height: 350, 
              display:'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
              border: 2, 
              borderRadius: 2, 
              borderColor: '#041C32', 
            }}>
            <ImageListItem sx={{width:'100%', height:'100%'}}>
              <img
              src={`${thumbnail}?w=248&fit=crop&auto=format`}
              srcSet={`${thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={title}
              loading="lazy"
            />
            <ImageListItemBar
              title={title}
              subtitle={"$ " + price}
            />
            </ImageListItem>
          </ImageList>
          <Card sx={{
            mt: 5,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'nowrap',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow:0 }}>
            <Typography align="center" variant="h5" sx={{ fontWeight:'bold', pb:2, color: '#064663' }}>
              Precio: $ {price}
            </Typography>
            <CardActions>
              <ItemCounter initial={0} stock={available_quantity}></ItemCounter>
            </CardActions>
            <Button variant='contained' color='success' sx={{ bgcolor:'#041C32', color:'#ECB365', mb:2, mt:2}}>Comprar</Button>
          </Card>
        </Paper>
        <Paper elevation={20} sx={{m:1, ml:3, width:'350px'}}>
          <ImageListItem key="Subheader" sx={{ width:'100%' }}>
            <ListSubheader component="div" sx={{bgcolor: '#041C32', color: '#ECB365', width:'100%'}}>Description</ListSubheader>
          </ImageListItem>
            <List dense={true} 
              sx={{
                width: '100%',
                maxWidth: '360px',
                position: 'relative',
                overflow: 'auto',
                maxHeight: '600px',
              }}
            >
              {
                attributes.map( (item) => {
                  return (
                    <ListItem key={item.name}>
                      <ListItemText sx={{ color: 'info.main' }} primary={item.name} secondary={item.value_name}/>
                    </ListItem>
                  )
                })
              }
            </List>
        </Paper>
    </Box>
  );
}