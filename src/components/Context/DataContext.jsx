import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useParams } from "react-router-dom";



export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data, setData]=useState([]);
    const categoria=useParams().categoria;
   


    useEffect(() =>{

        const productosRef = collection(db, "productos");

        getDocs(productosRef)
        .then((resp) => {

            console.log("llego:"+categoria)
            if(categoria){
                console.log("filtar")
            }else{

                console.log("todo")
            }

          
            setData(
            resp.docs.map((doc) => {

                return {...doc.data(), id: doc.id}


            })
        )

        })

    
        
    },[]);

   

    
    

    return (
        

        <dataContext.Provider value={{data}}>{children}</dataContext.Provider>

    )

} ;


export default DataProvider;

