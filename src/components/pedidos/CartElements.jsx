

import ModalClientes from './ModalClientes';
import { useState, useContext } from 'react';
import ModalProductos from './ModalProductos';

import { dataContext } from '../Context/DataContext'





const CartElements = () => {

    const {cart} =useContext(dataContext);


    return cart.map ((product) => {

        console.log(product);


  return (
    <ul className="my-4 space-y-3" key={product.id}>
            
    <li>
        <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
        <img src={product.imagen} alt="patatas" className='w-12'/>
        <span className="ms-3 whitespace-nowrap"><span>1</span> x </span>
        <span className="flex-1 ms-3 whitespace-nowrap truncate">{product.name}</span>
        <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-md font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{product.price.toFixed(2)}<span>€</span></span>
        </a>

    </li>

 </ul>
  )

  }

    )}


export default CartElements