//Import CSS
import '../style.css'
//Import Components
import { NavBarCake } from './components/NavBarCake.jsx'
import { FooterCake } from './components/FooterCake.jsx'
import { MainCake } from './components/MainCake.jsx'


export const App = () => {
    return(
    <section className='container'>
        <NavBarCake />

        <MainCake />
        <FooterCake />
    </section>
    )
}