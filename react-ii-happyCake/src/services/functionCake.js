import { useState, useContext } from 'react'

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