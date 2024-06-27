/**
 * Ejemplo para entender el uso de prop.children
 */
import React from 'react';

const Ejemplo4 = (prop) => {
    return (
        <div>
            <h1>
                *** Ejemplo de CHILDREN PROPS ***
            </h1>
            <h2>
                Nombre: { prop.nombre }
            </h2>
            {/* props.children pintara por defecto aquello que se encuentre entre las etiquetas de apertura y cierre de este componente desde el componente de orden superior */}
            {prop.children}
        </div>
    );
}

export default Ejemplo4;
