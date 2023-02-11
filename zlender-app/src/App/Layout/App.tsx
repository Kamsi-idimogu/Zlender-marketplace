import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Catalog from '../../Features/Catalog/Catalog';
import { Product } from '../Models/product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:500/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
  }, []);

  function addProduct(){
    setProducts(prevState => [...prevState,
    {
      id: prevState.length + 101,
      name: 'product',
      price: 100,
      brand: 's',
      description: 'd',
      pictureUrl: 'http://picsum.photos/200'
    }
    ])
  }

  return (
    <>
      <Typography variant='h1'>Hwllo</Typography>
      <Catalog products={products} addProduct={addProduct}/>
      <div ></div>
    </>
  );
}

export default App;
