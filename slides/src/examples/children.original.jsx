import React from "react";

// EXAMPLE START
const ColorContainer = (props) => {
  const style = {
    backgroundColor: props.color,
  };
  return <div style={style}>{props.children}</div>;
};

const Demo = () => {
  return (
    <div>
      <ColorContainer color="blue">Blue background!</ColorContainer>
      <ColorContainer color="green">Green background!</ColorContainer>
    </div>
  );
};

render(<Demo />);
// EXAMPLE END
