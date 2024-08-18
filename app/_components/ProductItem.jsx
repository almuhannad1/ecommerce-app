import React from 'react'
import Image from 'next/image'

function ProductItem({ product }) {
    return (
        <div>
            <Image src={product?.attributes?.banner?.data?.attributes?.url} alt='banner-card' width={400} height={350} />
            {product?.attributes?.title}
        </div>
    )
}

export default ProductItem