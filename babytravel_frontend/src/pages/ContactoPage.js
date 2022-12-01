import React from 'react';
import '../styles/components/pages/ContactoPage.css';


const ContactoPage = (props) => {
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form action="" className="formulario">
                    <p>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" name="nombre" />
                    </p>
                    <p>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </p>
                    <p>
                        <label htmlFor="telefono">Telefono</label>
                        <input type="tel" name="telefono" />
                    </p>
                    <p>
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea name="mensaje" id="" cols="30" rows="10"></textarea>
                    </p>
                    <p className='acciones'>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>

            </div>
            <div className="datos">
                <h2>Otras Vias de Comunicación</h2>
                <p>También puede contactarse con nosotros usando los siguientes medios</p>
                <ul>
                    <li>Telefono: 43242388</li>
                    <li>Email: fededouglas@hotmail.com</li>
                    <li>Facebook:</li>
                    <li>Twitter:</li>
                    <li>Skipe:</li>
                </ul>
            </div>
        </main>
    );
}

export default ContactoPage;