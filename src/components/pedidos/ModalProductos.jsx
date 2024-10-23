/* eslint-disable react/prop-types */
import patatassin from '../../assets/patatassin.png'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import singluten from '../../assets/singluten.png'
import vegano from '../../assets/vegano.png'
import vegetariano from '../../assets/vegetariano.png'


import { useState } from 'react';


const ModalProductos = ({show, handleClose}) => {

    {/*Estado contador*/}

    const [clickCount, setClickCount]=useState(1);

    const sumar = () => {
        setClickCount(clickCount+1);
    }

    const restar = () => {
        if (clickCount>1){
        setClickCount(clickCount-1)};
    }
   

  


  return (
    <>
     
       
      <Modal
        show={show}
        onHide={handleClose}
        size='lg'
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton className='border-none'  onClick={handleClose}>
        
        </Modal.Header>
        <Modal.Body>
        
      
        <div className='flex -mt-6 '>
            <img src={patatassin} alt="plato comida" className='w-52 h-42 object-cover pr-7' />
            <div>
                <h1  className='font-nunito text-3xl font-extrabold text-gray-900 pb-3'> Patatas Fritas</h1>
                <h3 className='font-nunito text-lg text-gray-400 '>Delicioso pollo de la mejor calidad recien hecho y acompañado de nuestra sabrosa salsa  </h3>
                <div className='border-b-2 pt-3'></div>
            </div>     
        </div>   

        <div className="flex ms-[30px]  gap-3 p-3">
                            
                            <img src={vegano} alt="vegano" className="h-6 w-6 object-cover" />
                            <img src={singluten} alt="celiaco" className="h-6 w-6 object-cover"/>
                            <img src={vegetariano} alt="vegetariano" className="h-6 w-6 object-cover" />
    
        </div>

      
    

        <div className='flex  gap-2  pl-2 justify-center '>
                <span onClick={restar} className='w-12 h-10 text-5xl text-center' >-</span>
                <span className='w-12 h-10 text-5xl text-center'>{clickCount}</span>
                <span onClick={sumar} className='w-12 h-10 text-5xl text-center' >+</span>
        </div>  

       

    <div class="p-2 text-left border-b-2 mt-4 ">
        <h4 class="text-2xl  font-extrabold font-nunito">
            Opciones
        </h4>
     </div>

     <div class="flex items-center p-5">
    <button type="button" class="w-full border-l border-t border-b font-bold font-nunito rounded-l-xl  hover:bg-yellow-500 hover:text-white px-4 py-2">
        Troceado
    </button>
    <button type="button" class="w-full border font-nunito font-bold  hover:bg-yellow-500 hover:text-white px-4 py-2">
        Tostado
    </button>
    <button type="button" class="w-full border-t border-b border-r  rounded-r-xl font-nunito font-bold  hover:bg-yellow-500 hover:text-white px-4 py-2">
        Celiaco
    </button>
</div>

<div class="flex justify-center">
    <nav
        class="flex overflow-x-auto items-center p-1 space-x-1 rtl:space-x-reverse text-sm text-gray-600 bg-gray-500/5 rounded-xl">
        <button role="tab" type="button"
            class="flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset text-yellow-600 shadow bg-white dark:bg-yellow-600"
            aria-selected="">
            Sin salsa
        </button>

        <button role="tab" type="button"
            class="flex whitespace-nowrap items-center h-8 px-5 font-medium rounded-lg outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-inset hover:text-gray-800 focus:text-yellow-600 dark:text-gray-400 dark:hover:text-gray-300 dark:focus:text-gray-400">
           Extra Salsa
        </button>
    </nav>
</div>




       
        </Modal.Body>
        <Modal.Footer className='border-none'>
          <Button variant="secondary" className='p-3' onClick={handleClose} >
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose} className='bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 p-3'>Agregar</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default ModalProductos;