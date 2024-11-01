import ModalProductos from './ModalProductos' 
import patatassin from '../../assets/patatassin.png'
import singluten from '../../assets/singluten.png'
import vegano from '../../assets/vegano.png'
import vegetariano from '../../assets/vegetariano.png'


import { useState, useContext } from 'react'
import { dataContext } from '../Context/DataContext'



  const Card = () => {

    {/*Estado modal*/}

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




 
      const { data }=useContext(dataContext);


      return data.map((product) => {

       

        return (
          
          <>
         
          <div onClick={handleShow}  key={product.id} >
      
      
                   {/*tarjeta 1 */}
                <div className="p-4 max-w-sm" >
                <div className="flex rounded-lg  bg-white shadow-2xl p-8 flex-col">
                    <div className="flex items-center justify-center mb-1">  
                    <p className="text-gray-500 font-extrabold truncate text-lg font-nunito">{product.name}</p>
                    </div>
      
      
                    <div className="flex flex-col justify-between flex-grow">
                      
                    <img src={product.imagen} alt={product.name} className='h-20 ' />
      
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
                                  
                                  <h2 className=" text-lg font-extrabold font-nunito pt-2">{product.price} €</h2>
                              </div>
                      </div>
                </div>
         
            <ModalProductos show={show} handleClose ={handleClose} />
         
            </div>
      
        
      
            </>  
        ); 
    });

  };

     

     
      
    
  

export default Card
