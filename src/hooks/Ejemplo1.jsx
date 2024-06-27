/**
 * Ejemplo de uso de useState
 * 
 * Crear un componente de tipo funcion 
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    //valor inicial para un contador 
    const valorInicial = 0; 

    //valor inicial para una persona
    const personaIncial = {
        nombre : 'Juan',
        email : 'juan@gmail.com'
    }

    // queremos que el valor incial y persona incial sean parte del estado del componente para gestionar su cambio y que este se refleje en la vista del componente

    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaIncial);
    
    /**
     * funcion para actualizar el estado privado que contiene el contador 
     */
    function incrementarContador(){
        setContador(contador + 1);
    }

    /**
     * Funcion para actualizar el estado de persona en el componente
     */
    function actualizarPersona(){
        setPersona(
            {
                nombre: 'Juancito',
                email: 'juancito@gmail.com'
            }
        )
    }
    
    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>Nombre: {persona.nombre}</h2>
            <h2>Email: {persona.email}</h2>
            <button onClick={incrementarContador}>Contador</button>
            <button onClick={actualizarPersona}>actualizar</button>
        </div>
    );
}

export default Ejemplo1;
