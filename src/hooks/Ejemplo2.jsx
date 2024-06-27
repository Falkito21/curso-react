/**
 * Ejemplo de uso de: 
 * - useStare()
 * - useRef()
 * - useEffect()
 */

import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {

    // vamos a crear dos contadores distintos
    //cada uno en un estado diferente
    const [contadorUno, setContadorUno] = useState(0);
    const [contadorDos, setContadorDos] = useState(0);
    
    //generamos una referencia con useRef() para asociar una variable con un elemento del dom
    const miRef = useRef();

    function incrementarUno() {
        setContadorUno(contadorUno + 1);
    }

    function incrementarDos() {
        setContadorDos(contadorDos + 1);
    }


    /**
     * Trabajando con useEffect
     */

    /**
     * ? Caso 1 : Ejecutar SIEMPRE un snippet de codigo
     * Cada vez que hay a un cambio en el estado del componente 
     * se ejecuta aquello que este dentro del useEffect()
     */

    // useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')   
    //     console.log('mostrando referencia a elemento del dom:')
    //     console.log(miRef);
    // });

     /**
      * ? Caso 2: Ejecutar solo cuando cambie el contador uno
      * cada vez que haya un cambio en contador uno se ejecuta lo que diga el useEffect
      */
    //  useEffect(() => {
    //     console.log('CAMBIO EN EL ESTADO DEL CONTADOR UNO')   
    //     console.log('mostrando referencia a elemento del dom:')
    //     console.log(miRef);
    //  }, [contadorUno]);

     /**
      * ? Caso 2: Ejecutar solo cuando cambie el contador uno o contador 2
      * cada vez que haya un cambio en contador uno o en contador dos se ejecuta lo que diga el useEffect
      */
     useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL CONTADOR UNO Y DOS')   
        console.log('mostrando referencia a elemento del dom:')
        console.log(miRef);
     }, [contadorUno, contadorDos]);
    
    return (
        <div>
            <h1>*** Ejemplo de useState(), useRef(), useEffect() ***</h1>
            <h2>CONTADOR UNO: {contadorUno}</h2>
            <h2>CONTADOR DOS: {contadorDos}</h2>
            {/* elemento referenciado */}
            <h4 ref={miRef}>
                Ejemplo de elemento referenciado
            </h4>
            {/* botones para cambiar los contadores */}
            <button onClick={incrementarUno}>Incrementar Uno</button>
            <button onClick={incrementarDos}>Incrementar `Dos</button>
        </div>
    );
}

export default Ejemplo2;
