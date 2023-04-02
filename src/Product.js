import React from 'react';
import './App.css'

const Product = ({ products }) => {
    
    return (
        <div className='product-list'>
            {products.map((product) => <div key = {product.id} className="card" >
                <img  src= {product.image} alt="Card image cap" />
                <div>
                    <h5>{product.title}</h5>
                    <p>{product.description}</p>
                   
                </div>



            </div>
            )}
        </div>
    )
}

export default Product
