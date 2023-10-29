import React from 'react'

async function productList(){
    let data = await fetch('https://dummyjson.com/products');
    data = await data.json();
    return data.products
}


const  Loader = async () => {
    let myProduct = await productList()
    console.log('myProduct', myProduct)
  return (
    <div>
        <h1>Loader</h1>
        {
            myProduct.map((item)=>{
                return(
                <>
                <h1>Product Title:- {item.title}</h1>
                <h2>Description:- {item.description}</h2>
                </>
                )
            })
        }
    </div>
  )
}

export default Loader