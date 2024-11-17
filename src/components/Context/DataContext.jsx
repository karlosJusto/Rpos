import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useParams } from "react-router-dom";



export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data, setData]=useState([]);
    const [cart, setCart]=useState([]);



    const categoria=useParams().categoria;
   


    useEffect(() =>{

        const productosRef = collection(db, "productos");

        getDocs(productosRef)
        .then((resp) => {

                      
            setData(
            resp.docs.map((doc) => {

                return {...doc.data(), id: doc.id}


            })
        )

        })

    
        
    },[]);

   

    
    

    return (
        

        <dataContext.Provider value={{data, cart, setCart}}>{children}</dataContext.Provider>

    )

} ;


export default DataProvider;

