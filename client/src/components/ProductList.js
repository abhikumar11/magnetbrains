import React, { useEffect, useState } from 'react'
import axios from "axios";
const ProductList = () => {
    const [productList,setProductList]=useState([]);
    const [cartItem,setCartItem]=useState([]);
  useEffect(()=>{
    loadData();
    
  },[]);
  const addToCart = (id) =>{
      setCartItem([...cartItem,id]);
      localStorage.setItem('productList',JSON.stringify(cartItem));
  }
  const loadData=async()=>{
      const temp=await axios.get('https://dummyjson.com/products?limit=10');
      setProductList(temp.data.products);
  }
  console.log(productList);
  return (
    <div>
      <h1>Product</h1>
      <div>
        <ul>
          {
            productList.map((item,index)=>
              <div style={{display:"inline-block"}}>
            <li key={index} style={{listStyle:"none"}}>
              <img src={item.images[0]} alt="na" style={{width:"20%",height:"20%"}}/>
                <p>{item.title}</p>
                <button value={item.id} style={{height:"50px",width:"100px",backgroundColor:"blue",color:"white"}} onClick={(e)=>addToCart(item)}>Add to Cart</button>
            </li>
            </div>
            )
          }
        </ul>
      </div>
    </div>
  )
}

export default ProductList;