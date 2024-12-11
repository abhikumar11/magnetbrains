import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Cart = () => {
    let sum=0;
    const[product,setProduct]=useState([]);
    useEffect(()=>{
            loadData();
    })
    const loadData=async()=>{
        const temp=await axios.get('https://dummyjson.com/products?limit=2');
        setProduct(temp.data.products);
    }
  return (
    product.map(product=>sum+=parseFloat(product.price)),
    <div>
        Cart
       <div>
       <ul>
          {
            product.map((item,index)=>
              <div style={{display:"inline-block"}}>
            <li key={index} style={{listStyle:"none"}}>
              <img src={item.images[0]} alt="na" style={{width:"20%",height:"20%"}}/>
                <p>{item.title}</p>
                <p>{item.price}</p>
                
            </li>
            
            </div>
            )
           
          }
        </ul>
        <p>Total Amount:{sum}</p>
        <button style={{height:"50px",width:"100px",backgroundColor:"red",color:"white"}}>Check Out</button>
       </div>
    </div>
  )
}

export default Cart