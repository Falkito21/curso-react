/**
 * Ejemplo Hooks: 
 * - useStat() 
 * - useContext()
 */
import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente Uno
 * Despone de un contexto que va a tener un valor que recibe desde el padre
 */

const miContexto = React.createContext(null)

const ComponenteUno = () => {

    //Inicializamos un estado vacio que va a rellenarse con los datos del contexto del padre
    const state = useContext(miContexto);
    
    return (
        <div>
            <h1>
                El Token es : {state.token}
            </h1>
            {/* pintamos el componente dos */}
            <ComponenteDos></ComponenteDos>
        </div>
    ); 
}

const ComponenteDos = () => {

    const state = useContext(miContexto);
    
    return (
        <div>
            <h2>
                La sesion es : {state.sesion}
            </h2>
        </div>
    );
}


const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: '1234567',
        sesion: 1 
    }
    
    // creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);
    
    function actualizarSesion() {
        setSessionData(
            {
                token: 'jwt1234587',
                sesion: sessionData.sesion + 1
            }
        );
    }
    
    return (
        <miContexto.Provider value = {sessionData}>
            {/* Todo lo que este aqui dentro puede leer los datos de sessionData */}
            {/* ademas, si se actualiza, los componetes de aqui, tambien lo actualizan */}
            <ComponenteUno></ComponenteUno>
            <button onClick={actualizarSesion}>Actualizar Sesion</button>
        </miContexto.Provider>
    );
}

export default MiComponenteConContexto;
