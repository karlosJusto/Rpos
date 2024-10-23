import { Link } from "react-router-dom"

import logout from '../../assets/iconos_sidebar/logout.png'
import ordenes from '../../assets/iconos_sidebar/ordenes.png'
import buscador from '../../assets/iconos_sidebar/buscador.png'
import stock from '../../assets/iconos_sidebar/stock.png'
import Home from '../../assets/iconos_sidebar/Home.png'
import dashboard from '../../assets/iconos_sidebar/dashboard.png'
import freidora from '../../assets/iconos_sidebar/freidora.png'



const Sidebar = () => {
  return (
   
        
      <ul className=" flex flex-col justify-between text-center items-center mt-10 gap-6 ">

              <Link className=" p-4 border-r-4 hover:border-r-yellow-500 active:border-r-yellow-500 " to={"/layout"}>
              <img src={Home} alt="icono cart side" className="w-12" />
              <p className="font-nunito text-xs text-gray-900 font-extrabold ">Home</p>
               </Link>

               <Link className='p-4 border-r-4 hover:border-r-yellow-500' to={"/ordenes"}>
               <img src={ordenes} alt="icono cart side" className="w-12" />
               <p className="font-nunito text-xs text-gray-900 font-extrabold ">Ordenes</p>
               </Link>

               <Link className='p-4 border-r-4 hover:border-r-yellow-500' to={"/freidora"}>
               <img src={freidora} alt="icono cart side" className="w-12" />
               <p className="font-nunito text-xs text-gray-900 font-extrabold ">Freidora</p>
               </Link>
           
               <Link className='p-4  border-r-4 hover:border-r-yellow-500' to={"/buscadorPedidos"}>
               <img src={buscador} alt="icono cart side" className="w-12" />
               <p className="font-nunito text-xs text-gray-900 font-extrabold ">Buscar</p>
               </Link>

               

               <Link className='p-4  border-r-4 hover:border-r-yellow-500' to={"/stock"}> 
               <img src={stock} alt="icono cart side" className="w-12" />
               <p className="font-nunito text-xs text-gray-900 font-extrabold ">Stock</p>
               </Link>

               <Link className='p-4  border-r-4 hover:border-r-yellow-500' to={"/dashboard"}>
               <img src={dashboard} alt="icono cart side" className="w-12" />
               <p className="font-nunito text-xs text-gray-900 font-extrabold ">Dash</p>
               </Link>

               <Link className='p-4 border-r-4 hover:border-r-yellow-500' to={"/onLine"}>
               <img src={logout} alt="icono cart side" className="w-12" />
               <p className="font-nunito text-xs text-gray-900 font-extrabold ">LogOut</p>
               </Link>

      </ul>



   
  )
}

export default Sidebar
