import pollo from '../../assets/iconos_tabs/pollo.png'
import complementos from '../../assets/iconos_tabs/complementos.png'
import bebidas from '../../assets/iconos_tabs/bebidas.png'
import postre from '../../assets/iconos_tabs/postre.png'
import bread2 from '../../assets/iconos_tabs/bread2.png'
import { Link } from 'react-router-dom'

const Tabs = () => {
  return (

    <div className="text-sm font-medium text-center  ">
    <ul className="flex  justify-center -ms-44 gap-10 ">

        <Link className='hover:bg-yellow-500 p-1 rounded-md active:bg-yellow-600'  >
        <img src={pollo} alt="pollo" className='h-[40px] w-40px] ' />
        </Link>

        <Link className=' hover:text-gray-900'>
        <img src={complementos} alt="complementos" className='h-[40px] w-40px]' />
        </Link>

        <Link >
        <img src={bebidas} alt="bebidas" className='h-[40px] w-40px]' />
        </Link>

        <Link >
        <img src={postre} alt="postres" className='h-[40px] w-40px]  ' />
        </Link>

        <Link >
        <img src={bread2} alt="extras"  className='h-[40px] w-40px]' />
        </Link>

       




    </ul>
</div>
  )
}

export default Tabs