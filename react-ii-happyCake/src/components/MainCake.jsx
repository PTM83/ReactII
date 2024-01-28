import {Routes, Route} from 'react-router-dom'
//Import Views
import { HomePage } from '../views/HomePage.jsx'
import { ContactPage } from '../views/ContactPage.jsx'

//Información a mostrar en Main

export const MainCake =() => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact-me' element={<ContactPage />} />
        </Routes>
    )
}