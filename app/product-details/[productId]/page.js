'use client'
import React, { useEffect, useState } from 'react'
import BreadCrumb from '../../_components/BreadCrumb';
import ProductApis from '../../_utils/ProductApis'
import ProductBanner from './_components/ProductBanner';
import ProductInfo from './_components/ProductInfo';
import ProductList from '../../_components/ProductList';
import { usePathname } from 'next/navigation';

function ProductDetails({ params }) {
    const path = usePathname();
    const [productDetails, setProductDetails] = useState({})
    const [productList, setProductList] = useState([])

    useEffect(() => {
        getProductById_();
    }, [params?.productId])

    const getProductById_ = () => {
        ProductApis.getProductById(params?.productId)
            .then(res => {
                setProductDetails(res.data.data);
                getProductByCategory_(res.data.data);
            })
            .catch(err => {
                console.error("Error fetching product details:", err);
            });
    };

    const getProductByCategory_ = (product) => {
        ProductApis.getProductByCategory(product?.attributes?.category)
            .then(res => {
                console.log(" = =", res?.data?.data)
                setProductList(res?.data?.data)
            })
    }

    return (
        <div className='px-10 md:px-28 py-8'>
            <BreadCrumb path={path} />
            {/* Product Banner & Product Info */}
            <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 gap-5 sm:gap-0 md:flex-row justify-around'>
                <ProductBanner product={productDetails} />
                <ProductInfo product={productDetails} />
            </div>

            {/*  */}
            <div>
                <h2 className='mt-24 text-xl mb-5'>Similar Products</h2>
                <ProductList productList={productList} />
            </div>

        </div>
    )
}

export default ProductDetails