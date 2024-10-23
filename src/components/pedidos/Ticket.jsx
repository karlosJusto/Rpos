import patatassin from '../../assets/patatassin.png';
import ModalClientes from './ModalClientes';
import { useState } from 'react';

const Ticket = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);






  return (
          
    <>
        <div className="w-full max-w-md h-screen p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-100 dark:border-gray-100" onClick={handleShow}>
          

      <div  className="border-2 mt-4 border-gray-400 p-5 rounded-xl pb-6"  >
        <div className="flex justify-around">

          <div className="relative z-0">
              <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nº Pedido</label>
          </div>

          <div className="relative z-0">
              <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Hora</label>
          </div>
            

          </div>

          <div className="flex justify-around mt-10 ms-2">

          <div className="relative z-0">
              <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Nombre</label>
          </div>

          <div className="relative z-0">
              <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
              <label htmlFor="floating_standard" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Teléfono</label>
          </div>

      </div>
     </div>


          <p className="text-lg border-b-2 font-normal font-nunito text-gray-900 dark:text-gray-900 mt-10">Detalle del pedido.</p>
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
                  <span className="flex-1 ms-3 whitespace-nowrap">Patatas Fritas</span>
                 
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
