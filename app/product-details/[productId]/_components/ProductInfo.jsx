'use client'
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation';
import { CartContext } from '../../../_context/CartContext'

// icons
import { ShoppingCart } from 'lucide-react';
import { BadgeCheck } from 'lucide-react';
import { BadgeAlert } from 'lucide-react';
import SkeletonProductInfo from './SkeletonProductInfo';

// clerk
import { useUser } from '@clerk/nextjs'
import CartApis from '../../../_utils/CartApis';

function ProductInfo({ product }) {
  const router = useRouter();
  const { user } = useUser()
  const { cart, setCart } = useContext(CartContext)

  const handleAddToCart = () => {
    if (!user) {
      router.push('/sign-in')
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress.emailAddress,
          product: [product?.id]
        }
      }
      CartApis.addToCart(data).then(res => {
        console.log("Done")
        setCart(oldCart => [...oldCart,
        {
          id: res?.data?.data?.id,
          product
        }])
      }).catch(err => {
        console.log(err)
      })
    }
  }

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
          <button onClick={() => handleAddToCart()} className='flex gap-2 bg-primary hover:bg-secondary rounded-lg text-white p-3'><ShoppingCart /> Add to Cart</button>
        </div>
        :
        <SkeletonProductInfo />
      }
    </div>
  )
}

export default ProductInfo