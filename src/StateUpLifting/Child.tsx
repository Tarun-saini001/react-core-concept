type childProp={
  sendData:(data:string)=> void
}

const Child = ({ sendData }:childProp) => {
  return (
    <div >
      <h3>Child</h3>

      <button onClick={() => sendData("Hello from Child")}
        className="bg-black text-white"
        >
        Click Me
      </button>
    </div>
  );
};

export default Child;