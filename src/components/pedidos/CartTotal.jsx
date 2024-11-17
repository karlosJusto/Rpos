

import { useState, useContext } from 'react';
import { dataContext } from '../Context/DataContext'




const CartTotal = () => {

    const {cart} =useContext(dataContext);

    const total = cart.reduce((acc,elemento) => acc + elemento.price, 0);


  return cart.length > 0 ? (
         <div>
            <a href="#" className="inline-flex  items-center text-xl font-normal text-gray-500 hover:underline dark:text-gray-400">  
            <span className='text-end'>TOTAL: {total.toFixed(2)} €</span> </a>
        </div>
  ): (
     <h1></h1>
  );
}

export default CartTotal