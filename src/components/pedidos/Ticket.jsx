import patatassin from '../../assets/patatassin.png';
import ModalClientes from './ModalClientes';
import { useState } from 'react';

const Ticket = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);






  return (
          
    <>
        <div className="w-full max-w-md  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-100 dark:border-gray-100 " onClick={handleShow}>
          
      <div>
        <div  className="border-2 border-gray-400 p-4 rounded-xl font-nunito"  >
                <div className="flex justify-between">

                <h1>NºPedido: <span className='font-extrabold'> 325</span></h1>
                <h1>Entrega: <span className='font-extrabold'> 28/10/24 18:30</span> </h1>
            </div>

            <div className="flex justify-between mt-4 ">

                    <h1>Nombre: <span className='font-extrabold'>Carlos</span></h1>
                    <h1>Teléfono: <span className='font-extrabold'>666455827</span></h1>
                </div>
            </div>
     </div>  
     


          <p className="text-lg border-b-2 font-normal font-nunito text-gray-900 dark:text-gray-900 mt-4">Detalle del pedido.</p>
           <ul className="my-4 space-y-3">
            
              <li>
                  <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <img src={patatassin} alt="patatas" className='w-12'/>
                  <span className="ms-3 whitespace-nowrap"><span>1</span> x </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Patatas Fritas</span>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-md font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">88.50 <span>€</span></span>
                  </a>
     
                 
              </li>

              <li>
              <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <img src={patatassin} alt="patatas" className='w-12'/>
                  <span className="ms-3 whitespace-nowrap"><span>1</span> x </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Patatas Fritass</span>
                 
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-md font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">88.50 <span>€</span></span>
                  </a>
              </li>
              <li>
              <a href="#" className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <img src={patatassin} alt="patatas" className='w-12'/>
                  <span className="ms-3 whitespace-nowrap"><span>1</span> x </span>
                  <span className="flex-1 ms-3 whitespace-nowrap">Patatas Fritas</span>
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-md font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">88.50 <span>€</span></span>
                  </a>
              </li>
              <li>
                  
              </li>
              <li>
                  
              </li>
           </ul>
          <div>
          <a href="#" className="inline-flex  items-center text-xl font-normal text-gray-500 hover:underline dark:text-gray-400">  
          <span className='text-end'>TOTAL: 100€</span> </a>
          </div>
          </div>

          <ModalClientes show={show} handleClose={handleClose} />
  
          </>



  )
}

export default Ticket
