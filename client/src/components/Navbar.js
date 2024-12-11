import React, { useEffect, useState } from 'react'

const Navbar = () => {

  return (
    <div>
        <div style={{display:"flex", textAlign:"right",backgroundColor:"blue",height:"50px",color:"White",fontSize:"20px"}}>
                E-Commerce
        <button style={{backgroundColor:"red",height:"50px",color:"White",alignItems:"right"}}>Cart</button>
        </div>
    </div>
  )
}

export default Navbar