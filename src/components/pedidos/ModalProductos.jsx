
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


import singluten from '../../assets/singluten.png'
import vegano from '../../assets/vegano.png'
import vegetariano from '../../assets/vegetariano.png'


import { useState, useContext} from 'react';
import Prueba from './Prueba';
import {  dataContext } from '../Context/DataContext';


const ModalProductos = ({show, handleClose, product}) => {

  

  const {data, cart, setCart}=useContext(dataContext);

  const buyProducts = (product) => {

    

    const productRepetido = cart.find((item) => item.id_product === product.id_product);
    if (productRepetido) {
      
      
      //setCart(cart.map((item) => (item.id_product === product.id_product ? { ...item, cantidad: productRepetido.cantidad + clickCount } : item)));
      setCart(cart.map((item) => (item.id_product === product.id_product ? { ...item, cantidad: clickCount } : item)));

    }else{
      
      setCart([...cart, { ...product, cantidad: clickCount }]);

    }
   
    
  
    setClickCount(1);

 

      
      handleClose()

  };


  
 

    {/*Estado contador*/}

    const [clickCount, setClickCount]=useState(1);

    
    const sumar = () => {
        setClickCount(clickCount+1);
    }

    const restar = () => {
        if (clickCount>1){
        setClickCount(clickCount-1)};
    }

    //console.log(product);

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

            <div className="flex ms-[30px] gap-3 p-3">
                            
                        {product.gluten_free && (
                          <img src={singluten} alt="vegano" className="h-6 w-6 object-cover " />
                        )}
                        {product.vegan && (
                          <img src={vegano} alt="celiaco" className="h-6 w-6 object-cover" />
                        )}
                        {product.vegetarian && (
                          <img src={vegetariano} alt="vegetariano" className="h-6 w-6 object-cover" />
                        )}
    
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


    <div className='text-center justify-center items-center font-nunito text-2xl p-4'>

          <Form>
            {['radio'].map((type) => (
              <div key={`inline-${type}`} className="mb-3 ">
                <Form.Check
                  inline
                  label="Sin salsa"
                  name="group1"
                  type={type}
                  id={`inline-${type}-1`}
                  className='p-2 border-2'
                />
                <Form.Check
                  inline
                  label="Extra Salsa"
                  name="group1"
                  type={type}
                  id={`inline-${type}-2`}
                  className='bg-red'
                />
              
              </div>
            ))}
          </Form>
    </div>

    <div className='text-center justify-center items-center font-nunito text-2xl p-4'>

      <Form >
        {['checkbox'].map((type) => (
          <div key={`inline-${type}`} className="mb-3 ">
            <Form.Check
              inline
              label="Tostado"
              name="group2"
              type={type}
              id={`inline-${type}-1`}
            />
            <Form.Check 
              inline
              label="Troceado"
              name="group2"
              type={type}
              id={`inline-${type}-2`}
             
            />

            <Form.Check
                    inline
                    label="Celiaco"
                    name="group2"
                    type={type}
                    id={`inline-${type}-3`}
                    
                  />
          
          </div>
        ))}
      </Form>

      <Prueba  />

      
</div>

    


      
         



       
        </Modal.Body>
        <Modal.Footer className='border-none'>
          <Button variant="secondary" className='p-3 bg-white font-nunito text-gray-500' onClick={handleClose} >
            Cancelar
          </Button>
          <Button variant="primary" onClick={() => buyProducts(product)} className='bg-yellow-500 border-yellow-500 hover:bg-yellow-600 hover:border-yellow-600 p-3 font-nunito'>Agregar</Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default ModalProductos;