import React from "react";
import ItemList from "../ItemList/ItemList"
import axios from 'axios'
import { useState, useEffect } from "react";

const productsFallback = [{
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

export default function ItemListContainer() {

  const [ProductsList, setProduct] = useState(productsFallback)

  const requestData = async () => {
    try{
      const request = await axios.get('https://api.mercadolibre.com//sites/MLA/search?q=notebookasus&limit=10')
      const data = await request.data
      const products = data.results
      return products
    }
    catch (err) {
      console.log("Error al realizar request en ListItem: " + err)
      return err
    }
  }

  useEffect(() => {
    requestData().then(res => {
      console.log("Respuesta de RequestData: ", res)
      setProduct(res)
    })
  }, [])

  return (
    <>
      <ItemList data={ProductsList}/>
    </>
  );
}
