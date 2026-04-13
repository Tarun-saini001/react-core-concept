import Child from "./Child"

const Parent = () => {
    const message = "Hello from parent"
    return (
        <div>
        <h1>parent</h1>
      <Child message={message}/>
    </div>
  )
}

export default Parent
