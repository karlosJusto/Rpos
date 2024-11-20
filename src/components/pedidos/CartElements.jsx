


import { useState, useContext } from 'react';
import ModalProductos from './ModalProductos';

import { dataContext } from '../Context/DataContext'
import ElementsCantidad from './ElementsCantidad';






const CartElements = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (product) => setShow(product);

    const {cart} =useContext(dataContext);


  
  



      return (

        <>
         
        { 
        

        cart.map ((product) => (
            
    
            <ul className="my-4 space-y-3" key={product.id} >
                    
            <li onClick={() => handleShow(product)} >
                <a href="#" className="flex items-center p-3  font-bold text-gray-100 rounded-lg group hover:shadow bg-gray-600 hover:bg-gray-500 ">
                <img src={product.imagen} alt={product.name} className='w-12'/>
                <ElementsCantidad cantidad={product.cantidad}/>
                <span className="flex-1 ms-3 whitespace-nowrap truncate">{product.name}</span>
                <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-md font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">{(product.price * product.cantidad).toFixed(2)}<span>€</span></span>
                </a>

            </li>



            </ul>

        ))}

  




  <ModalProductos show={show} handleClose ={handleClose} product={show} />
         
           
  </>  
  
); 

};
export default CartElements