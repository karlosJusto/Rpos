import pollo from '../../assets/iconos_tabs/pollo.png'
import complementos from '../../assets/iconos_tabs/complementos.png'
import bebidas from '../../assets/iconos_tabs/bebidas.png'
import postre from '../../assets/iconos_tabs/postre.png'
import bread2 from '../../assets/iconos_tabs/bread2.png'
import { Link } from 'react-router-dom'

const Tabs = () => {
  return (

    <div className="text-sm font-medium text-center text-gray-500  border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex  justify-center -ms-44 gap-10 pb-2">

        <Link className="border-b-4 mt-1 p-1 hover:border-b-yellow-500 active:border-b-yellow-500">
        <img src={pollo} alt="pollo" className='h-[40px] w-40px]' />
        </Link>

        <Link className="border-b-4 mt-1 hover:border-b-yellow-500 ">
        <img src={complementos} alt="complementos" className='h-[40px] w-40px]' />
        </Link>

        <Link className=" border-b-4 mt-1 hover:border-b-yellow-500 ">
        <img src={bebidas} alt="bebidas" className='h-[40px] w-40px]' />
        </Link>

        <Link className="border-b-4 mt-1 hover:border-b-yellow-500 ">
        <img src={postre} alt="postres" className='h-[40px] w-40px]  ' />
        </Link>

        <Link className="border-b-4 mt-1 hover:border-b-yellow-500 ">
        <img src={bread2} alt="extras"  className='h-[40px] w-40px]' />
        </Link>

       




    </ul>
</div>
  )
}

export default Tabs