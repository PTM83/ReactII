//Import Data
import { dataCake } from '../services/cupCakeData.js'

export const CardCake = () => {

// console.log(dataCake)

    return (
    <section className='card-gallery'>
        {dataCake.slice(0,12).map((cake) => (
            <div className='Card-container' key={cake.id}>
                <picture className='pictureCard'>
                    <img src="./src/image/cake-slice.png" alt='Imagen de Prueba' />
                </picture>

                <div>
                    <header>{cake.name}</header>
                    <small>{cake.productType}</small>
                    <p>{cake.description}</p>
                </div>

                <div className='priceCake'>
                    <i> ${cake.price}</i>
                </div>
            </div>
        ))
        }
    </section>
    )
}