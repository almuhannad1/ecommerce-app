import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ productList }) {
  return (
    <div>
      {productList.map(item => (
        <ProductItem product={item} key={item?.id} />
      ))}
    </div>
  )
}

export default ProductList