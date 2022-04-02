import { render } from "solid-js/web";
import AddToCart from "./addToCart";

export default function placeAddToCart(el, id){
    render(() => <AddToCart id={id} />, el)
}

