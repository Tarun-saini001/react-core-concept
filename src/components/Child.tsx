import React from 'react'
import GrandChild from './GrandChild'
type childProps={
    count:number,
    increment:()=>void
    decrement:()=>void
    }

const Child = ({count,increment, decrement}:childProps) => {
  return (
    <div>
        <p>Count:{count}</p>
      <GrandChild increment={increment} decrement={decrement} />
    </div>
  )
}

export default Child
