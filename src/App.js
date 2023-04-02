import React,{useEffect,useState} from 'react';
import Product from './Product';
import axios from 'axios';
import "./App.css"

const App = () => {
  const [products,setPrducts] = useState([])
 useEffect(() =>{
  
  axios.get('https://fakestoreapi.com/products').then(resp => {

  setPrducts(resp.data);
});

 },[])
  return (
    <>
      {products.length <= 0 ? <h1>Fetching product data</h1> :  
        
     <div className='product-list'>
     <Product products= {products} />
     </div>
      
      }
    </>
  )
}

export default App
