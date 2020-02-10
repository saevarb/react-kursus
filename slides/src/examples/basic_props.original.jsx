import React from "react";

// EXAMPLE START
const Hello = (props) => {
  return <div>Hello, {props.name}!</div>;
};

const Test = () => {
  return (
    <div>
      <Hello name="Steven" />
      <Hello name="Trump" />
    </div>
  );
};

render(<Test />);
// EXAMPLE END
