'use client'
import ProductList from './ProductList'
import ProductApis from '../_utils/ProductApis'
import { useEffect, useState } from 'react'

function ProductSection() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getLatestProducts_()
  }, [])

  const getLatestProducts_ = () => {
    ProductApis.getLatestProducts().then(res => {
      console.log(res.data.data)
      setProductList(res.data.data)
    })
  }
  return (
    <div>
      <ProductList productList={productList} />
    </div>
  )
}

export default ProductSection