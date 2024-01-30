//Import CSS
import '../services/HeaderCake.css'

export const HeaderCake = () => {

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

        </header>
    )
}