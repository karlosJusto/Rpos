

import { useState, useContext } from 'react';
import { dataContext } from '../Context/DataContext'




const CartTotal = () => {


    const {cart} =useContext(dataContext);

    const total = cart.reduce((acc,elemento) => acc + elemento.cantidad*elemento.price , 0);


  return cart.length > 0 ? (

<>
         <div>
            <a href="#" className="inline-flex  items-center text-xl font-normal text-gray-500 hover:underline dark:text-gray-400">  
            <span className='text-end'>TOTAL: {total.toFixed(2)} €</span> </a>
        </div>

        <div className=' ms-24 '>

                <button
                            className="mt-8 w-48 tracking-wide    bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                            <svg width="28px" height="28px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0">
                                </g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                                 <path d="M4 18V6" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path> <path d="M20 12L20 18" stroke="#ffffff" strokeWidth="1.5"
                                  strokeLinecap="round"></path> <path d="M12 10C16.4183 10 20 8.20914 20 6C20 3.79086 16.4183 2 12 2C7.58172 2 4 3.79086 4 6C4 8.20914 7.58172 10 12 10Z" 
                                  stroke="#ffffff" strokeWidth="1.5"></path> <path d="M20 12C20 14.2091 16.4183 16 12 16C7.58172 16 4 14.2091 4 12" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                                   <path d="M20 18C20 20.2091 16.4183 22 12 22C7.58172 22 4 20.2091 4 18" stroke="#ffffff" strokeWidth="1.5"></path> </g></svg>
                            <span className="ml-2 font-nunito text-lg">
                                Generar Pedido
                            </span>
                </button>


                </div>

</>
  ): (
     <h1></h1>
  );
}

export default CartTotal