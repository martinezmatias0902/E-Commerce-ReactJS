import React from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ItemDetail({ data }) {
  return (
    <>
      <ImageList sx={{ width: 500, height: 350 }}>
          <ImageListItem key={data.thumbnail}>
            <img
              src={`${data.thumbnail}?w=248&fit=crop&auto=format`}
              srcSet={`${data.thumbnail}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={data.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={data.title}
              subtitle={"$ " + data.price}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${data.title}`}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
            
          </ImageListItem>
          <ImageListItem key="Subheader" cols={1}>
            <ListSubheader component="div">Description</ListSubheader>
              <List dense={true} >
                {
                  data.attributes.map( (item) => {
                    return (
                      <ListItem>
                        <ListItemText sx={{ color: 'info.main' }} primary={item.name} secondary={item.value_name}/>
                      </ListItem>
                    )
                  })
                }
              </List>
          </ImageListItem>
      </ImageList>
    </>
  );
}