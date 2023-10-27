import React from "react";


async function FetchData (){
  const Data =  await fetch('https://dummyjson.com/products');
  const productData = await Data.json()
  return productData.products
}


async function ProductListing () {
  let allProductData = await FetchData()
  console.log("allProductData", allProductData)
  return (
    <div>
      <h1>This is The Server Side Rendering!</h1>
      {
        allProductData.map((productItem)=>{
          return (
          <>
           {console.log("allProductData", productItem)}
            <h4>This is Product Name:- {productItem.title}</h4>
            <h4>This is Product Brand:- {productItem.brand}</h4>
            <h4>This is Product Description:- {productItem.description}</h4>
            <br></br>
          </>
          )
        })
      }
    </div>
  )
}

export default ProductListing;