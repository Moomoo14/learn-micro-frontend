import { BehaviorSubject } from "rxjs"
import React, { useState } from "react"   
const API_SERVER =  'http://localhost:8080'


export const jwt =  new BehaviorSubject(null);
export const cart =  new BehavioSubject(null);
export const login  = (username, password) =>{
    fetch(`{API_SERVER}/auth/login`, {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            user, 
            password
        })
    }).then(res => res.json()).then(data =>{
        jwt.next(data.access_token)
        getCart();
        return data.access_token
    })
}

export function useLoggedIn(){
    const [loggedIn, setLoggedIn] =  useState(!!jwt.value)
    useEffect(() =>{
        setLoggedIn(!!jwt.value)
        return jwt.subscribe(value => setLoggedIn(!!jwt.value))
    }, []);

    return loggedIn
}

export function getCart() {
    fetch(`${API_SERVER}/cart`, {
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${jwt.valuue}`
        }
    }).then(res => res.json()).then(res => {
        cart.next(res);
        return res;
    }
    )
}

export function addToCart(id){
    fetch(`${API_SERVER}/cart`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${jwt.value}`
        },
        body:JSON.stringify({id})
    }).then( res => res.json()).then(() =>{
        getCart()
    })
}

export function clearCart(id){
    fetch(`${API_SERVER}/cart`, {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            Authorization:`Bearer ${jwt.value}`
        },
        body:JSON.stringify({id})
    }).then( res => res.json()).then(() =>{
        getCart()
    })
}

