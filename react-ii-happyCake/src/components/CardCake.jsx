import { useState, useContext, useEffect } from 'react'
//Capstone Hook
import { useProductCount } from '../services/functionCake.js'
//Import context
import { cakeContext } from '../context/ContextSell.jsx'

export const CardCake = () => {

//Se extrae el count y la función toggleButton

const { count, toggleButton } = useProductCount();

const { dataCake, setCountProduct } = useContext(cakeContext);
//Se almacena la información captada al momento de seleccionar tipo de producto

useEffect(() => {
    setCountProduct(count)
//     console.log(count)
}, [count] )

    return (
    <section className='card-gallery'>
         {dataCake.slice(0,12).map((cake) => (
             <div className='Card-container' key={cake.id}>
                 <picture className='pictureCard'>
                     <img src="./src/image/cake-slice.png" alt='Imagen de Prueba' />
                 </picture>

                 <article>
                     <header>{cake.name}</header>
                     <small>{cake.productType}</small>
                     <p>{cake.description}</p>
                 </article>

                 <div className='priceCake'>
                     <i> ${cake.price}</i>
                 </div>

                 <picture className='shoppingCart'>
                    <button onClick={() => toggleButton(cake.id)}>
                        <img src='../src/image/shoppingcart.png' alt='Carro de compra'/>
                    </button>
                 </picture>

             </div>
         ))}

    </section>
    )
}