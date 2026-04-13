import React, { useState } from 'react'
import Child from './Child';

const Parent = () => {
    const [count, setCount] = useState<number>(0);
    // const handleCount=(value:number)=>{
    //     setCount(value)
    // }
    const increament = () => setCount(pre => pre + 1)
    const decrement = () => setCount(pre => pre - 1)
    return (
        <div>
            <h1>Hello from Parent component</h1>
            <Child count={count} increment={increament} decrement={decrement} />
        </div>
    )
}

export default Parent
