/**
 * Ejemplo de uso del metodo de ciclo de vida en componente clase y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react'

export class DidMount extends Component {

    componentDidMount(){
        console.log('Comportamiento antes de que el componente sea aniadido al dom (renderice)')
    }
    
  render() {
    return (
      <div>
        <h1>DidMount</h1>
      </div>
    )
  }
}

export const DidMountHook = () => {
    
    useEffect(() => {

        console.log('Comportamiento antes de que el componente sea aniadido al dom (renderice)')
        
    }, []); //[] solo se ejecutara una vez
     
    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}

export default DidMount;
