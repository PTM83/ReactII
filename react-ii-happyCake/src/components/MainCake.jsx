import {Routes, Route} from 'react-router-dom'
//Import Views
import { HomePage } from '../views/HomePage.jsx'
import { ContactPage } from '../views/ContactPage.jsx'
import { HeaderCake } from '../components/HeaderCake.jsx'
import { HeaderCakeContact } from '../components/HeaderCakeContact.jsx'

//Import Context
import { ContextSell } from '../context/ContextSell.jsx'

//Información a mostrar en Main

export const MainCake =() => {
    return (
        <ContextSell>
            <Routes>
                <Route path='/' element={
                <>
                    <HeaderCake />
                    <HomePage />
                </>
                } />
                <Route path='/contact-me' element={
                <>
                    <HeaderCakeContact />
                    <ContactPage />
                </>
                } />
            </Routes>
        </ContextSell>
    )
}