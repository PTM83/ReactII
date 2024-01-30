//Import Data
import { dataCake } from '../services/cupCakeData.js'

export const CardCake = () => {

console.log(dataCake)

    return (
    <section className='card-gallery'>
        {dataCake.slice(0,12).map((cake) => (
            <div className='Card-container' key={cake.id}>
                <picture className='pictureCard'>
                    <img src="" alt='Imagen de Prueba' />
                </picture>

                <div>
                    <header>{cake.name}</header>
                    <small>SubTitle</small>
                    <p>{cake.description}</p>
                </div>

                <div>
                    <i>{cake.price}</i>
                </div>
            </div>
        ))
        }
    </section>
    )
}