import * as React from "react";
//import ListElements from "./ListElements.js";
import ItemRowElement from "../ItemRowElement/ItemRowElement";
import Container from './ListElements';
import Grid from '@mui/material/Grid';
import { height } from "@mui/system";

//import ItemCount from "../ItemCount"
//<></>

const products = [{
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


const ItemListContainer = ({ greeting }) => {
  return (
    <>
      <Container className="itemsContainer">
        <Grid container justifyContent="center" spacing={2} xs={{
        columnGap: 3,
        rowGap: 1,
        flexGrow: 1
        }}>
          {
            products.map(product => {
              return (
                <Grid item xs={3} key={product.id}>
                  <ItemRowElement data={product} />
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
    </>
    
  )
}
export default ItemListContainer;