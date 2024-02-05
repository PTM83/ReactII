//Import CSS
import '../assets/MainCake.css'
import '../assets/CardCake.css'
//Import Components
import { CardCake } from '../components/CardCake.jsx'


export const HomePage = () => {
    return (
        <main className='HPContainer'>
            <CardCake />
        </main>
    )
}