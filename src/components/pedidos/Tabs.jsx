import pollo from '../../assets/iconos_tabs/pollo.png'
import complementos from '../../assets/iconos_tabs/complementos.png'
import bebidas from '../../assets/iconos_tabs/bebidas.png'
import postre from '../../assets/iconos_tabs/postre.png'
import bread2 from '../../assets/iconos_tabs/bread2.png'


import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';





const Tabs = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  useEffect(() => {
    setActiveTab(location.pathname);
  }, [location]);

  return (
    <div className="text-sm font-medium text-center  ">
      <ul className="flex  justify-center -ms-44 gap-10   ">
            <Link
              to="/layout/comida"
              className={` p-2 rounded-md  ${
                activeTab === '/layout/comida' ? 'border-3 border-yellow-500 shadow-md ' : ''
              } `}
            >
              <img src={pollo} alt="pollo" className="h-[40px] w-40px " />
            </Link>

            <Link
              to="/layout/complementos"
              className={` p-2 rounded-md ${
                activeTab === '/layout/complementos' ? 'border-3 border-yellow-500 shadow-md' : ''
              }`}
            >
              <img src={complementos} alt="complementos" className="h-[40px] w-40px" />
            </Link>

            <Link
              to="/layout/bebidas"
              className={`p-2 rounded-md ${
                activeTab === '/layout/bebidas' ? ' border-3 border-yellow-500 shadow-md' : ''
              }`}
            >
              <img src={bebidas} alt="pollo" className="h-[40px] w-40px" />
            </Link>

            <Link
              to="/layout/postres"  
              className={` p-2 rounded-md ${
                activeTab === '/layout/postres' ? 'border-3 border-yellow-500 shadow-md' : ''
              }`}
            >
              <img src={postre} alt="pollo" className="h-[40px] w-40px" />
            </Link>

            <Link
              to="/layout/extras"
              className={` p-2 rounded-md ${
                activeTab === '/layout/extras' ? 'border-3 border-yellow-500 shadow-md' : ''
              }`}
            >
              <img src={bread2} alt="pollo" className="h-[40px] w-40px" />
            </Link>
        
     </ul>
    </div>
  );
};

export default Tabs;