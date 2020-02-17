import React from "react";

// EXAMPLE START

const defaultColorTheme = {
  main: "blue",
};

const ThemeContext = React.createContext(defaultColorTheme);

const ColorDude = (props) => {
  return <div style={{ backgroundColor: props.color }}>{props.text}</div>;
};

const Demo = () => {
  return (
    <div>
      <ThemeContext.Provider value={{ main: "green" }}>
        <ThemeContext.Consumer>
          {(theme) => <ColorDude color={theme.main} text="Value from Provider" />}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
      <ThemeContext.Consumer>{(theme) => <ColorDude color={theme.main} text="Default value" />}</ThemeContext.Consumer>
    </div>
  );
};

render(<Demo />);
// EXAMPLE END
