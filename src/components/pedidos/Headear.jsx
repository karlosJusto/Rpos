import logo from '../../assets/logo.png';
import Reloj from './Reloj'
import { Link } from "react-router-dom";
import notificacion from '../../assets/iconos_headear/notificacion.png'

import config from '../../assets/iconos_headear/config.png'
import carrito from '../../assets/iconos_headear/carrito.png'


const Headear = () => {

  
  return (
   
      <div className='flex justify-between '>

        <div className='flex p-4 gap-2'>
            <img src={logo} alt="logo" className='w-12 -mt-2 rounded-xl ' />
            <h1 className='text-2xl md:text-gray-900 font-nunito font-extrabold border-r-4 pr-3'>SuperPollo</h1>
        </div>

        <div className='mt-3 ms-20 '>
          <form className="max-w-md mx-auto">   
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-900">Search</label>
              <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-1 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-900 dark:text-gray-400"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-2 ps-12 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500"  />
                 
              </div>
           </form>
        </div>


        <div className='flex gap-4 items-center me-3'>

       
          <Reloj/>
        

        <Link> 
       <img src={notificacion} alt="notificacion" className='w-8' />
        </Link>

      

        <Link className=''>
        <img src={config} alt="notificacion" className='w-8' />
        </Link>
        <Link className=''>
        <img src={carrito} alt="notificacion" className='w-8' />
        </Link>

        <Link>
           <h1 className='p-2  rounded-xl bg-yellow-500 ring-yellow-500 font-nunito text-white'>100</h1>
        </Link>

    </div>
</div>
  
  )
}

export default Headear
