import React, { useEffect, useState } from "react";

// EXAMPLE START

const Good = () => {
  useEffect(() => {
    console.log("good open");
    return () => {
      console.log("good close");
    };
  }, []);
  return <div>Good</div>;
};

const Bad = () => {
  useEffect(() => {
    console.log("bad open");
  }, []);
  return <div>Bad</div>;
};

const Demo = () => {
  const [good, setGood] = useState(false);
  const [bad, setBad] = useState(false);
  const negate = (b) => !b;

  return (
    <div>
      <p>
        Open the console (Ctrl+shift+I)
      </p>
      <button onClick={() => setGood(negate)}>Toggle good</button>
      <button onClick={() => setBad(negate)}>Toggle bad</button>
      {good && <Good />}
      {bad && <Bad />}
    </div>
  );
};

render(<Demo />);

// EXAMPLE END
