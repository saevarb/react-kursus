import React from "react";
import "./App.css";
import {
  ComponentPlayground,
  Deck,
  Slide,
  Heading,
  SlideSet,
  List,
  ListItem,
  Fill,
  Text,
  Image,
  Appear,
  CodePane,
} from "spectacle";
import * as mobx from "mobx";
import * as mutils from "mobx-utils";
import { observer, Observer } from "mobx-react";
import createTheme from "spectacle/lib/themes/default";
import "./App.css";

import graph1 from "./graph1.png";
import graph2 from "./graph2.png";

const start = Date.now();

const testCode: string = `
const HelloWorld = () => {
  return <div>Hello!</div>;
};

render(<HelloWorld/>);
`;

const examplePreJsx = `
const HelloWorld = () => {
  return <div>Hello!</div>;
};
`;

const examplePostJsx = `
const HelloWorld = () => {
  return React.createElement("div", null, "Hello!");
};
`;

const HelloWorld = () => {
  return <div>Hello!</div>;
};

const Foo = () => (
  <ComponentPlayground
    scope={{ observer, mutils, mobx }}
    code={testCode}
  ></ComponentPlayground>
);

const theme = createTheme(
  {
    primary: "#464646",
    secondary: "white",
    tertiary: "lightslategrey",
    textColor: "white",
  },
  {
    secondary: {
      name: "Roboto",
      googleFont: true,
      styles: ["400"],
    },
  },
);

const App = () => {
  return (
    <Deck transition={["slide"]} theme={theme}>
      <Slide key>
        <Heading caps textColor="secondary" size={1}>
          React crash course
        </Heading>
      </Slide>
      <Slide>
        <Heading size={5} caps textColor="secondary">
          React
        </Heading>
        <List>
          <Appear>
            <ListItem>Created in 2013 by Facebook</ListItem>
          </Appear>
          <Appear>
            <ListItem>Declarative, component-based (vs imperative)</ListItem>
          </Appear>
          <Appear>
            <ListItem>Based on functional programming principles</ListItem>
          </Appear>
          <Appear>
            <ListItem>Cross-platform (browser, mobile, etc)</ListItem>
          </Appear>
          <Appear>
            <ListItem>Extremely popular</ListItem>
          </Appear>
        </List>
      </Slide>
      <Slide>
        <Heading size={5} caps textColor="secondary">
          React vs others
        </Heading>
        <Image src={graph1}></Image>
      </Slide>
      <Slide>
        <Heading size={5} caps textColor="secondary">
          OpenUI5
        </Heading>
        <Image src={graph2}></Image>
      </Slide>
      <Slide>
        <Heading size={5} caps textColor="secondary">
          Basic React
        </Heading>
        <Heading size={6} caps textColor="tertiary">
          JSX
        </Heading>
        <List>
          <ListItem>Components are written in JSX</ListItem>
          <ListItem>Extension of JS</ListItem>
          <ListItem>Mix of HTML and JS(kind of)</ListItem>
          <ListItem>Really just syntactic sugar</ListItem>
        </List>
      </Slide>
      <Slide>
        <Heading size={5} caps textColor="secondary">
          Basic React
        </Heading>
        <Heading size={6} caps textColor="tertiary">
          Components
        </Heading>
        <Text textColor="secondary">
          A component is a function that returns HTML
        </Text>
        <Appear>
          <div>
            <ComponentPlayground
              code={testCode}
              previewBackgroundColor="#464646"
            ></ComponentPlayground>
          </div>
        </Appear>
      </Slide>
      <Slide>
        <Heading size={5} caps textColor="secondary">
          Basic React
        </Heading>
        <Heading size={6} caps textColor="tertiary">
          JSX Translation
        </Heading>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, marginRight: "16px" }}>
            <CodePane source={examplePreJsx}></CodePane>
          </div>
          <div style={{ flex: 1 }}>
            <CodePane source={examplePostJsx}></CodePane>
          </div>
        </div>
      </Slide>
    </Deck>
  );
};

export default App;
