import React, { useEffect, useState } from "react";

// EXAMPLE START
const Demo = () => {
    const [value, setValue] = useState(0);
    console.log("Rerender");
    useEffect(() => {
        console.log("Value changed to:", value);
    }, [value])
    return (
        <div>
          <p>
            Value: {value}
          </p>
          <button onClick={() => setValue((prev) => prev + 1)}>+</button>
          <button onClick={() => setValue((prev) => prev - 1)}>-</button>
          <button onClick={() => setValue(0)}>0</button>
        </div>
    );
};

render(<Demo/>);
// EXAMPLE END
