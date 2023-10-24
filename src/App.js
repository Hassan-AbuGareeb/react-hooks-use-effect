import React, { useState, useEffect } from "react";
import DogPics from "./DogPics";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
    setTimeout((() => setCount(0), 5000));
  });

  console.log("Component rendering");

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Click Me {count}</button>
      <DogPics count={count} />
    </>
  );
}

export default App;
