import React from "react";
import ProductButton from "./productButton";
import custom from '../custom.module.css' // created custom class and import here
import outside from '@/style/outside.module.css'

async function FetchData (){
  const Data =  await fetch('https://dummyjson.com/products');
  const productData = await Data.json()
  return productData.products
}


async function ProductListing () {
  let allProductData = await FetchData()
  return (
    <div>
      <h1>This is The Server Side Rendering!</h1>
      {
        allProductData.map((productItem)=>{
          return (
          <>
            <h4 className={custom.main} >This is Product Name:- {productItem.title}</h4>
            <p className={outside.main}>This is Product Brand:- {productItem.brand}</p>
            <p className="main">This is Product Description:- {productItem.description}</p>
            <ProductButton  discountPercentage={productItem.discountPercentage} />
            <br></br>
          </>
          )
        })
      }
    </div>
  )
}

export default ProductListing;