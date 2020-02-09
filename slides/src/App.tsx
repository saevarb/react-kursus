import React, { useState } from "react";
import "./App.css";
import {
  Deck,
  Slide,
  Heading,
  SlideSet,
  List,
  ListItem,
  Image,
  Appear,
  S,
} from "spectacle";
import * as mobx from "mobx";
import * as mutils from "mobx-utils";
import { observer, Observer } from "mobx-react";
import { Headings, Text, Playground, AppearingList } from "./util";
import createTheme from "spectacle/lib/themes/default";

// Examples
import helloWorld from "./examples/hello_world.example";
import basicProps from "./examples/basic_props.example";
import childrenExample from "./examples/children.example";
import preJsxExample from "./examples/pre_jsx.example";
import postJsxExample from "./examples/post_jsx.example";
import clickerExample from "./examples/clicker.example";

// CSS
import "./App.css";

// Images
import graph1 from "./graph1.png";
import graph2 from "./graph2.png";

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
      <Slide>
        <Headings heading="React" />
        <AppearingList>
          <ListItem>Created in 2013 by Facebook</ListItem>
          <ListItem>Declarative, component-based (vs imperative)</ListItem>
          <ListItem>Based on functional programming principles</ListItem>
          <ListItem>Cross-platform (browser, mobile, etc)</ListItem>
          <ListItem>Extremely popular, massive ecosystem</ListItem>
        </AppearingList>
      </Slide>
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
            <code className="inline">git clone this-repo</code>
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

        <Appear>
          <div>
            <Playground code={helloWorld} />
          </div>
        </Appear>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="JSX Translation" />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1, marginRight: "16px" }}>
            <code className="sample">{preJsxExample}</code>
          </div>
          <div style={{ flex: 1 }}>
            <code className="sample">{postJsxExample}</code>
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
        <Playground code={basicProps} />
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
            <Playground code={childrenExample} />
          </div>
        </Appear>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="Props" />
        <AppearingList>
          <ListItem>Components can be interactive too</ListItem>
          <ListItem>
            We&apos;ll explain <code className="inline">useState</code> in more
            detail in a bit
          </ListItem>
        </AppearingList>
        <Playground code={clickerExample} />
      </Slide>
      <Slide>
        <Headings heading="How react works" subheading="Virtual DOM" />
        <AppearingList>
          <ListItem>React maintains a virtual DOM</ListItem>
          <ListItem>Keeps track of each components dependencies</ListItem>
          <ListItem>When data changes, components are rerendered</ListItem>
          <ListItem>Virtual DOM is compared, reconciled</ListItem>
        </AppearingList>
      </Slide>
      <Slide>
        <Headings
          heading="How react works"
          subheading="Reconciliation & keys"
        />
        <AppearingList>
          <ListItem>React tries to do minimal work</ListItem>
          <ListItem>Sometimes needs help to keep track of components</ListItem>
          <ListItem>
            When rendering an array of components, we need keys
          </ListItem>
          <ListItem>Keys should be unique among siblings</ListItem>
          <ListItem>Should uniquely identify elements</ListItem>
          <ListItem>
            E.g. <code className="inline">user.id</code>, not the array index
          </ListItem>
        </AppearingList>
      </Slide>
      <Slide>
        <Headings heading="How react works" subheading="Old-style components" />
        <AppearingList>
          <ListItem>Components used to be classes</ListItem>
          <ListItem>Can still be classes</ListItem>
          <ListItem>
            Class components can use special lifecycle methods
          </ListItem>
        </AppearingList>
      </Slide>
    </Deck>
  );
};

export default App;
