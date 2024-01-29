//Import CSS
import '../services/MainCake.css'

export const HomePage = () => {
    return (
        <main className='HPContainer'>
            <header className='headerCake'>
                <h1> Bienvenido a <strong>Happy Cake</strong> </h1>
                <h3> El lugar de los pasteles felices</h3>
            </header>
            <picture className="hpImage">
                <img src='./src/image/cake-slice.png' alt='Cake Picture'/>
            </picture>
        </main>
    )
}