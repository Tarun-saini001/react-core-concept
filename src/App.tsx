import { useState } from 'react'
import './App.css'
// import Parent from './propsDrilling/Parent'
import UpliftParent from './StateUpLifting/UpliftParent'
import Parent from './components/Parent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <p className=' text-center'>hello world</p> */}
    {/* <Parent/> */}

    {/* // state uplifting */}
    {/* <UpliftParent/> */}

    <Parent/>
    </>
  )
}

export default App
