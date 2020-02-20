import React from "react";

// EXAMPLE START

class Counter {
  // Primitive types (number, etc) cannot be made observable
  _counter = mobx.observable({
    value: 0,
  });

  get value() {
    return this._counter.value;
  }

  increment = mobx.action(() => {
    this._counter.value++;
  });
}
const counter = new Counter();

const Demo = observer(() => {
  useEffect(() => {
    const blah = setInterval(() => {
      console.log(counter.value);
      counter.increment();
    }, 1000);
    return () => clearInterval(blah);
  });
  return (
    <div>
      <ObserverComp counter={counter.nested}></ObserverComp>
      <NonObserverComp counter={counter.nested}></NonObserverComp>
    </div>
  );
});

const ObserverComp = observer((props) => {
  return (
    <div>
      Observer <ObserverNumber value={props.counter.value}></ObserverNumber>
    </div>
  );
});

const ObserverNumber = observer((props) => {
  return <div style={{ fontSize: "2em" }}>{props.value}</div>;
});

const NonObserverComp = (props) => {
  return (
    <div>
      NonObserver <NonObserverNumber value={props.counter.value}></NonObserverNumber>
    </div>
  );
};

const NonObserverNumber = (props) => {
  return <div style={{ fontSize: "2em" }}>{props.value}</div>;
};

render(<Demo />);
// EXAMPLE END
