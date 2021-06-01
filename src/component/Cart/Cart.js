import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    let totalSalary = 0;
    for (let i = 0; i < cart.length; i++) {
        const details = cart[i];
            totalSalary = totalSalary + details.salary;
        
    }
    
    

    // let totalSalary = cart.reduce((sum, userInformation) =>sum + userInformation.salary, 0)
    return (
        <div>
            <h3>Click User: {cart.length}</h3>
            <p>Total salary: {totalSalary}</p>         
        </div>
    );
};

export default Cart;