import pollo from '../../assets/iconos_tabs/pollo.png'
import complementos from '../../assets/iconos_tabs/complementos.png'
import bebidas from '../../assets/iconos_tabs/bebidas.png'
import postre from '../../assets/iconos_tabs/postre.png'
import bread2 from '../../assets/iconos_tabs/bread2.png'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { dataContext } from '../Context/DataContext'

const Tabs = () => {



 



  return (

    <div className="text-sm font-medium text-center  ">
    <ul className="flex  justify-center -ms-44 gap-10 ">


        <Link className='hover:bg-yellow-500 p-1 rounded-md active:bg-yellow-600' to="/layout/comida">
        <img src={pollo} alt="pollo" className='h-[40px] w-40px] ' />
        </Link>

        <Link className=' hover:bg-gray-900 p-1' to="/layout/complementos">
        <img src={complementos} alt="complementos" className='h-[40px] w-40px]'  />
        </Link>
 
        <Link className='p-1' to="/layout/bebidas">
        <img src={bebidas} alt="bebidas" className='h-[40px] w-40px]'  />
        </Link>

        <Link className='p-1'  to="/layout/postres" >
        <img src={postre} alt="postres" className='h-[40px] w-40px] ' />
        </Link>

        <Link  className='p-1' to="/layout/extras">
        <img src={bread2} alt="extras"  className='h-[40px] w-40px]'  />
        </Link>

       




    </ul>
</div>
  )
}

export default Tabs