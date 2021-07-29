import React, { createContext, useState } from 'react';
import { db } from '../firebase';


export const Context = createContext();

const ProductContext = ({children}) => {

    const [ data, setData ] = useState([]);

    const getData = async ()  => {
        const { docs } = await db.collection("Productos").get();
        const productos = docs.map(producto => ({id: producto.id, ...producto.data()}))
       setData(productos);
    }

    return (
        <Context.Provider value={{
            getData,
            data
        }}>
            {children}
        </Context.Provider>
    )

}

export default ProductContext;