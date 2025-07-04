import React, { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div className="text-white">
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Example;

// import React from "react";

// const Example = () => {
//   //Count variable
//   let count = 0;
//   //Increment and decrement funtions
//   const increment = () => {
//     count++;
//     console.log("count: " + count);
//   };

//   //decrement function
//   const decrement = () => {
//     count--;
//     console.log("Count: " + count);
//   };

//   return (
//     <div className="text-white">
//       <h1>Count: {count}</h1>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// };

// export default Example;
