import React from 'react'

const OrderLine = ({item}) => {
  return (
    <div className='orderLine'>
        <div className='productImg' style={{ backgroundImage: `url("${item.product.imgURL}")` }}></div>
        {/* <div className='productImg'></div> */}
        <div>{item.product.name}</div>
        <div>€ {item.product.price}</div>
        <div>{item.quantity}</div>
        <div>€ {item.product.price * item.quantity}</div>
    </div>
  )
}

export default OrderLine