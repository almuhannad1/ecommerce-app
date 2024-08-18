import React from 'react'

function ProductDetails({ params }) {
    return (
        <div>{params?.productId}</div>
    )
}

export default ProductDetails