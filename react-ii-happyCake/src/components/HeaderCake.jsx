import { useContext } from 'react'
import { cakeContext } from '../context/ContextSell.jsx'
//Import CSS
import '../assets/HeaderCake.css'
//Import hook
import { sumComponent } from '../hooks/functionCake.js'

export const HeaderCake = () => {

    const { countProduct } = useContext(cakeContext)
//     console.log('Data from each Cart', countProduct)

    const { sum } = sumComponent(countProduct);
//     let valuesProduct = Object.values(countProduct);
//     let sumProduct = valuesProduct.map(contar => contar.count)
//
//     console.log('values', valuesProduct)
//     console.log('sumar', sum)

    return (
        <header className='headerCake'>
            <div className='divTitle'>
                <h1> Bienvenido a <strong>Happy Cake</strong> </h1>
                <h3> El lugar de los pasteles felices</h3>
            </div>
            <picture className="headerImage">
                <img src='../src/image/cake-slice.png' alt='Cake Picture'/>
            </picture>

            <div className='carouselsHeader'>
                Carousels
            </div>

            <div className='SideBar'>
                SideBar
                 <picture className='shoppingCartHeader'>
                    <button>
                        <img src='../src/image/shoppingcart.png' alt='Carro de compra'/>
                    </button>
                    <i className='smallHeader'>{sum}</i>
                 </picture>

                <input type='text' placeholder='Search Cake' autoFocus ></input>
            </div>
        </header>
    )
}