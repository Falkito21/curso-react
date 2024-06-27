/**
 * Ejemplo de componente de tipo clase que dispone de los metodos de ciclo de vida
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class lifeCycleExample extends Component {
  constructor(props) {
    super(props)
    console.log('constructor cuando se instancia el componente')
  }

  componentWillMount() {
    console.log('WILLMOUNT: Antes del montaje del componente')
  }

  componentDidMount() {
    console.log('DIDMOUNT: Justo al acabar el montaje del componente, antes de renderizarlo')
  }

  componentWillReceiveProps(nextProps) {
    console.log('WillReceibeProps: Si va a recibir nuevas Props')
  }

  shouldComponentUpdate(nextProps, nextState) {
    /**
     * sirve para coontrolar si el componente debe o no actualizarse
     */
    //return true / false
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('Willupdate: Justo antes de actualizarse')
  } 

  componentDidUpdate(prevProps, prevState) {
    console.log('Didupdate: Justo despues de actualizarse')
  }

  componentWillUnmount() {
    console.log('WillUnmount: Justo antes de desaparecer')
  }

  render() {
    return (
        <div>
            
        </div>
    )
  }

}

