/**
 * Ejemplo de uso de metodo componentDidUpdate en componente de clase y uso de hook en componente funcional 
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

    componentDidMount(){
        console.log('comportamiento cuando el componente recibe nuevo props o cambios en su estado privado')
    }
    
  render() {
    return (
      <div>
        <h1>DidUpdate</h1>
      </div>
    )
  }
}


export const DidUpdateHook = () => {

    useEffect(() => {
        
        console.log('comportamiento cuando el componente recibe nuevo props o cambios en su estado privado')
        
    });
    
    return (
        <div>
            <h1>DidUpdate</h1>
        </div>
    );
}


