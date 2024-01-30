//Import CSS
import '../services/MainCake.css'
import '../services/CardCake.css'
//Import Components
import { CardCake } from '../components/CardCake.jsx'


export const HomePage = () => {
    return (
        <main className='HPContainer'>
            <CardCake />
        </main>
    )
}