import patatassin from '../../assets/patatassin.png';
import ModalClientes from './ModalClientes';
import { useState } from 'react';
import ModalProductos from './ModalProductos';

import {useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import CartElements from './CartElements';
import CartTotal from './CartTotal';



const Ticket = () => {

   const {cart} =useContext(dataContext);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


   

        

           


            return (

                <>
                <div className="w-full max-w-md  p-4 bg-zinc-200 border border-gray-200 rounded-3xl shadow-lg  ">
                  
              <div  onClick={handleShow}>
                <div  className="border-2 border-gray-400 p-4 rounded-xl font-nunito"  >
                        <div className="flex justify-between">
        
                        <h1>NºPedido: <span className='font-extrabold'> 328115</span></h1>
                        <h1>Entrega: <span className='font-extrabold'> 28/10/24 18:30</span> </h1>
                    </div>
        
                    <div className="flex justify-between mt-4 ">
        
                            <h1>Cliente: <span className='font-extrabold'>Carlos</span></h1>
                            <h1>Teléfono: <span className='font-extrabold'>666455827</span></h1>
                        </div>
                    </div>
             </div>  
             
        
        
                  <p className="text-lg border-b-2 font-normal font-nunito text-gray-900 dark:text-gray-900 mt-4">Detalle del pedido.</p>
                   
                   <CartElements/>
                   <CartTotal/>


                








        </div>
        
                  <ModalClientes show={show} handleClose={handleClose} />
          
            </>


            )



        }

     

export default Ticket
