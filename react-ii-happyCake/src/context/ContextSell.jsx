import { createContext, useState } from 'react'
import { dataCake } from '../services/cupCakeData.js'

export const cakeContext = createContext();

export const ContextSell = ({ children }) => {

    const [ countProduct, setCountProduct ] = useState({});

    return(

    <cakeContext.Provider value = {{ dataCake, countProduct, setCountProduct }}>
        {children}
    </cakeContext.Provider>

    );
};
