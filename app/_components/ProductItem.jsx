import React from 'react'
import Image from 'next/image'

function ProductItem({ product }) {
    return (
        <div>
            <Image src={product?.attributes?.banner?.data?.attributes?.url} alt='banner-card' width={400} height={350} className='rounded-t-lg h-[170px] object-cover' />
            <div className='p-3'>
                <h2 className='text-[14px] font-medium'>{product?.attributes?.title}</h2>
                <h2 className='text-[10px] text-gray-400'>{product?.attributes?.category}</h2>
            </div>
        </div>
    )
}

export default ProductItem