import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

// lucide icon
import { List } from 'lucide-react';

function ProductItem({ product }) {
    return (
        <Link href={`/product-details/${product.id}`} className='hover:border p-1 hover:shadow-md rounded-lg border-teal-400 hover:cursor-pointer'>
            <Image src={product?.attributes?.banner?.data?.attributes?.url} alt='banner-card' width={400} height={350} className='rounded-t-lg h-[170px] object-cover' />

            {/* Title - Category & Price */}
            <div className='flex justify-between p-3 items-center bg-gray-50 rounded-b-50'>
                {/* Left side */}
                <div className=''>
                    <h2 className='text-[14px] font-medium line-clamp-2'>{product?.attributes?.title}</h2>
                    <h2 className='text-[10px] text-gray-400 flex gap-1 items-center'><List className='w-4 h-5' />{product?.attributes?.category}</h2>
                </div>
                {/* Right Side */}
                <h2>${product?.attributes?.price}</h2>
            </div>
            {/* == Title - Category & Price == */}
        </Link>
    )
}

export default ProductItem