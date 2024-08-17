import React from 'react'

function ProductList({ productList }) {
  return (
    <div>
      {productList.map(item => (
        <div key={item?.id}>
          {item?.attributes?.title}
        </div>
      ))}
    </div>
  )
}

export default ProductList