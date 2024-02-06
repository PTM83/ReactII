import { useState, useEffect, useContext } from 'react'

export const useProductCount = () => {
    const [count, setCount] = useState({})

    const toggleButton = (id) => {

        const currentDate = new Date().toLocaleString();

        setCount( (prevCount) => ({
            ...prevCount,
            [id]:{
                count: (prevCount[id]?.count || 0) + 1, // Increment the count
                date: [...(prevCount[id]?.date || []), currentDate], // Append the new date to the array
                },
             }));
    };
    return { count, toggleButton };
}

export const sumComponent = (productArray) => {

    //    const [numbers, setNumbers] = useState(sumProduct); // Your dynamic array
    const [sum, setSum] = useState(0); // State to hold the sum
    const valuesProduct = Object.values(productArray);

      useEffect(() => {
        // Recalculate the sum whenever the 'numbers' array changes
        const sumProduct = valuesProduct.map(contar => contar.count || 0)
        const newSum = sumProduct.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setSum(newSum); // Update the sum state with the new sum
      }, [productArray]);
    return { sum };
}