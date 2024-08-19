'use client'
import BreadCrumb from '@/app/_components/BreadCrumb';
import ProductApis from '@/app/_utils/ProductApis'
import React, { useEffect } from 'react'

function ProductDetails({ params }) {
    useEffect(() => {
        getProductById_();
    }, [params?.productId])

    const getProductById_ = () => {
        ProductApis.getProductById(params?.productId)
            .then(res => console.log(res.data.data))
    }

    return (
        <div className='px-10 md:px-28 py-8'>
            <BreadCrumb />
        </div>
    )
}

export default ProductDetails