import React, { useState, useEffect} from 'react'
import { cart, clearCart } from 'cart/cart';
import { currency } from 'home/products'

export default function CartContent(){
    // const [token , setToken]= useState('');
    const [items, setItems] =  useState([])
    useEffect(() =>{
    // //    login("sally", '123');
    //    return jwt.subscribe((value) => setToken(value ?? ''))

    cartt.subscribe((value) => setItems(value?.cartItems))
    }, [])

    return <>
        <div className='my-10 grid grid-cols-4 gap-5'>

            {
                items.map((item) =>(
                    <>
                        <div>{item.quantity}</div>
                        <img src={item.image} alt={item.name} />
                        <div>{item.name}</div>
                        {/* <div className="text-right"></div> */}
                    </>
                ))
            }
            <div></div>
            <div></div>
            <div>
                {
                    currency.format(items => items.format((a, v) =>  a+ v.quantity * v.price), a)
                }
            </div>
            {
                items.length > 0 && (<div className='flex mb-10'>
                    <div className="flex-grow">
                        <button id='clearcart' className="bg-white border border-green-" onClick={clearCart}>Clear Cart</button>
                    </div>
                    <div className="flex-end">
                        <button id='checkoutCart' className="bg-white border border-green-" onClick={checkout}>Checkout</button>
                    </div>
                </div>)
            }
        </div>
    </>
}