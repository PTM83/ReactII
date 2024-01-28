//Import Elements
import { Link } from 'react-router-dom';
//Import CSS
import '../services/NavBarCake.css'

//Importante agregar el tag <Link> </Link>

export const NavBarCake = () => {

    return (
        <nav className='navBarContainer'>
            <ul className='listCake'>
                <li>
                    <Link to="/" className='navItem'>Home</Link>
                </li>
                <li>
                    <Link to="/contact-me" className='navItem'>Contacto</Link>
                </li>
            </ul>

            <div className='divCake'>
                Happy Cake
            </div>
        </nav>
    )
}