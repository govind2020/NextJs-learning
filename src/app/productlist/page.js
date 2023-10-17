'use client'

import React, {useEffect, useState} from 'react'

const page = () => {

    const [productData, setProductData]= useState([])

    useEffect(async()=>{
        const data = await fetch("https://dummyjson.com/products");
        const fetchData = await data.json()
        console.log('fetchData', fetchData)
        setProductData(fetchData.products)
    },[])

  return (
    <div>
        <h1>Product List</h1>
        {
            productData.map((productItem)=>{
                return(
                    <h5>Product Name:- {productItem.title} , Price:- {productItem.price}</h5>
                )
            })
        }
    </div>
  )
}

export default page