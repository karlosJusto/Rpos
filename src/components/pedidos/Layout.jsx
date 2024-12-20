import Headear from "./Headear"
import Card from "./Card"
import Sidebar from "./Sidebar"
import Tabs from "./Tabs"
import Ticket from "./Ticket"




const Layout = () => {
    return (
    
      <div className="3xl:container 2xl:mx-auto max-w-[1800px]  ">

          <header >

            <Headear/>
         
          </header>

          <nav className="mt-0  ">

            <Tabs/>

          </nav>

           <div className=" flex h-screen ">
              <div className=" w-[7%] m-2 bg-[#E4E6F0]">
                
              <Sidebar/>
                
              </div>


              <div className=" bg-gradient-to-r from-gray-100 to-gray-300 text-center  w-[63%] rounded-xl overflow-y-auto mt-2 mb-44 ">
                
                      <div className="grid grid-cols-4  ">

                        <Card/>
                        
                      
                        
                      </div>
                      
              </div>

                <div className=" w-[29%] ms-2 rounded-2xl mt-2 ">
                
                <Ticket/>
                
                </div>
            </div>

     
      </div>

    )
  }
  
  export default Layout