 import React, { useState } from 'react'
 import propTypes from 'prop-types';
 
 const GreetingF = (props) => {

    const [age, setAge] = useState(29);

    const birthday = () => {
        setAge( age + 1 );
    }
    
   return (
    <div>
        <h1>HOLA { props.name } desde componente funcional !</h1>
        <h2>Tu edad es de: { age } </h2>
        <div>
            <button onClick={birthday}>
                Sumar Edad
            </button>
        </div>
    </div>
   );
 };
 
 GreetingF.propTypes = {
    name: propTypes.string
 };

 export default GreetingF;