import { useState } from "react";
import Child from "./Child";

const UpliftParent = () => {
  const [message, setMessage] = useState("");

  const dataFromChild = (data:string) => {
    setMessage(data);
  };

  return (
    <div>
      <h2>Parent</h2>

      <p>Message: {message}</p>

      <Child sendData={dataFromChild} />
    </div>
  );
};

export default UpliftParent;