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
import { Headings, Text, Playground } from "./util";

const start = Date.now();

const testCode: string = `
const HelloWorld = () => {
  return <div>Hello!</div>;
};

render(<HelloWorld/>);
`;

const testCode1: string = `
const Hello = (props) => {
  return <div>Hello, {props.name}!</div>;
}

const Test = () => {
  return <div>
    <Hello name="Steven"/>
    <Hello name="Trump"/>
  </div>;
}

render(<Test/>);
`;

const examplePreJsx = `
const HelloWorld = () => {
  return <div>
    Hello!
  </div>;
};`;

const examplePostJsx = `
const HelloWorld = () => {
  return React.createElement(
    "div",
    null,
    "Hello!"
  );
};`;

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
        <Headings heading="React"></Headings>
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
        <Headings heading="React vs others"></Headings>
        <Image src={graph1}></Image>
      </Slide>
      <Slide>
        <Headings heading="OpenUI5"></Headings>
        <Image src={graph2}></Image>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="JSX"></Headings>
        <List>
          <ListItem>Components are written in JSX</ListItem>
          <ListItem>Extension of JS</ListItem>
          <ListItem>Mix of HTML and JS(kind of)</ListItem>
          <ListItem>Really just syntactic sugar</ListItem>
        </List>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="Components"></Headings>
        <Text>A component is a function that returns HTML</Text>
        <Playground code={testCode}></Playground>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="JSX Translation"></Headings>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, marginRight: "16px" }}>
            <code className="sample">{examplePreJsx}</code>
          </div>
          <div style={{ flex: 1 }}>
            <code className="sample">{examplePostJsx}</code>
          </div>
        </div>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="Props"></Headings>
        <List>
          <ListItem>Components, like functions, can take arguments</ListItem>
          <ListItem>In React, they're referred to as props</ListItem>
        </List>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="Props"></Headings>
        <Playground code={testCode1} />
      </Slide>
    </Deck>
  );
};

export default App;
