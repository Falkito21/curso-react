/**
 * Ejemplo de uso del metodo componentWillUnMount para componente clase
 * Ejemplo de uso del hooks para componente fucnional 
 * (cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react'

export class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('Comportamiento antes de que el componente desaparezca')
    }
    
  render() {
    return (
      <div>
        <h1>
            WillUnMount
        </h1>
      </div>
    )
  }
}


export const WillUnMountHook = () => {

    useEffect(() => {
        // aqui no ponemos nada 
        return () => {

            console.log('Comportamiento antes de que el componente desaparezca')
            
        };
    }, []);
    
    return (
        <div>
            
        </div>
    );
}

