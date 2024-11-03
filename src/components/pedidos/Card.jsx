import ModalProductos from './ModalProductos' 
import patatassin from '../../assets/patatassin.png'
import singluten from '../../assets/singluten.png'
import vegano from '../../assets/vegano.png'
import vegetariano from '../../assets/vegetariano.png'


import { useState, useContext } from 'react'
import { dataContext } from '../Context/DataContext'
import { DiCelluloid } from 'react-icons/di'




  const Card = () => {

    {/*Estado modal*/}

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (product) => setShow(product);



 
    const { data }=useContext(dataContext);


        return (
          
          <>
         
         { data.map((product) => (
          <div  key={product.id} onClick={() => handleShow(product)} >
      
            

                   {/*tarjeta 1 */}
                <div className="p-4 max-w-sm" >
                <div className="flex rounded-lg  bg-[#293F48] shadow-2xl p-8 flex-col">
                    <div className="flex items-center justify-center mb-1">  
                    <p className="text-gray-500 font-extrabold truncate text-lg font-nunito">{product.name}</p>
                    </div>
      
      
                    <div className="flex flex-col justify-between flex-grow">
                      
                    <img src={product.imagen} alt={product.name} className='h-20' />
      
                    </div>
      
                    <div className="flex items-center justify-center mt-1  gap-3 pt-2" >

                     
                                  
                              <div> {product.gluten_free ? (<img src={singluten} alt="vegano" className="h-4 w-4 object-cover" />):<div></div>}</div>
                              <div> {product.vegan ? (<img src={vegano} alt="celiaco" className="h-4 w-4 object-cover"/>):<div></div>}</div>
                              <div> {product.vegetarian ? (<img src={vegetariano} alt="vegetariano" className="h-4 w-4 object-cover"/>):<div></div>}</div>
      
                    </div>
      
                    <div className="flex items-center justify-center mt-2 ">
                                  
                                  <h2 className="text-gray-300 dark:text-gray-300 text-md font-medium font-nunito">Stock: <span>6</span></h2>
                    </div>
                              <div className="flex items-center justify-end mb-1">
                                  
                                  <h2 className=" text-lg font-extrabold font-nunito pt-2">{product.price} €</h2>
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
