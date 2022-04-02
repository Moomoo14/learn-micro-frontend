import React , {useState, useEffect} from 'react'

import {cart, clearCart} from './cart'


export  default function MiniCart() {
    const [items, setItems] = useState(undefiend);
    const [showCart, setShowCart] =  useState(false);

    useEffect(() =>{
        setItems(cart.value?.cartItems)
        return cart.subscribe(c =>{
            setItems(c?.cartItems)
        });
    },[]);

    if(!items) return null

    return (<>
        <span onClick={() => setShowCart(!showCart)} id='' >
            <i className='ri-shopping-cart-2-fill text-2xl' id='' />
            {items.length}
        </span>
        {
            showCart && (
                <>
                    <div className='absolute p-5 border-4 border-blue-rounded' style={
                        {
                            width:300,
                            top:'2rem',
                            top: -250
                        }
                    }>
                        <div className="grid gap-3 text-sm" style={{gridTemplateColumns: '1fr 3fr 10fr'}}>
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
                            <div className="flex">
                                <div className="flex-grow">
                                    <button id='clearcart' className="bg-white border border-green-" onClick={clearCart}>Clear Cart</button>
                                </div>
                                <div className="flex-end">
                                    <button id='checkoutCart' className="bg-white border border-green-" onClick={checkout}>Checkout</button>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                </>
            )
        }
    </>)
}