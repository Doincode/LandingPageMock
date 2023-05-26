import React from 'react'
import { CounterContent } from './style'

const CounterSection = () => {
  return (
    <CounterContent>
      <div className="counter">
        <p className='title'>+20</p>
        <h3>anos de</h3>
        <h3 className='counter-text'>experiência</h3>
      </div>
    </CounterContent>
  )
}

export default CounterSection