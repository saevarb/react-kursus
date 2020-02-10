import React, { useState } from "react";
import "./App.css";
import { MarkdownSlides, Deck, Slide, Heading, SlideSet, List, ListItem, Image, Appear, S, Markdown } from "spectacle";
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
import classComponentExample from "./examples/class_components.example";
import useStateExample from "./examples/use_state.example";
import useEffectExample1 from "./examples/use_effect1.example";
import useEffectExample2 from "./examples/use_effect2.example";

// CSS
import "./App.css";

// Images
import graph1 from "./graph1.png";
import graph2 from "./graph2.png";
import reactLifecycleSimple from "./react-lifecycle-simple.png";
import reactLifecycleFull from "./react-lifecycle-full.png";

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

const PopularitySlides = () => <></>;

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
      <Slide>
        <Headings heading="React vs others" />
        <Image src={graph1} />
      </Slide>
      <Slide>
        <Headings heading="OpenUI5" />
        <Image src={graph2} />
      </Slide>
      <Slide>
        <Headings heading="Getting started" subheading="Tooling" />
        <AppearingList>
          <ListItem>JavaScript tooling is notoriously confusing</ListItem>
          <ListItem>There are a lot of choices</ListItem>
          <ListItem>
            <code className="inline">yarn</code>, <code className="inline">npm</code>,{" "}
            <code className="inline">npx</code>, <code className="inline">node</code>,{" "}
            <code className="inline">gulp</code>, <code className="inline">parcel</code>
          </ListItem>
          <ListItem>
            <code className="inline">webpack</code>, <code className="inline">babel</code>,{" "}
            <code className="inline">tsc</code>, <code className="inline">tslint</code>,{" "}
            <code className="inline">eslint</code>, and many more
          </ListItem>
          <ListItem>These are just to run your code / build your project / etc</ListItem>
          <ListItem>Libraries/frameworks are worse</ListItem>
          <ListItem>
            <code className="inline">Angular(v1,v2)</code>, <code className="inline">Vue</code>,{" "}
            <code className="inline">react</code>, <code className="inline">react-native</code>,{" "}
            <code className="inline">jQuery</code>, <code className="inline">UI5</code>
          </ListItem>
          <ListItem>
            <code className="inline">redux</code>, <code className="inline">redux-saga</code>,{" "}
            <code className="inline">mobx</code> <code className="inline">rxjs</code>,{" "}
            <code className="inline">backbone</code>, <code className="inline">ember</code>
          </ListItem>
          <ListItem>
            <code className="inline">meteor</code>, <code className="inline">ionic</code>, ... ∞
          </ListItem>
          <ListItem>
            Thankfully, also <S type="italic">very</S> easy to get started (once you know how)
          </ListItem>
          <ListItem>I will recommend a specific combination of tools</ListItem>
        </AppearingList>
      </Slide>
      <Slide>
        <Headings heading="Getting started" subheading="Installation" />
        <AppearingList>
          <ListItem>Get chocolatey: https://www.chocolatey.org</ListItem>
          <ListItem>
            In powershell
            <List>
              <ListItem>
                <code className="inline">choco install yarn</code>
              </ListItem>

              <ListItem>
                <code className="inline">choco install git</code>
              </ListItem>
            </List>
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
          <ListItem>In settings (Ctrl+,), find and enable format on save</ListItem>
          <ListItem>Chrome/Firefox: Install react developer tools</ListItem>
          <ListItem>
            Open powershell in your project
            <code className="inline">git clone this-repo</code>
          </ListItem>
        </AppearingList>
      </Slide>
      <Slide>
        <Headings heading="Basic react" subheading="JSX" />

        <AppearingList>
          <ListItem>Components are written in JSX</ListItem>
          <ListItem>Extension of JS</ListItem>
          <ListItem>Mix of HTML and JS(kind of)</ListItem>
          <ListItem>Really just syntactic sugar</ListItem>
        </AppearingList>

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
            We&apos;ll explain <code className="inline">useState</code> in more detail in a bit
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
        <Headings heading="How react works" subheading="Reconciliation & keys" />
        <AppearingList>
          <ListItem>React tries to do minimal work</ListItem>
          <ListItem>Sometimes needs help to keep track of components</ListItem>
          <ListItem>When rendering an array of components, we need keys</ListItem>
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
          <ListItem>Class components can use special lifecycle methods</ListItem>
          <Playground code={classComponentExample}></Playground>
        </AppearingList>
      </Slide>
      <Slide>
        <Headings heading="How react works" subheading="Lifecycle methods" />
        <AppearingList>
          <ListItem>Special methods called by react during the different stages</ListItem>
          <ListItem>A way to react to changes in data</ListItem>
          <ListItem>Ex: When selected item changed, fetch new item from server</ListItem>
          <ListItem>
            Can be confusing to use
            <AppearingList>
              <ListItem>
                You can do <code className="inline">X</code> in method <code className="inline">A</code> but not{" "}
                <code className="inline">B</code>
              </ListItem>
              <ListItem>
                In method <code className="inline">C</code> you can do <code className="inline">X</code>,{" "}
                <code className="inline">Y</code>, <code className="inline">Z</code> but only{" "}
                <code className="inline">Z</code> if ..
              </ListItem>
            </AppearingList>
          </ListItem>
          <ListItem>Won&apos;t cover in detail, replaced with hooks</ListItem>
        </AppearingList>
      </Slide>
      <Slide>
        <Headings heading="How react works" subheading="Lifecycle & methods" />
        <Image src={reactLifecycleSimple}></Image>
      </Slide>
      <Slide>
        <Headings heading="How react works" subheading="Lifecycle & methods" />
        <Image src={reactLifecycleFull}></Image>
      </Slide>
      <Slide>
        <Headings heading="How react works" subheading="Lifecycle & methods" />
        <AppearingList>
          <ListItem>React&apos;s first design was too easy to misuse</ListItem>
          <ListItem>Some lifecycle methods were worse than others</ListItem>
          <ListItem>Some could/should be grouped into one</ListItem>
          <ListItem>Some were almost never a good idea to use</ListItem>
          <ListItem>Hard to reuse and compose</ListItem>
          <ListItem>Replaced with hooks</ListItem>
          <ListItem>Hooks can do everything you could before</ListItem>
        </AppearingList>
      </Slide>
      {MarkdownSlides`
##### Hooks
###### What are hooks
- There are several different standard hooks
- They all do different things and work differently ..
- .. but they all follow the same set of rules
- Hook rules
  - You can call hooks in react components
  - You can call hooks in custom hooks
---
##### Hooks
###### \`useState\`
- \`useState\` lets you store and update state in your components
- It is a function that takes an optional initial value and returns two values
- \`const [currentValue, setValue] = useState("initial state")\`
- The first value is always the current state
- The second value is a function that you *must* use to change the state
- If you change the state in other ways, react will not know
      `}
      <Slide>
        <Markdown>
          {`
##### Hooks
###### \`useState\`
- When replacing the state, you can simply do \`setState(newValue)\`
- When updating based on "current" state, you must use a function
- \`setState(prevState => prevState + 1)\` not \`setState(currentValue + 1)\`
- React schedules state updates internally for performance
- They can technically run out of order
- Not using \`prevState\` parameter risks race condition
- The \`prevState\` parameter will always be up to date

`}
        </Markdown>
        <Playground code={useStateExample}></Playground>
      </Slide>
      {MarkdownSlides`
##### Hooks
###### \`useEffect\`
- \`useEffect\` is the way we perform side-effects in components
- Side-effects are anything to do with the "outside world"
  - Fetching/sending data
  - Accessing local storage
  - Dealing with the DOM (almost never necessary with react)
  - etc
      `}
      <Slide>
        <Markdown>
          {`
##### Hooks
###### \`useEffect\`
- Broadly speaking, there are two types of effects
  - Effects that require cleanup (opening a connection, must be closed)
  - Effects that don't require cleanup(sending a HTTP request)
- \`useEffect\`'s first parameter is a function where you perform your side-effect
- If it requires cleanup, function should return a function to perform cleanup
          `}
        </Markdown>
        <Playground code={useEffectExample1}></Playground>
      </Slide>
      <Slide>
        <Markdown>
          {`
##### Hooks
###### \`useEffect\`
- \`useEffect\`'s second(and optional) parameter are the effect's *dependencies*
- When not used, the effect is run on every render
- When used, react only runs the effect if any of the dependencies changed
- Try the following
  - Open the console
  - Increase the counter by 1 and note the console messages
  - Decreate it to zero again and note the console messages
  - While still zero, reset to zero again
          `}
        </Markdown>
        <Playground code={useEffectExample2}></Playground>
      </Slide>
      <Slide>
        <Markdown>
          {`
##### Hooks
###### \`useEffect\`
- Foo
          `}
        </Markdown>
      </Slide>
    </Deck>
  );
};

export default App;
