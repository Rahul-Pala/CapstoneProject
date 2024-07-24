import React, { useEffect } from 'react'
import useCounter from './useCounter'

function CountA(props) {
    const {count, Increment, Decrement} = useCounter(0)
    useEffect(() => {
      props.setTotal(parseInt(count * 70))
    },[count])


  return (
    <div>
        {count}
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
        

    </div>
  )
}

export default CountA