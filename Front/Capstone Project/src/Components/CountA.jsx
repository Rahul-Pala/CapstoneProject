import React from 'react'
import useCounter from './useCounter'

function CountA() {
    const {count, Increment, Decrement} = useCounter(0)


  return (
    <div>
        {count}
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        

    </div>
  )
}

export default CountA