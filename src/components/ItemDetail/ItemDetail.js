import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button'
import React, { useState, useEffect } from "react";

export default function ItemDetail({ data }) {

  const { thumbnail, title, price, attributes } = data

  console.log(data)
  
  return (
    <ImageList sx={{ width: 'auto', maxHeight: 700 }}>
        <ImageListItem key={thumbnail}>
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
        <ImageListItem key="Subheader" cols={1}>
          <ListSubheader component="div">Description</ListSubheader>
            <List dense={true} >
              {
                attributes.map( (item) => {
                  return (
                    <ListItem>
                      <ListItemText sx={{ color: 'info.main' }} primary={item.name} secondary={item.value_name}/>
                    </ListItem>
                  )
                })
              }
              <ListItem>
                <Button size="medium" variant="contained" color="success">Comprar</Button>
              </ListItem>
            </List>
        </ImageListItem>
    </ImageList>
  );
}