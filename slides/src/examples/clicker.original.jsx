import React from "react";

// EXAMPLE START
const Clicker = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <button onClick={increment}>You have clicked me {counter} times</button>
  );
};

render(<Clicker />);
// EXAMPLE END
