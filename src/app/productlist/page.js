import React from "react";
import ProductButton from "./productButton";

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
            <h4>This is Product Name:- {productItem.title}</h4>
            <h4>This is Product Brand:- {productItem.brand}</h4>
            <h4>This is Product Description:- {productItem.description}</h4>
            <ProductButton discountPercentage={productItem.discountPercentage} />
            <br></br>
          </>
          )
        })
      }
    </div>
  )
}

export default ProductListing;