import Item from "../Item/Item";
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';

const ItemList = ({ data }) => {

  return (
    <Container fixed>
      <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center">
        {
          data.map( (product) => {
            return (
              <Grid item xs="auto" key={product.id}>
                <Item data={product} />
              </Grid>
            )
          })
        }
      </Grid>
    </Container>
  )
}
export default ItemList;