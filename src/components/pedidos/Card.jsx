import ModalProductos from './ModalProductos' 
import patatassin from '../../assets/patatassin.png'
import singluten from '../../assets/singluten.png'
import vegano from '../../assets/vegano.png'
import vegetariano from '../../assets/vegetariano.png'


import { useState } from 'react'


  const Card = () => {

    {/*Estado modal*/}

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 


       {/*Limitamos el nombre al numero de caracteres*/}

       const name= 'Patatas Fritas ';
       const maxCaracteres= 14;
       const textoRecordado=name.slice(0,maxCaracteres);

  return (

    <>
   
    <div onClick={handleShow} >


             {/*tarjeta 1 */}
          <div className="p-4 max-w-sm">
          <div className="flex rounded-lg h-full bg-white shadow-2xl p-8 flex-col">
              <div className="flex items-center justify-center mb-1">  
              <p className="text-black font-medium font-nunito">{textoRecordado}</p>
              </div>


              <div className="flex flex-col justify-between flex-grow">
                
              <img src={patatassin} alt="patatas" className='h-16 ' />

              </div>

              <div className="flex items-center justify-center mt-1  gap-3 pt-2">
                            
                        <img src={vegano} alt="vegano" className="h-6 w-6 object-cover" />
                        <img src={singluten} alt="celiaco" className="h-6 w-6 object-cover"/>
                        <img src={vegetariano} alt="vegetariano" className="h-6 w-6 object-cover" />

              </div>

              <div className="flex items-center justify-center mt-2 ">
                            
                            <h2 className="text-gray-300 dark:text-gray-300 text-md font-medium font-nunito">Stock: <span>6</span></h2>
              </div>
                        <div className="flex items-center justify-end mb-1">
                            
                            <h2 className=" text-lg font-medium font-nunito pt-2">18.95 €</h2>
                        </div>
                </div>
          </div>
   
     
   
    </div>

    <ModalProductos show={show} handleClose={handleClose} />

      </>       
   
   
    


  )
}

export default Card
