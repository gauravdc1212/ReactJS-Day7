import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div className='container'>
      <h2>Product main Page</h2>
      <div className='d-flex flex-row m-2'>
        <NavLink className='p-2' to='product1'>Product 1</NavLink>
        <NavLink className='p-2' to='product2'>Product 2</NavLink>
        <NavLink className='p-2' to='product3'>Product 3</NavLink>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
