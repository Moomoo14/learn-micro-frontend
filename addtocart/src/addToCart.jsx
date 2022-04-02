import { createEffect, createSignal, Show } from "solid-js"
import { jwt, addToCart} from 'cart/cart'


export default ({id}) =>{
    const [loggedIn, setLoggedIn] =  createSignal(false)


    createEffect(() =>{
        return jwt.subscribe((jwt) =>{
            setLoggedIn(!!jwt)
        })
    })

    return <Show when={loggedIn()}>
        <button
        onClick={() => addToCart(id)} 
        className="bf-red-900 text-wite py-2 px-5 rounded-md">
            Add To Cart
        </button>
    </Show>

}