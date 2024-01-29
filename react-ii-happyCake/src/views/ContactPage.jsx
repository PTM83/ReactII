import { useState } from 'react';
//IMPORT CSS
import '../services/MainCake.css'

export const ContactPage = () => {

    //PARAMETERS
    const regexParaEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!regexParaEmail.test(email)) {
            return alert('Email debe ser user@example.com');
        } else if (email.length === 0) {
            return alert('Favor ingresar un email de contacto')
        } else if (message.length === 0) {
            return alert('Favor ingresar mensaje')
        }
        setEmail(''), setMessage('');
    }

    const handelEmail = (event) => {
        setEmail(event.target.value);
    }

    const handleMessage = (event) => {
        setMessage(event.target.value);
    }

    return(
        <main className='CPcontainter'>
            <header className='CPheader'>
                <h1>Cuentanos, ¿en qué te podemos ayudar?</h1>
            </header>

            <form onSubmit={(e) => handleSubmit(e)} className='CPform'>

                <div className='CPdiv'>
                    <label>Correo electrónico:</label>
                    <input type='email' placeholder='email@example.com' value={email} onChange={handelEmail}>
                    </input>
                </div>

                <div className='CPdiv'>
                    <label>Descripción del pedido:</label>
                    <textarea rows='4' required maxLength='500' value={message} onChange={handleMessage}>
                    </textarea>
                    <button type='submit' className='CPbutton'>Enviar</button>
                </div>

            </form>

        </main>
    )
}