import React from 'react';
import useStore from '../zustand/store';

const Cart = () => {

    const cart = useStore(state => state.cart);
    const addToCart = useStore(state => state.addToCart);


    return (
        <div>
            <button onClick={() => addToCart({id: 1, name: 'Product I'})}>Add To Cart</button>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Cart;