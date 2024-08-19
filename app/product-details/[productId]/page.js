'use client'
import BreadCrumb from '@/app/_components/BreadCrumb';
import ProductApis from '@/app/_utils/ProductApis'
import React, { useEffect, useState } from 'react'
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';

function ProductDetails({ params }) {
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
        getProductById_();
    }, [params?.productId])

    const getProductById_ = () => {
        ProductApis.getProductById(params?.productId)
            .then(res => {
                console.log(res.data.data)
                setProductDetails(res.data.data)
            })
    }

    return (
        <div className='px-10 md:px-28 py-8'>
            <BreadCrumb />
            {/*  */}
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-0 md:flex-row justify-around'>
                <ProductBanner product={productDetails} />
                <ProductInfo product={productDetails} />
            </div>
            {/*  */}
        </div>
    )
}

export default ProductDetails