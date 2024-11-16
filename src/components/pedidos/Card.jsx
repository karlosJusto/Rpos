import ModalProductos from './ModalProductos' 
import pollo from '../../assets/pollo.jpg'
import singluten from '../../assets/singluten.png'
import vegano from '../../assets/vegano.png'
import vegetariano from '../../assets/vegetariano.png'


import { useState, useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import { DiCelluloid } from 'react-icons/di'
import { Tabs } from 'react-bootstrap'
import { useParams } from 'react-router-dom'




  const Card = () => {

    {/*Estado modal*/}

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (product) => setShow(product);

    const categoria=useParams().categoria;

    
    const { data }=useContext(dataContext);


    const data_filter= categoria ? data.filter(product => product.categoria == categoria) : data;
  
        return (
          
          <>
         
         { 
         
         

         data_filter.map((product) => (



          

          <div  key={product.id} onClick={() => handleShow(product)} >

               
              {/*tarjeta 1 */}
                <div className="p-3 max-w-xs" >
                  <div className="flex rounded-lg  bg-[#293F48] shadow-2xl  flex-col">

                  <div className="">
                      
                      <img src={pollo} alt={product.name} className='w-full rounded-t-lg object-cover ' />
        
                      </div>
                    
                    
                    <div className="flex items-center justify-center  pr-2 pl-2 pt-1">  
                    <p className="text-gray-100  truncate text-lg font-nunito">{product.name}</p>
                    </div>
      
      
                    
      
                    <div className="flex items-center justify-center gap-3 mt-2 h-6" >

                    {product.gluten_free && (
                          <img src={singluten} alt="vegano" className="h-5 w-5 object-cover" />
                        )}
                        {product.vegan && (
                          <img src={vegano} alt="celiaco" className="h-5 w-5 object-cover" />
                        )}
                        {product.vegetarian && (
                          <img src={vegetariano} alt="vegetariano" className="h-5 w-5 object-cover" />
                        )}
                                  
                            
      
                    </div>
      
                    <div className="flex items-center justify-center mt-3 ">
                                  
                                  <h2 className="text-gray-300 dark:text-gray-300 text-md font-medium font-nunito">Stock: <span>6</span></h2>
                    </div>
                              <div className="flex items-center justify-end mb-1 pr-2">
                                  
                                  <h2 className=" text-lg font-extrabold text-gray-100  font-nunito pt-2">{product.price} €</h2>
                              </div>
                      </div>
                </div>
         
            
         
          </div>
          ))}
      
          <ModalProductos show={show} handleClose ={handleClose} product={show} />
         
           
            </>  
            
        ); 
   

  };

export default Card
