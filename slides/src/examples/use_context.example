import React from "react";

// EXAMPLE START

const defaultColorTheme = {
  main: "blue",
};

const ThemeContext = React.createContext(defaultColorTheme);

const ColorDude = (props) => {
  const theme = useContext(ThemeContext);
  return <div style={{ backgroundColor: theme.main }}>{props.text}</div>;
};

const Demo = () => {
  return (
    <div>
      <ThemeContext.Provider value={{ main: "green" }}>
        <ColorDude text="Value from Provider" />
      </ThemeContext.Provider>
      <ColorDude text="Default value" />
    </div>
  );
};

render(<Demo />);
// EXAMPLE END
