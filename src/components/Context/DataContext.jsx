import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";



export const dataContext = createContext();

const DataProvider = ({children}) => {

    const [data, setData]=useState([]);

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
        

        <dataContext.Provider value={{data}}>{children}</dataContext.Provider>

    )

} ;


export default DataProvider;

