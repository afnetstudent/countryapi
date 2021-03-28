import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPopulation = cart.reduce((totalPopulation, country)=> (totalPopulation +country.population),0)
    return (
        <div>
            <h2>its cart {cart.length}</h2>
            <h3>Population : {totalPopulation}</h3>
        </div>
    );
};

export default Cart;