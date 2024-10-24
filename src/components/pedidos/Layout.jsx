import Headear from "./Headear"
import Card from "./Card"
import Sidebar from "./Sidebar"
import Tabs from "./Tabs"
import Ticket from "./Ticket"





const Layout = () => {
    return (
    
      <div className="3xl:container 2xl:mx-auto max-w-[1600px]">

          <header>

            <Headear/>
         
          </header>

          <nav className="mt-2">

            <Tabs/>

          </nav>

           <div className=" flex h-screen">
            <div className=" w-[7%]  ">
              
            <Sidebar/>
              
            </div>


            <div className=" bg-gradient-to-r from-gray-100 to-gray-300 text-center  w-[63%] rounded-xl mt-2">
              
            <div className="flex flex-wrap  mt-8">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                
            </div>
      </div>

          <div className=" w-[29%] ms-2 rounded-2xl mt-2">
          
          <Ticket/>
          
          </div>
       </div>

     
</div>

    )
  }
  
  export default Layout