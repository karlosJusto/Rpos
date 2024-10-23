

const CheckBox = () => {
  return (


    <div className="flex flex-col p-4 pl-5 gap-5 ">
        <label className="flex">
            
            <input id="checkbox-1" type="checkbox" className="peer hidden"/>
  
    <div className="w-6 h-6 bg-white peer-checked:bg-gradient-to-tr from-[#4e1f87] to-[#bc93f8] shadow border-2 border-gray-300 mr-2">           </div>
    <span className="select-none">
      Tostado
    </span>
  </label>
  <label className="flex">
   
    <input id="checkbox-2" type="checkbox" className="peer hidden"/>
   
    <div className="w-6 h-6 bg-white peer-checked:bg-gradient-to-tr from-[#4e1f87] to-[#bc93f8] shadow border-2 border-gray-300 mr-2">           </div>
    <span className="select-none">
      Troceado
    </span>
  </label>

  <label className="flex">
   
    <input id="checkbox-2" type="checkbox" className="peer hidden"/>
   
    <div className="w-6 h-6 bg-white peer-checked:bg-gradient-to-tr from-[#4e1f87] to-[#bc93f8] shadow border-2 border-gray-300 mr-2">           </div>
    <span className="select-none">
      Celiaco
    </span>
  </label>
    </div>
  )
}

export default CheckBox
