import { useContext } from 'react'
import { cakeContext } from '../context/ContextSell.jsx'
//Import CSS
import '../assets/HeaderCake.css'

export const HeaderCake = () => {

    const { countProduct } = useContext(cakeContext)
    console.log('Data from eachCart', countProduct)

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
                 <picture className='shoppingCart'>
                    <button>
                        <img src='../src/image/shoppingcart.png' alt='Carro de compra'/>
                    </button>
                 </picture>

                <input type='text' placeholder='Search Cake' autoFocus ></input>
            </div>
        </header>
    )
}