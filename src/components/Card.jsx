import React from 'react';
import '../style/Card.css'

const Card = ({ title, children }) => {
    return(
        <div className='contenedor'>
            <div className='caja-principal'>
                <h2 className='titulo'>{title}</h2>
                <p className='parrafo'>{children}</p>
            </div>
        </div>
    );
}
export default Card;