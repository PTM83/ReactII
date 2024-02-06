import { createContext, useState } from 'react'
import { dataCake } from '../services/cupCakeData.js'
//Capstone Hook
import { useProductCount } from '../hooks/functionCake.js'

export const cakeContext = createContext();

export const ContextSell = ({ children }) => {

    //Se extrae el count y la función toggleButton
    const { count, toggleButton } = useProductCount();
    const [ countProduct, setCountProduct ] = useState({});

    return(

    <cakeContext.Provider
    value = {{ dataCake,
            countProduct,
            setCountProduct,
            count,
            toggleButton }}
    >
        {children}
    </cakeContext.Provider>

    );
};
