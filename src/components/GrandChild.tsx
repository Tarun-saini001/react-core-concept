import React from 'react'

type childProps = {
    increment: () => void
    decrement: () => void
}
const GrandChild = ({ increment, decrement }: childProps) => {
    // const handleIncrement = () => {
    //     setCountValue(count + 1);
    // }
    // const handledecrement = () => {
    //    setCountValue(count - 1);
    // }
    return (
        <div className=' flex gap-2'>
            <button onClick={increment}>+</button>

            <button onClick={decrement}> -</button>
        </div>
    )
}

export default GrandChild
