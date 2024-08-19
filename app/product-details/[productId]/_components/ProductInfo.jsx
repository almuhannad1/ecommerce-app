import React from 'react'

// icons
import { ShoppingCart } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import { BadgeAlert } from 'lucide-react';
import SkeletonProductInfo from './SkeletonProductInfo';

function ProductInfo({ product }) {
  console.log()
  return (
    <div>
      {product?.id ?
        <div>
          {/* Title */}
          <h2 className='text-[20px]'>{product?.attributes?.title}</h2>
          {/* Category */}
          <h2 className='text-[15px] text-gray-400'>{product?.attributes?.category}</h2>
          {/* Description */}
          {product?.attributes?.description?.map((child, childIndex) => (
            <h2 key={childIndex} className='text-[15px] mt-5'>{child?.children[0]?.text}</h2>
          ))}
          {/* Eligible For Instant Delivery */}
          <h2 className='text-[13px] text-gray-500 flex gap-2 mt-2 items-center'>{product?.attributes?.instantDelivery ? <BadgeCheck className='text-green-500 w-5 h-5' /> : <BadgeAlert className='w-5 h-5' />}Eligible For Instant Delivery</h2>
          {/* Price */}
          <h2 className='text-[32px] text-primary mt-3'>${product?.attributes?.price}</h2>
          {/* Add to cart */}
          <button className='flex gap-2 bg-primary hover:bg-secondary rounded-lg text-white p-3'><ShoppingCart /> Add to Cart</button>
        </div>
        :
        <SkeletonProductInfo />
      }
    </div>
  )
}

export default ProductInfo