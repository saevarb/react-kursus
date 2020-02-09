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
  S,
} from "spectacle";
import * as mobx from "mobx";
import * as mutils from "mobx-utils";
import { observer, Observer } from "mobx-react";
import createTheme from "spectacle/lib/themes/default";
import "./App.css";

import graph1 from "./graph1.png";
import graph2 from "./graph2.png";
import { Headings, Text, Playground, AppearingList } from "./util";

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
  <ComponentPlayground scope={{ observer, mutils, mobx }} code={testCode} />
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

const IntroSlide = () => {
  return (
    <Slide>
      <Headings heading="React" />
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
  );
};

const TitleSlide = () => (
  <Slide key>
    <Heading caps textColor="secondary" size={1}>
      React crash course
    </Heading>
  </Slide>
);

const PopularitySlides = () => (
  <>
    <Slide>
      <Headings heading="React vs others" />
      <Image src={graph1} />
    </Slide>
    <Slide>
      <Headings heading="OpenUI5" />
      <Image src={graph2} />
    </Slide>
  </>
);

const App = () => {
  return (
    <Deck transition={["slide"]} theme={theme}>
      <TitleSlide />
      <IntroSlide />
      <PopularitySlides />
      <Slide>
        <Headings heading="Getting started" subheading="Tooling" />
        <AppearingList>
          <ListItem>JavaScript tooling is notoriously confusing</ListItem>
          <ListItem>There are a lot of choices</ListItem>
          <ListItem>
            <code className="inline">yarn</code>,{" "}
            <code className="inline">npm</code>,{" "}
            <code className="inline">npx</code>,{" "}
            <code className="inline">node</code>,{" "}
            <code className="inline">gulp</code>,{" "}
            <code className="inline">parcel</code>
          </ListItem>
          <ListItem>
            <code className="inline">webpack</code>,{" "}
            <code className="inline">babel</code>,{" "}
            <code className="inline">tsc</code>,{" "}
            <code className="inline">tslint</code>,{" "}
            <code className="inline">eslint</code>, and many more
          </ListItem>
          <ListItem>
            These are just to run your code / build your project / etc
          </ListItem>
          <ListItem>Libraries/frameworks are worse</ListItem>
          <ListItem>
            <code className="inline">Angular(v1,v2)</code>,{" "}
            <code className="inline">Vue</code>,{" "}
            <code className="inline">react</code>,{" "}
            <code className="inline">react-native</code>,{" "}
            <code className="inline">jQuery</code>,{" "}
            <code className="inline">UI5</code>
          </ListItem>
          <ListItem>
            <code className="inline">redux</code>,{" "}
            <code className="inline">redux-saga</code>,{" "}
            <code className="inline">mobx</code>{" "}
            <code className="inline">rxjs</code>,{" "}
            <code className="inline">backbone</code>,{" "}
            <code className="inline">ember</code>
          </ListItem>
          <ListItem>
            <code className="inline">meteor</code>,{" "}
            <code className="inline">ionic</code>, ... ∞
          </ListItem>
          <ListItem>
            Thankfully, also <S type="italic">very</S> easy to get started (once
            you know how)
          </ListItem>
          <ListItem>I will recommend a specific combination of tools</ListItem>
        </AppearingList>
      </Slide>
      <Slide>
        <Headings heading="Getting started" subheading="Installation" />
        <AppearingList>
          <ListItem>Get chocolatey: https://www.chocolatey.org</ListItem>
          <ListItem>
            Open powershell: <code className="inline">choco install yarn</code>
          </ListItem>
          <ListItem>
            <code className="inline">choco install git</code>
          </ListItem>
          <ListItem>Install VS Code(NB: pick explorer extensions)</ListItem>
          <ListItem>
            Install extensions
            <List>
              <ListItem>
                <code className="inline">typescript</code>
              </ListItem>
              <ListItem>
                <code className="inline">eslint</code>
              </ListItem>
              <ListItem>
                <code className="inline">prettier</code>
              </ListItem>
              <ListItem>
                <code className="inline">intellicode</code>(optional)
              </ListItem>
              <ListItem>
                <code className="inline">javascript</code>(optional)
              </ListItem>
            </List>
          </ListItem>
          <ListItem>
            In settings (Ctrl+,), find and enable format on save
          </ListItem>
          <ListItem>
            Open powershell in your project
            <code className="inline">
              git clone this-repogit clone this-repo
            </code>
          </ListItem>
        </AppearingList>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="JSX" />
        <List>
          <AppearingList>
            <ListItem>Components are written in JSX</ListItem>
            <ListItem>Extension of JS</ListItem>
            <ListItem>Mix of HTML and JS(kind of)</ListItem>
            <ListItem>Really just syntactic sugar</ListItem>
          </AppearingList>
        </List>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="Components" />
        <Text>A component is a function that returns HTML</Text>
        <Playground code={testCode} />
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="JSX Translation" />
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
        <Headings heading="Basic react" subheading="Props" />
        <AppearingList>
          <ListItem>Components, like functions, can take arguments</ListItem>
          <ListItem>In React, they&apos;re referred to as props</ListItem>
          <ListItem>Pass arguments via HTML attributes in JSX</ListItem>
        </AppearingList>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="Props" />
        <Playground code={testCode1} />
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="Props" />
        <AppearingList>
          <ListItem>Components can have children too</ListItem>
          <ListItem>They&apos;re part of the props</ListItem>
          <ListItem>And of course, you can use CSS for styling</ListItem>
        </AppearingList>
        <Appear>
          <div>
            <Playground code="" />
          </div>
        </Appear>
      </Slide>
    </Deck>
  );
};

export default App;
