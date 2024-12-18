import React from 'react'

const Product = ({products}) => {

  return (
    <div>
    {
        products.map((product)=>{
          return <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image} alt="" />
            <p>Price: ${product.price}</p>
          </div>
        })
    } 
    </div>
  )
}

export default Product
