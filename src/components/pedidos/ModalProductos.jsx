
import patatassin from '../../assets/patatassin.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import singluten from '../../assets/singluten.png'
import vegano from '../../assets/vegano.png'
import vegetariano from '../../assets/vegetariano.png'


import { useState } from 'react';


const ModalProductos = ({show, handleClose, product}) => {


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
            <img src={product.imagen} alt="plato comida" className='w-52 h-42 object-cover pr-7' />
            <div>
                <h1  className='font-nunito text-3xl font-extrabold text-gray-900 pb-3'>{product.name}</h1>
                <h3 className='font-nunito text-lg text-gray-400 '>{product.description}  </h3>
                <div className='border-b-2 pt-3'></div>
            </div>     
        </div>   

            <div className="flex ms-[30px]  gap-3 p-3">
                            
                              <div> {product.gluten_free ? (<img src={singluten} alt="vegano" className="h-6 w-6 object-cover" />):<div></div>}</div>
                              <div> {product.vegan ? (<img src={vegano} alt="celiaco" className="h-6 w-6 object-cover"/>):<div></div>}</div>
                              <div> {product.vegetarian ? (<img src={vegetariano} alt="vegetariano" className="h-6 w-6 object-cover"/>):<div></div>}</div>
    
            </div>

      
    

        <div className='flex  gap-2  pl-2 justify-center '>
                <span onClick={restar} className='w-12 h-10 text-5xl text-center' >-</span>
                <span className='w-12 h-10 text-5xl text-center'>{clickCount}</span>
                <span onClick={sumar} className='w-12 h-10 text-5xl text-center' >+</span>
        </div>  

       

    <div className="p-2 text-left border-b-2 mt-4 ">
        <h4 className="text-2xl  font-extrabold font-nunito">
            Opciones
        </h4>
     </div>

    


      
         



       
        </Modal.Body>
        <Modal.Footer className='border-none'>
          <Button variant="secondary" className='p-3 bg-white font-nunito text-gray-500' onClick={handleClose} >
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleClose} className='bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 p-3 font-nunito'>Agregar</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default ModalProductos;